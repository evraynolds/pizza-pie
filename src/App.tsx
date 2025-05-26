// add to the top
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
import { StrictMode } from "react";

const App = () => {
  return (
    <div>
      <h1>Pizza Pie's - Order Now</h1>
      <Pizza name="cheese" description="Melty goodness" />
      <Pizza name="mushroom" description="Fun! gi" />
      <Pizza name="vegetable" description="Earthy!" />
      <Pizza name="meat" description="It's a Feast!" />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Papa Gino's"),
  //   React.createElement(Pizza)
  // );
};

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
