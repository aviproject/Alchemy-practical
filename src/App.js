import React from "react";
import "./App.css";
import "antd/dist/reset.css";
import { ProductList } from "./pages/ProductPages/ProductList";
import { AddNewProduct } from "./pages/ProductPages/AddNewProduct";
import { Route, Routes } from "react-router-dom";

const App = () => {
  // <Header />
  // <ProductList />
  // <Main />

  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="add" element={<AddNewProduct />} />
        <Route path="edit/:id" element={<AddNewProduct />} />
        {/* <Route path="about" element={<About />} />
          <Route path="list" element={<List />} />
          <Route path="details/:id" exect element={<ProductDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
      {/* <AddNewProduct />
      <ProductList /> */}
    </div>
  );
};

export default App;
