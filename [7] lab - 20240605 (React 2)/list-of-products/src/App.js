import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import "./App.css";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        setProducts(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList products={products} />,
    },
    {
      path: "details/:id",
      element: <ProductDetails products={products} />,
    },
  ]);
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

  return <div className="App"></div>;
}

/*
<BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route
            path="details/:id"
            element={<ProductDetails products={products} />}
          />
        </Routes>
      </BrowserRouter>
*/
export default App;
