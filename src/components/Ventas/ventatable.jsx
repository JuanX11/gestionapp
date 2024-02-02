// En '../components/table/DinamicTable.jsx'
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import productos from "../datacompra"; // Ajusta la ruta según sea necesario

const DinamicTable = () => {
  const columns = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "NOMBRE",
    },
    {
      key: "price",
      label: "PRECIO",
    },
    {
      key: "stock",
      label: "STOCK",
    },
    {
      key: "price",
      label: "PRECIO",
    },
  ];

  return (
    <Table className="flex h-96" aria-label="Tabla dinámica">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={productos}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{item[columnKey]}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default DinamicTable;
