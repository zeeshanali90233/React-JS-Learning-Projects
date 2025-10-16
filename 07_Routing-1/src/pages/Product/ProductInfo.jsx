import React from "react";
import { useParams } from "react-router";

const ProductInfo = () => {
  let params = useParams();
  const productId = params.id;

  const products = {
    123: {
      name: "RTX 570",
      price: 15000,
    },
    6464: {
      name: "A4Key Mouse",
      price: 30000,
    },
  };
  return (
    <div>
      <div>{products[productId].name}</div>
      <div>{products[productId].price}</div>
    </div>
  );
};

export default ProductInfo;
