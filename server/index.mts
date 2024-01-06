import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

const app = express();

app.get("/*", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(3001, () => {
  console.log("App is running on http://localhost:3001");
});
