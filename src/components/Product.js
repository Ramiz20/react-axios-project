import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiDollar } from "react-icons/bi";
import axios from "axios";
import "../Style/Style.scss";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const showProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    showProduct();
  }, [id]);

  console.log(product);

  if (loading) <h1>Loading...</h1>;

  return (
    <>
      <div className="product-item">
        <img src={product.thumbnail} alt={product.title} />
        <div className="product-content">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>
            <BiDollar /> {product.price}
          </p>
        </div>
      </div>
    </>
  );
}

export default Product;
