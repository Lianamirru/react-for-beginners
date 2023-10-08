import React from "react";
import { createRoot } from "react-dom/client";

function Person(props) {
  return <h2>I'm {props.name}!</h2>;
}

function Greeting() {
  const name = "Jesse";
  return (
    <>
      <h1>Hello!</h1>
      <Person />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Greeting />);
