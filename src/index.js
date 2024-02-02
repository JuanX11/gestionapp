import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NextUIProvider>
    <App />
  </NextUIProvider>
);
