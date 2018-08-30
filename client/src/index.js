import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store/index";
import Spots from "./components/Spots/index";

function App() {
  return (
    <div className="App">
      <Spots />
    </div>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
