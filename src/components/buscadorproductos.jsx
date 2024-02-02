// BuscadorProductos.js
import { Input } from "@nextui-org/react";
import React, { useState } from "react";

const BuscadorProductos = ({ products, onSelectProduct }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSelectProduct = (product) => {
    onSelectProduct(product);
    setSearchTerm("");
    setFilteredProducts([]);
  };

  return (
    <div>
      <Input
        label="Nombre del Producto"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div
        style={{
          maxHeight: "200px",
          overflowY: "auto",
          borderRadius: "10px", // Ajusta el valor según tu preferencia
          border: "1px solid #ccc", // Puedes agregar un borde si lo deseas
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-2 cursor-pointer"
            onClick={() => handleSelectProduct(product)}
          >
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuscadorProductos;
