import App from "./App";
import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToNodeStream } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/", (req, res) => {
    const sheet = new ServerStyleSheet();

    res.write(`<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          process.env.NODE_ENV === "production"
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body>
        <div id="root">`);
    const context = {};
    const render$ = sheet.interleaveWithNodeStream(
      renderToNodeStream(
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      )
    );

    render$.pipe(res, { end: false });

    render$.on("end", () => {
      res.write(`</div>
      </body>
  </html>`);
      res.end();
    });
  });

export default server;
