import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetails({ products }) {
  const { id } = useParams();
  var product = products.find((x) => x.id == id);

  if (product == null) return null;

  return (
    <div>
      <Link to={`../`}>Strona główna</Link>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} /> <br />
      <label>category: </label>
      {product.category}
      <br />
      <label>brand: </label>
      {product.brand}
      <br />
      <label>description: </label>
      {product.description}
      <br />
    </div>
  );
}

export default ProductDetails;
