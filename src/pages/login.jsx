import * as React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
export default function LoginPage() {
  return (
    <>
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className=" object-cover w-full h-full"
            src="https://thebestviajes.com/wp-content/uploads/2022/06/278694282_103678055658701_3744649399601288253_n.jpg"
            alt="Coveñas"
          />
        </div>
        <div className="relative z-10 bg-opacity-80 bg-white p-8 rounded-md md:w-96  border-gray-500 text-center ">
          <h1 className=" text-primary text-4xl font-extrabold mb-6 text-shadow-md ">
            Inicia Sesión
          </h1>

          <div className="grid gap-4">
            <Input isRequired type="email" label="Email" />

            <Input isRequired type="password" label="Password" />

            <Button color="primary" variant="shadow">
              <Link to="/" aria-current="page">
                Iniciar Sesión
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
