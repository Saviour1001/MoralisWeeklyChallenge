import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.css";
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";
import { BrowserRouter as Router } from "react-router-dom";

/** Get your free Moralis Account https://moralis.io/ */

const APP_ID = "5RjPzxxFonTsBrJeGBs2X5lJR4lh6kJClOXTpo8f";
const SERVER_URL = "https://ynezdcs2c9gy.usemoralis.com:2053/server";

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <MoralisDappProvider>
          <App isServerInfo />
        </MoralisDappProvider>
      </MoralisProvider>
    );
};

ReactDOM.render(
  <React.StrictMode>
    <Router basename="https://saviour1001.github.io/moralisweeklychallenge/">
      <Application />,
    </Router>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
