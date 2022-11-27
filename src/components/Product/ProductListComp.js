import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, message, Popconfirm, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../Redux/action";

export const ProductListComp = () => {
  const [messageApi, contextHolder] = message.useMessage();
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const columns = [
    {
      title: "Product Id",
      dataIndex: "product_id",
      key: "product_id",
      render: (text) => <a>{text}</a>
    },
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
      render: (exdate) => {
        return <span>{Date(exdate)}</span>;
      },
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
            <Popconfirm
              title="Are you sure want to delete？"
              okText="Yes"
              cancelText="No"
              onConfirm={() => onDeleteProduct(data.product_id)}
              onCancel={() => onCancel()}
            >
              <Button style={{ marginLeft: 10 }}>
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const productList = useSelector((state) => state);

  const onDeleteProduct = (id) => {
    console.log("delete", id);
    dispatch(deleteProduct(id));
    messageApi.open({
      type: "success",
      content: "Product deleted successfully",
    });
  };

  const onCancel = () => {
    console.log("in cancel ");
  };
  return (
    <div>
      {contextHolder}
      <Table columns={columns} dataSource={productList.productItems} />
    </div>
  );
};
