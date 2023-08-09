import React from "react";
import { useParams } from "react-router-dom";
const ProductsDetail = () => {
  const param = useParams();

  return <div className="component"> ProductsDetail -{param.id}</div>;
};

export default ProductsDetail;
