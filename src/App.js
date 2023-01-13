import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import { StyleProvider } from "./theme";
import { PageLoader } from "./components/shared/page-loader/page-loader";

const LazyloadedShoppingCart = lazy(() =>
  import("../src/pages/cart").then((module) => ({
    default: module.ShoppingCart,
  }))
);

function App() {
  return (
    <StyleProvider>
      <Suspense fallback={<PageLoader />}>
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
