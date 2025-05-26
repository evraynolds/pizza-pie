// add to the top
import { createRoot } from "react-dom/client";
// import Pizza from "./Pizza";
import Order from "./Order";
// import { StrictMode } from "react";

const App = () => {
  return (
    <div>
      <h1>Pizza Pie's - Order Now</h1>
      <Order />

      {/* <Pizza
        name="cheese"
        description="Melty goodness"
        image={"/public/pizzas/five_cheese.webp"}
      />
      <Pizza
        name="pepperoni"
        description="round"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="mushroom"
        description="Fun! gi"
        image={"/public/pizzas/pep_msh_pep.webp"}
      />
      <Pizza
        name="vegetable"
        description="Earthy!"
        image={"/public/pizzas/veggie_veg.webp"}
      />
      <Pizza
        name="meat"
        description="It's a Feast!"
        image={"/public/pizzas/big_meat.webp"}
      /> */}
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
root.render(<App />);
