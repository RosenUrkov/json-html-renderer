import fs from 'node:fs/promises';
import express from 'express';

// Constants
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;
const base = process.env.BASE || '/';

// Cached production assets
const templateHtml = isProduction ? await fs.readFile('./dist/client/index.html', 'utf-8') : '';
const ssrManifest = isProduction ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8') : undefined;

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite;
if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import('compression')).default;
  const sirv = (await import('sirv')).default;
  app.use(compression());
  app.use(base, sirv('./dist/client', { extensions: [] }));
}

// Serve HTML
app.use('*', async (req, res) => {
  if (!req.query.hash) {
    return res.status(400).send('Please enter a correct hash as a query parameter!');
  }

  try {
    const url = req.originalUrl.replace(base, '');

    let template;
    let render;
    let getData;
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile('./index.html', 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      getData = (await vite.ssrLoadModule('/src/utils.ts')).getData;
    } else {
      template = templateHtml;
      const imported = await import('./dist/server/entry-server.js');
      render = imported.render;
      getData = imported.getData;
    }

    const data = await getData(req.query.hash);
    const script = `<script>window.__data__=${JSON.stringify(data)}</script>`;

    const rendered = await render(data, url, ssrManifest);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ? `${rendered.html} ${script}` : '');

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);

    if (!isProduction) {
      res.status(e.status || 500).end(e.stack);
    } else {
      res.status(e.status || 500).send(e.message);
    }
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
