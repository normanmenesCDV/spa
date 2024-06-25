import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //const produkty = [
    //    { id: 1, title: "iPhone 14", brand: "Apple" },
    //    { id: 2, title: "iPad Air", brand: "Apple" },
    //    { id: 3, title: "Galaxy A51", brand: "Samsung" },
    //  ];
    //  setProducts(produkty);

    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        setProducts(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(products);

  return (
    <div>
      <h1>List of products</h1>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            brand={product.brand}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
