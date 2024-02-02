// BuscadorProductos.js
import { Input } from "@nextui-org/react";
import React, { useState } from "react";
import productos from "../dataProductos"; // Ajusta la ruta según sea necesario

const BuscadorProductos = ({ onSelectProduct }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = productos.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSelectProduct = (product) => {
    onSelectProduct(product);
    setSearchTerm(product.name); // Autocompletar el input con el nombre del producto
    setFilteredProducts([]); // Limpiar las opciones después de la selección
  };

  const handleInputFocus = () => {
    setFilteredProducts(productos);
  };

  return (
    <div className=" relative z-50">
      <Input
        label="Nombre del Producto"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={handleInputFocus}
      />
      {filteredProducts.length > 0 && (
        <div className="absolute max-h-36 w-full overflow-y-auto bg-white border border-solid border-gray-300 rounded-lg mt-1 p-2 left-0">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className=" p-2 cursor-pointer"
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
