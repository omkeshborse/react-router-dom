import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";
const ProductsList = () => {
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("keyword"));
  const Location = useLocation() ;
  console.log(Location);
  return <div className="component">ProductsList</div>;
};

export default ProductsList;
