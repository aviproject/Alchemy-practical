import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AddProductForm } from "../../components/Product/AddProductForm";

export const AddNewProduct = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div className="d-flex p-3">
        <Button className="" type="primary" onClick={() => navigate("/")}>
          Back
        </Button>
      </div>
      <AddProductForm />
    </div>
  );
};
