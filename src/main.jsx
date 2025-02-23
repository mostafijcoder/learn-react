import React from "react";
import { createRoot } from "react-dom/client";
import Counter from "./App.jsx";
import MyComponent from "./App.jsx";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>
);
