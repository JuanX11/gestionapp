// VentaPage.js
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tooltip,
  Input,
} from "@nextui-org/react";
import BuscadorProductos from "../Ventas/buscadorproductos";
import DinamicTableVenta from "../Ventas/ventatable"; // Ajusta la ruta según sea necesario
import productos from "./dataProductos"; // Ajusta la ruta según sea necesario

export default function VentaPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [priceInput, setPriceInput] = useState("");
  const [total, setTotal] = useState("");
  const [ventaProducts, setVentaProducts] = useState([]);

  const handleSelectProduct = (producto) => {
    setSelectedProduct(producto);
    setQuantity(1);
    setPriceInput(producto.price.toString());
    setTotal((1 * parseFloat(producto.price)).toFixed(2));
    setIsOpen(true);
  };

  const handlePriceChange = (e) => {
    const newValue = e.target.value;
    setPriceInput(newValue);
    setTotal((quantity * parseFloat(newValue)).toFixed(2));
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value) || 0;
    setQuantity(newQuantity);
    setTotal((newQuantity * parseFloat(priceInput)).toFixed(2));
  };

  const handleAddToVenta = () => {
    if (selectedProduct) {
      const newProduct = {
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: parseFloat(priceInput),
        quantity: quantity,
        total: parseFloat(total),
      };

      setVentaProducts((prevProducts) => [...prevProducts, newProduct]);
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
    setQuantity(1);
    setPriceInput("");
    setTotal("");
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-4 p-2 place-items-center">
        <div className="w-5/6">
          <Input label="Nombre del Producto" />
        </div>
        <Tooltip
          content="Agregar Producto"
          delay={0}
          closeDelay={0}
          position="bottom"
        >
          <Button className="w-1/6" onClick={() => setIsOpen(true)}>
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
        </Tooltip>
        <Modal isOpen={isOpen} placement={"center"} onClose={handleCloseModal}>
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              Agregar Producto
            </ModalHeader>
            <ModalBody>
              <BuscadorProductos
                productos={productos}
                onSelectProduct={handleSelectProduct}
              />
              <Input
                label="Cantidad"
                type="number"
                defaultValue={quantity.toString()}
                onChange={handleQuantityChange}
              />
              <Input
                label="Precio"
                type="text"
                placeholder="$0.000"
                value={priceInput}
                onChange={handlePriceChange}
              />
              <Input
                label="Total"
                type="text"
                placeholder="$0.000"
                value={`$${total}`}
                onChange={(e) => setTotal(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={handleCloseModal}>
                Cancelar
              </Button>
              <Button color="primary" onPress={handleAddToVenta}>
                Agregar A La Venta
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
      <DinamicTableVenta data={ventaProducts} />
    </div>
  );
}
