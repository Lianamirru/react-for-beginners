import React from "react";
import { createRoot } from "react-dom/client";

function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Garage />);
