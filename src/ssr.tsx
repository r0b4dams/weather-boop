import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Client } from "./client";

export const render = (url: string) => {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <Client />
      </StaticRouter>
    </React.StrictMode>,
  );
};
