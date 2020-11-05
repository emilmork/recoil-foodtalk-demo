import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.generated.css";

import { RecoilRoot } from "recoil";
import GlobalObserver from "./components/GlobalObserver";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalObserver />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
