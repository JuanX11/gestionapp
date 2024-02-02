import React, { useState } from "react";
import AgregarVenta from "../components/agregarVentaModal";

export default function VentaPage() {
  return (
    <div className=" max-h-md  p-4 bg-gray-100">
      <AgregarVenta />
    </div>
  );
}
