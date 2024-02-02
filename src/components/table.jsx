import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const DinamicTable = ({ data }) => {
  const columns = [
    {
      key: "code",
      label: "CÓDIGO",
    },
    {
      key: "name",
      label: "NOMBRE",
    },
    {
      key: "quantity",
      label: "CANTIDAD",
    },
    {
      key: "price",
      label: "PRECIO",
    },
    {
      key: "total",
      label: "TOTAL",
    },
  ];

  return (
    <Table className="flex h-96" aria-label="Tabla dinámica">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={item.code}>
            {(columnKey) => <TableCell>{item[columnKey]}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default DinamicTable;
