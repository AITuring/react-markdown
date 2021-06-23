import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Markdown from "./Markdown";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Markdown />
  </StrictMode>,
  rootElement
);
