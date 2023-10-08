import React from "react";
import { createRoot } from "react-dom/client";

function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Garage />);
