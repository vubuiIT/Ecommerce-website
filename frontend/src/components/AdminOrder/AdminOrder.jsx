import { Button, Form, Space } from "antd";
import React from "react";
import { WrapperHeader, WrapperUploadFile } from "./style";
import TableComponent from "../TableComponent/TableComponent";
import InputComponent from "../InputComponent/InputComponent";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import Loading from "../LoadingComponent/Loading";
import ModalComponent from "../ModalComponent/ModalComponent";
import { convertPrice, getBase64 } from "../../utils";
import { useEffect } from "react";
import * as message from "../Message/Message";

import * as OrderService from "../../services/OrderService";
import { useQuery } from "@tanstack/react-query";
import {
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { orderContant } from "../../contant";
import PieChartComponent from "./PieChart";

const OrderAdmin = () => {
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <InputComponent
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1890ff" : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
            }
        },
    });

    const columns = [
        {
            title: "User name",
            dataIndex: "userName",
            sorter: (a, b) => a.userName.length - b.userName.length,
            ...getColumnSearchProps("userName"),
        },
        {
            title: "Phone",
            dataIndex: "phone",
            sorter: (a, b) => a.phone.length - b.phone.length,
            ...getColumnSearchProps("phone"),
        },
        {
            title: "Address",
            dataIndex: "address",
            sorter: (a, b) => a.address.length - b.address.length,
            ...getColumnSearchProps("address"),
        },
        {
            title: "Paided",
            dataIndex: "isPaid",
            sorter: (a, b) => a.isPaid.length - b.isPaid.length,
            ...getColumnSearchProps("isPaid"),
        },
        {
            title: "Shipped",
            dataIndex: "isDelivered",
            sorter: (a, b) => a.isDelivered.length - b.isDelivered.length,
            ...getColumnSearchProps("isDelivered"),
        },
        {
            title: "Payment method",
            dataIndex: "paymentMethod",
            sorter: (a, b) => a.paymentMethod.length - b.paymentMethod.length,
            ...getColumnSearchProps("paymentMethod"),
        },
        {
            title: "Total price",
            dataIndex: "totalPrice",
            sorter: (a, b) => a.totalPrice.length - b.totalPrice.length,
            ...getColumnSearchProps("totalPrice"),
        },
    ];

    return (
        <div>
            <WrapperHeader>Quản lý đơn hàng</WrapperHeader>

            <div style={{ marginTop: "20px" }}>
                <TableComponent columns={columns} />
            </div>
        </div>
    );
};

export default OrderAdmin;
