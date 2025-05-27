// add to the top
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Pizza from "./Pizza";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1 className="logo">Pizza Pie's - Order Now</h1>
        <Order />
        <PizzaOfTheDay />
        {/* <Pizza
        name="cheese"
        description="Melty goodness"
        image={"/public/pizzas/five_cheese.webp"}
      />
*/}
      </div>
    </StrictMode>
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
root.render(<App />);
