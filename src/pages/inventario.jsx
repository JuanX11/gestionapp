import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import DinamicTable from "../components/table";

export default function InventarioPage() {
  const [productData, setProductData] = useState([]);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handlePriceChange = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  const handleAddProduct = () => {
    const newProduct = {
      code: productData.length + 1,
      name: productName,
      quantity: quantity,
      price: price,
      total: quantity * price,
    };

    setProductData((prevData) => [...prevData, newProduct]);
    setProductName("");
    setQuantity(0);
    setPrice(0);
  };

  return (
    <>
      <div className="flex w-3/4 flex-wrap md:flex-nowrap gap-4 px-10 py-3 justify-around place-items-center">
        <Input
          label="Ingresa el nombre del producto"
          placeholder="Nombre"
          value={productName}
          onChange={handleProductNameChange}
        />
        <Input
          type="number"
          label="Stock"
          placeholder="0"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <Input
          type="number"
          label="Ingresa el precio"
          placeholder="$"
          value={price}
          onChange={handlePriceChange}
        />
        <Button color="primary" onClick={handleAddProduct}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-plus"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
        </Button>
      </div>
      <div className="flex w-3/4 flex-wrap md:flex-nowrap gap-4 px-10 py-3 justify-around place-items-center">
        <DinamicTable data={productData} />
      </div>
    </>
  );
}
