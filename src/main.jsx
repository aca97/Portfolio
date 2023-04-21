import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: "IBM Plex Mono", monospace !important;
    color: rgb(255, 255, 255);
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    background-color: #242424;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
