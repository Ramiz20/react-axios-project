import "../Style/Style.css";
import Category from "./Category";
import Content from "./Content";
import ProductList from "./ProductList";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

function Main() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);

  const lastPostIndex = page * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = product.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products?limit=0&skip=0`)
      .then((res) => setProduct(res.data.products))
      .finally(setLoading(false));
  }, [page]);
  
  console.log(product);
  return (
    <>
      <main>
        <Category />
        <Content />
        <ProductList product={currentPosts} />
        {loading ? (
          <h1>Loading ...</h1>
        ) : (
          <Pagination
            totalPosts={product.length}
            postsPerPage={postsPerPage}
            setPage={setPage}
          />
        )}
      </main>
    </>
  );
}

export default Main;
