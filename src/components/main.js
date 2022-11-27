import React from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "../Redux/action";
import { Button } from "antd";


const Main = () => {
  const cartItem = {
    name: "item-1",
    price: 12,
    categories: "fashion",
  };

  const dispatch = useDispatch();
  return (
    <>
      <div style={{ marginTop: 60 }}>
        <Button type="primary" onClick={() => dispatch(addtoCart(cartItem))}>
          Add to cart
        </Button>
      </div>
    </>
  );
};

export default Main;
