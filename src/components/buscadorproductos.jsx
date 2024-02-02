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
    <div className="relative z-50">
      {" "}
      {/* Añade la propiedad z-50 para ajustar el z-index */}
      <Input
        label="Nombre del Producto"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {searchTerm && (
        <div className="absolute max-h-36 w-full overflow-y-auto bg-white border border-solid border-gray-300 rounded-lg mt-1 p-2 left-0">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="cursor-pointer p-2 hover:bg-gray-100"
              onClick={() => handleSelectProduct(product)}
            >
              {product.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BuscadorProductos;
