import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import { StyleProvider } from "./theme";

const LazyloadedShoppingCart = lazy(() =>
  import("../src/pages/cart").then((module) => ({
    default: module.ShoppingCart,
  }))
);

function App() {
  return (
    <StyleProvider>
      <Suspense fallback={<p>Loading ...</p>}>
        <BrowserRouter>
          <Routes>
            <Route path="/cart" element={<LazyloadedShoppingCart />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </StyleProvider>
  );
}

export default App;
