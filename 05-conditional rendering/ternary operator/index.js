import React from "react";
import { createRoot } from "react-dom/client";

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}

const root = createRoot(document.getElementById("root"));
root.render(<Goal isGoal={false} />);
