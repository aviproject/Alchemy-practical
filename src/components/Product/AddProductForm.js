import { Button, DatePicker, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct } from "../../Redux/action";
import { ADD_PRODUCT } from "../../Redux/constant";

export const AddProductForm = () => {
  const param = new useParams();
  const [form] = Form.useForm();

  const navigate = new useNavigate();
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState("select");
  const [exdate, setExDate] = useState(null);
  const [cost, setCost] = useState(null);
  const [sellprice, setSellPrice] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [discontedprice, setDiscountedPrice] = useState(null);
  const [finalprice, setFinalPrice] = useState(null);
  const [productId, setProductId] = useState(null);
  const [masterProduct, setMasterProduct] = useState({
    name: "",
    description: "",
    category: "",
    exdate: "",
    cost: null,
    sellprice: null,
    discount: null,
    discontedprice: null,
    finalprice: null,
  });
  // console.log("param :>> ", param);
  const productList = useSelector((state) => state?.productItems);
  useEffect(() => {
    if (!!param) {
      setProductId(param.id);
      const product = productList.filter(
        (item) => item.product_id.toString() === param.id
      );
      console.log("product :>> ", product, productList);
      form.setFieldsValue({
        [name]: product[0].name,
        [description]: product[0].description,
        [category]: product[0].category,
        [exdate]: product[0].exdate,
        [cost]: product[0].cost,
        [sellprice]: product[0].sellprice,
        [discount]: product[0].discount,
        [discontedprice]: product[0].discontedprice,
        [finalprice]: product[0].finalprice
      });
    } else {
      setProductId(null);
    }
  }, [param]);
  // console.log("productId", productId);
  // console.log(productList, "OOOOOO");

  const dispatch = useDispatch();
  const { Option } = Select;

  const handleSubmit = (e) => {
    console.log(e);
  };

  const handleChange = (value) => {
    // console.log(`selected ${value}`);
    setCategory(value);
  };

  const onChange = (date, dateString) => {
    // console.log(date, dateString);
    setExDate(dateString);
  };

  const onSubmit = async (e, value) => {
    dispatch(
      addProduct({
        product_id: productList?.length + 1,
        name: name,
        description: description,
        category: category,
        exdate: exdate,
        cost: cost,
        sellprice: sellprice,
        discount: Number(discount),
        discontedprice: Number(discontedprice),
        finalprice: Number(finalprice),
      })
    );
    // console.log("BBBBBBBB");
    navigate("/");
  };

  const onDiscountChange = (e) => {
    setDiscount(e.target.value);
    setDiscountedPrice((sellprice * e.target.value) / 100);
    setFinalPrice(sellprice - discontedprice);
  };

  return (
    <div className="p-3">
      <h2>{!!productId ? "Edit" : "Add"} Product</h2>
      <Form onSubmit={handleSubmit} form={form} layout="vertical">
        <Form.Item label="Name:">
          <Input
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input
            name="description"
            type="textarea"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </Form.Item>
        <Form.Item label="category">
          <Select
            name="category"
            // defaultValue="lucy"
            value={category}
            className="w-100 text-start"
            onChange={handleChange}
          >
            <Option value="clothes">Clothes</Option>
            <Option value="bekkery">bekkery</Option>
            <Option value="sports">Sports</Option>
            <Option value="grocery">Grocery</Option>
            <Option value="speakers">speakers</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Expiry Date">
          <DatePicker onChange={onChange} className="w-100" />
        </Form.Item>
        <Form.Item label="Cost Price">
          <Input
            name="cprice"
            type="number"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
          />
        </Form.Item>
        <Form.Item label="Sell Price">
          <Input
            name="sprice"
            type="number"
            value={sellprice}
            onChange={(e) => setSellPrice(Number(e.target.value))}
          />
        </Form.Item>
        <Form.Item label="Discount(%)">
          <Input
            name="discount"
            type="number"
            value={discount}
            onChange={(e) => onDiscountChange(e)}
          />
        </Form.Item>
        <Form.Item label="Discounted Price" value="45">
          <Input
            type="number"
            name="disprice"
            disabled
            value={discontedprice}
            // onChange={e => setDiscountedPrice(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Final Price">
          <Input
            type="number"
            name="fprice"
            value={finalprice}
            disabled
            // onChange={e=>setFinalPrice(sellprice - discontedprice)}
          />
        </Form.Item>
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
