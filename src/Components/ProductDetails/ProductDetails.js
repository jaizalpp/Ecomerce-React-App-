import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { getproductId } from "../../ApiService/Api";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [prgoductDetails, setProductDetails] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getproductId(id);
      setProductDetails(data);
    };

    fetchProductDetails();
  }, [id]);

  const handleBuyNow = () => {
    window.confirm('The Product is out of stock')
  }

  return (
    <div className="product-details-container">
      <img src={productDetails.image} alt="image" className="product-image" />

      <div className="product-info">
        <h2 className="product-title">{productDetails.title}</h2>
        <p className="product-description">{productDetails.description}</p>
        <p className="product-price">${productDetails.price}</p>
        <button onClick={handleBuyNow} className="buy-now-button">Buy Now</button>
        <Link to="/">
          <button className="go-back-home">Go back home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
