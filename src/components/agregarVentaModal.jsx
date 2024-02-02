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
import BuscadorProductos from "../components/buscadorproductos";

export default function VentaPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "Gorra roja", price: 10 },
    { id: 2, name: "Gorra verde", price: 20 },
    { id: 3, name: "Camuflado XL", price: 30 },
    { id: 4, name: "Camuflado L", price: 10 },
    { id: 5, name: "Botas Americanas", price: 20 },
    { id: 6, name: "Botas Nacionales", price: 30 },
    { id: 7, name: "Distintivo", price: 10 },
    { id: 8, name: "Camisa Táctica", price: 20 },
    { id: 9, name: "Gafas", price: 30 },
    { id: 9, name: "CamelBack", price: 30 },
    // ... otros productos
  ];
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="flex flex-col  ">
      <div className="flex flex-row gap-4 p-2 place-items-center  ">
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

        <Modal
          isOpen={isOpen}
          placement={"center"}
          onOpenChange={() => setIsOpen(!isOpen)}
        >
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              Agregar Producto
            </ModalHeader>
            <ModalBody>
              <BuscadorProductos
                products={products}
                onSelectProduct={handleSelectProduct}
              />
              <Input label="Cantidad" type="number" defaultValue="1"></Input>
              <Input label="Precio" type="number" placeholder="$0.000"></Input>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => setIsOpen(false)}
              >
                Cancelar
              </Button>
              <Button color="primary" onPress={() => setIsOpen(false)}>
                Agregar A La Venta
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
