import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductListComp } from "../../components/Product/ProductListComp";

export const ProductList = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="d-flex pt-3">
        <Button className="ms-auto" type="primary" onClick={()=> navigate("add")}>Add New Product</Button>
      </div>
      <div style={{ marginTop: 20 }}>
        <ProductListComp />
      </div>
    </>
  );
};
