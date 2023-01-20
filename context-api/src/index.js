import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { CounterContextProvider } from "./context/CounterContext";
import { TitleColorContextProvider } from "./context/TitleColorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 2 - Criando Provider */}
    {/* Importa a função que tem a createContext e seus valores para serem repassados como children */}
    <CounterContextProvider>
      <TitleColorContextProvider>
        {" "}
        {/*Como ele tem o children, ele renderiza tudo que tem no App também*/}
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
