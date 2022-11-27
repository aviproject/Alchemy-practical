import React from "react";
import "./App.css";
import "antd/dist/reset.css";
import { ProductList } from "./pages/ProductPages/ProductList";
import { AddNewProduct } from "./pages/ProductPages/AddNewProduct";
import { Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="add" element={<AddNewProduct />} />
        <Route path="edit/:id" element={<AddNewProduct />} />
      </Routes>
    </div>
  );
};

export default App;
