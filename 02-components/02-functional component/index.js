import React from "react";
import { createRoot } from "react-dom/client";

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

const root = createRoot(document.getElementById("root"));
root.render(<Car />);
