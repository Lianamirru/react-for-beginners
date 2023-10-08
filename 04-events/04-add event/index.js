import React from "react";
import { createRoot } from "react-dom/client";

function Football() {
  const shoot = () => {
    alert("Great Shot!");
  };

  return <button onClick={shoot}>Take the shot!</button>;
}

const root = createRoot(document.getElementById("root"));
root.render(<Football />);
