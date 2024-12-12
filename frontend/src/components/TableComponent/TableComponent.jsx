import { Table } from "antd";
import React, { useState } from "react";
<<<<<<< HEAD
import Loading from "../LoadingComponent/Loading";
=======
import Loading from "../../components/LoadingComponent/LoadingComponent";
>>>>>>> a1846ea864709c1992d12d3d82beeaa04c2358cb
import { Excel } from "antd-table-saveas-excel";
import { useMemo } from "react";

const TableComponent = (props) => {
    const {
        selectionType = "checkbox",
        data: dataSource = [],
        isLoading = false,
        columns = [],
        handleDelteMany,
    } = props;
    const [rowSelectedKeys, setRowSelectedKeys] = useState([]);
    const newColumnExport = useMemo(() => {
        const arr = columns?.filter((col) => col.dataIndex !== "action");
        return arr;
    }, [columns]);

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setRowSelectedKeys(selectedRowKeys);
        },
        // getCheckboxProps: (record) => ({
        //   disabled: record.name === 'Disabled User',
        //   // Column configuration not to be checked
        //   name: record.name,
        // }),
    };
    const handleDeleteAll = () => {
        handleDelteMany(rowSelectedKeys);
    };
    const exportExcel = () => {
        const excel = new Excel();
        excel
            .addSheet("test")
            .addColumns(newColumnExport)
            .addDataSource(dataSource, {
                str2Percent: true,
            })
            .saveAs("Excel.xlsx");
    };

    return (
        <Loading isLoading={isLoading}>
            {!!rowSelectedKeys.length && (
                <div
                    style={{
                        color: "red",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        cursor: "pointer",
                    }}
                    onClick={handleDeleteAll}
                >
                    Xóa tất cả
                </div>
            )}
            <button
                style={{
                    padding: "4px",
                    marginBottom: "10px",
                }}
                onClick={exportExcel}
            >
                Export Excel
            </button>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={dataSource}
                {...props}
            />
        </Loading>
    );
};

export default TableComponent;
