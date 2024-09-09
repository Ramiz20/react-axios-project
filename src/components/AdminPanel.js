import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../Style/Style.scss";

function AdminPanel() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => setProduct(res.data.products))
      .finally(setLoading(false));
  }, [id]);

  const handleDelete = (id) => {
    console.log(1);
    axios
      .delete(`https://dummyjson.com/products/${id}`)
      .then((res) => console.log(res.data.products));
  };

  // console.log(product);
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>&#9998;</th>
            </tr>
          </thead>
          <tbody>
            {product.map((p, index) => {
              return (
                <tr key={index}>
                  <td>{p.id}</td>
                  <td>{p.title}</td>
                  <td>{p.price}</td>
                  <td>
                    <div>
                      <Link to={`/admin/update/${p.id}`} className="update">
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="delete"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPanel;
