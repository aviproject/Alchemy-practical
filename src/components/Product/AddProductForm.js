import { Button, DatePicker, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct, editProduct } from "../../Redux/action";

export const AddProductForm = () => {
  const param = new useParams();
  const [form] = Form.useForm();

  const navigate = new useNavigate();
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState("select");
  const [exdate, setExDate] = useState(null);
  const [cost, setCost] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [productId, setProductId] = useState(null);

  const productList = useSelector((state) => state?.productItems);
  useEffect(() => {
    if (!!param) {
      setProductId(param.id);
      const product = productList.find(
        (item) => item.product_id.toString() === param.id
      );
      if (product) {
        form.setFieldsValue({
          name: product?.name,
          description: product?.description,
          category: product?.category,
          exdate: product?.exdate,
          cost: product?.cost,
          sellprice: product?.sellprice,
          discount: product?.discount,
          discontedprice: product?.discontedprice,
          finalprice: product?.finalprice,
        });
      }
    } else {
      setProductId(null);
    }
  }, [param]);

  useEffect(() => {
    if (discount) {
      const sellPrice = form.getFieldValue("sellprice");
      form.setFieldsValue({
        discontedprice: (sellPrice * discount) / 100,
      });
      let discontedprice = form.getFieldValue("discontedprice");
      form.setFieldsValue({
        finalprice: sellPrice - discontedprice,
      });
    }
  }, [discount]);

  const dispatch = useDispatch();
  const { Option } = Select;

  const handleSubmit = (value) => {
    if (!!param?.id) {
      // debugger;
      dispatch(
        editProduct({
          product_id: Number(param?.id),
          name: value?.name,
          description: value?.description,
          category: value?.category,
          exdate: value?.exdate,
          cost: Number(value?.cost),
          sellprice: Number(value?.sellprice),
          discount: Number(value?.discount),
          discontedprice: value?.discontedprice,
          finalprice: Number(value?.finalprice),
        })
      );
    } else {
      dispatch(
        addProduct({
          product_id: productList?.length + 1,
          name: value?.name,
          description: value?.description,
          category: value?.category,
          exdate: value?.exdate,
          cost: Number(value?.cost),
          sellprice: Number(value?.sellprice),
          discount: Number(value?.discount),
          discontedprice: value?.discontedprice,
          finalprice: Number(value?.finalprice),
        })
      );
    }
    navigate("/");
  };

  const handleChange = (value) => {
    setCategory(value);
  };

  const onChange = (date, dateString) => {
    setExDate(dateString);
  };

  return (
    <div className="p-3">
      <h2>{!!productId ? "Edit" : "Add"} Product</h2>
      <Form onFinish={handleSubmit} form={form} layout="vertical">
        <Form.Item
          label="Name:"
          rules={[
            {
              required: true,
              message: "Please enter your name",
              type: "string",
            },
          ]}
          name="name"
        >
          <Input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="name"
          />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input
            type="textarea"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="description"
          />
        </Form.Item>
        <Form.Item
          label="category"
          name="category"
          rules={[
            {
              required: true,
              message: "please! Select at least one category ",
            },
          ]}
        >
          <Select
            // value={category}
            className="w-100 text-start"
            onChange={handleChange}
            placeholder="select category"
          >
            <Option value="clothes">Clothes</Option>
            <Option value="bekkery">bekkery</Option>
            <Option value="sports">Sports</Option>
            <Option value="grocery">Grocery</Option>
            <Option value="speakers">speakers</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Expiry Date"
          name="exdate"
          rules={[
            {
              required: true,
              message: "please! Select Date ",
            },
          ]}
        >
          <DatePicker onChange={onChange} className="w-100" />
        </Form.Item>
        <Form.Item
          label="Cost Price"
          name="cost"
          rules={[
            {
              required: true,
              message: "please! enter cost price",
            },
          ]}
        >
          <Input
            type="number"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            placeholder="cost price"
          />
        </Form.Item>
        <Form.Item
          label="Sell Price"
          name="sellprice"
          rules={[
            {
              required: true,
              message: "please! enter Sell price",
            },
          ]}
        >
          <Input type="number" placeholder="sell price" />
        </Form.Item>
        <Form.Item label="Discount(%)" name="discount">
          <Input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(Number(e.target.value))}
            placeholder="discount"
          />
        </Form.Item>
        <Form.Item
          label="Discounted Price"
          value="45"
          type="number"
          name="discontedprice"
        >
          <Input disabled placeholder="discounted price" />
        </Form.Item>
        <Form.Item label="Final Price" name="finalprice">
          <Input type="number" disabled placeholder="final price" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
