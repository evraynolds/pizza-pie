import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import Order from "./Order";
import { CartContext } from "./contexts";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Past from "./Past";
const queryClient = new QueryClient()

const App = () => {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <CartContext.Provider value={cartHook}>
          <BrowserRouter>
            <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<Order />} />
                <Route path="/past" element={<Past />} />
              </Routes>
            <PizzaOfTheDay />
          </BrowserRouter>
        </CartContext.Provider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
