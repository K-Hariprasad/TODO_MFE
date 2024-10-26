import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// for container
const mount = (el) => {
  const root = createRoot(el);
  if (root) {
    root.render(<App />);
  }
};

// for running in isolation
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("todo_remote_root");
  if (el) {
    mount(el);
  }
}

export { mount };
