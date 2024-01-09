import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import { DesignData } from './types'

export function render(data: DesignData) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App {...data} />
    </React.StrictMode>
  )
  return { html }
}
