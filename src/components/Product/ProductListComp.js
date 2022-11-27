import { Button, message, Popconfirm, Table } from "antd";
import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProductListComp = () => {
  const [messageApi, contextHolder] = message.useMessage();
  let navigate = useNavigate();
  const onDeleteProduct = (id) => {
    // console.log("delete", id);
    messageApi.open({
      type: "success",
      content: "Product deleted successfully",
    });
  };
  // product_id: productList?.length + 1,
  //       name: name,
  //       description: description,
  //       category: category,
  //       exdate: exdate,
  //       cost: cost,
  //       sellprice: sellprice,
  //       discount: Number(discount),
  //       discontedprice: Number(discontedprice),
  //       finalprice: Number(finalprice),
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Expiry Date",
      dataIndex: "exdate",
      key: "exdate",
      // sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Cost Price",
      dataIndex: "cost",
      key: "cost",
    },
    {
      title: "Sell Price",
      dataIndex: "sellprice",
      key: "sellprice",
    },
    {
      title: "Discount(%)",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "D sell price",
      dataIndex: "discontedprice",
      key: "discontedprice",
    },
    {
      title: "Final Price",
      dataIndex: "finalprice",
      key: "finalprice",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, data) => {
        return (
          <div>
            <Button onClick={() => navigate(`edit/${data.product_id}`)}>
              <EditOutlined />
            </Button>
            <Popconfirm title="Are you sure want to delete？" okText="Yes" cancelText="No" 
                onConfirm={() => onDeleteProduct(data.product_id)}>
              <Button
                style={{ marginLeft: 10 }}
              >
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const productList = useSelector((state) => state);
  // console.log(productList, "###########");

  return (
    <div>
      {contextHolder}
      <Table columns={columns} dataSource={productList.productItems} />
    </div>
  );
};
