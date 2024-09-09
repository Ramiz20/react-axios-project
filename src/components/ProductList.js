import { BiDollar } from "react-icons/bi";
import { Link } from "react-router-dom";

function ProductList({ product }) {

  return (
    <>
      <div className="container">
        {product.map((d) => (
          <div className="product" key={d.id}>
            <Link to={`/product/${d.id}`}>
              <img src={d.thumbnail} alt={d.title} />
            </Link>
            <h2>{d.title}</h2>
            <p>
              <BiDollar /> {d.price}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
