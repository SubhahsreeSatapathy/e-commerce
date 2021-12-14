import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getDetails } from "../api/api";
import "./styles/style.css";
import StarRatings from "react-star-ratings";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [productsCopy, setProductsCopy] = useState([]);
 
  useEffect(() => {
    getDetails()
      .then((res) => {
        setProducts(res.data);
        setProductsCopy(res.data);
         console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
 

  return (
    <div className="product-table">
      

      {products.length !== 0 &&
        products.map((product) => (
          <Card className="card" key={product.id}>
            <Card.Img
              variant="top"
              className="image-card"
              src={product.image}
            />
            <Card.Body className="card-body" style={{ overflowY: "auto" }}>
              <h2>{product.title.substring(0, 30)}...</h2>
              <p>{product.description.substring(0, 65)}...</p>
              <button>Buy ${product.price}</button>
              <div className="ratings">
                <StarRatings
                  className="star-ratings"
                  rating={product.rating.rate}
                  starDimension="20px"
                  starSpacing="3px"
                  starRatedColor={"rgb(240,145,34)"}
                />
                <Card.Text>({product.rating.count})</Card.Text>
              </div>
              <h4 className="category">{product.category}</h4>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default ProductTable;
