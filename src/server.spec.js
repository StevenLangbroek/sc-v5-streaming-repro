import React from "react";
import { renderToNodeStream } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import ofStream from "stream-to-promise";
import Home from "./Home";
import beautify from "beautify";

describe("Style Hydration", () => {
  it("should include styles", () => {
    const sheet = new ServerStyleSheet();
    const render$ = renderToNodeStream(<Home />);
    const style$ = sheet.interleaveWithNodeStream(render$);

    return ofStream(style$)
      .then(b => b.toString())
      .then(received => {
        console.log(beautify(received, { format: "html" }));
      });
  });
});
