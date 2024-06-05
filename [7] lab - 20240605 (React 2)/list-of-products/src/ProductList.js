import React, { useState } from "react";
import ProductItem from "./ProductItem";

function ProductList({ products }) {
  const [filter, setFilter] = useState("");

  console.log(products);
  console.log(`filter=${filter}`);

  return (
    <div>
      <h1>List of products</h1>
      <label>Filter by product title: </label>
      <input
        className="fill"
        onChange={(e) => setFilter(e.target.value)}
      ></input>
      <ul>
        {products
          .filter(function (el) {
            return el.title.indexOf(filter) > -1;
          })
          .map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              brand={product.brand}
            />
          ))}
      </ul>
    </div>
  );
}

export default ProductList;
