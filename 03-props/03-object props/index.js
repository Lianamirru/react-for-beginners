import React from "react";
import { createRoot } from "react-dom/client";

function Car(props) {
  return <h2>I am a {props.brand.model}!</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carInfo} />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Garage />);
