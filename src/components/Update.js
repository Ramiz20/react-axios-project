import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setItem(res.data))
      .finally(() => setLoading(false));
    console.log();
  }, [id]);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`https://dummyjson.com/products/${id}`);
    console.log(item);
    item.id = `${id}`;
    console.log('test',item)
    axios
      .put(`https://dummyjson.com/products/${id}`, item)
      .then((res) => {
        console.log(res.data);
        alert("Product information has been updated. Congratulations");
        navigate('/admin')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            onChange={handleChange}
            name="title"
            defaultValue={item.title}
          />
        </div>
        <div>
          <label>Availability Status:</label>
          <input
            type="text"
            onChange={handleChange}
            name="availabilityStatus"
            defaultValue={item.availabilityStatus}
          />{" "}
        </div>

        <div>
          <label>Stock:</label>
          <input
            type="number"
            onChange={handleChange}
            name="stock"
            defaultValue={item.stock}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            onChange={handleChange}
            name="category"
            defaultValue={item.category}
          />
        </div>
        <div>
          {" "}
          <label>Price:</label>
          <input
            type="number"
            onChange={handleChange}
            name="price"
            defaultValue={item.price}
          />
        </div>
        <div>
          {" "}
          <label>Warranty Information:</label>
          <input
            type="text"
            name="warrantyInformation"
            onChange={handleChange}
            defaultValue={item.warrantyInformation}
          />
        </div>

        <div>
          <input className="submit" type="submit" />
        </div>
      </form>
    </>
  );
}

export default Update;
