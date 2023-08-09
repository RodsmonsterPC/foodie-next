import React from "react";
import Image from "next/image";
import Dropdown from "../components/Dropdown";
const newProduct = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="mt-9 mb-5 text-3xl">Nuevo Producto</h1>
        <button className="border border-2 w-64 h-40 rounded-md">
          <Image
            className="mx-auto my-auto"
            src={"/Vector.svg"}
            width={75}
            height={66}
          />
        </button>
        <p className="mt-5 text-sm font-Sub-title">
          Proporcionar imagen clara y concisa
        </p>
      </div>
      <div className="flex flex-col items-center mt-9">
        <form>
          <p>Nombre del producto:</p>
          <input
            className="bg-back-form rounded-md text-left font-Sub-title mb-9 w-64 h-10 md:w-96"
            type="text"
            name="Nombre del producto:"
          />
          <p>Descripción:</p>
          <input
            className="bg-back-form rounded-md text-left font-Sub-title mb-9 w-64 h-56 md:w-96"
            type="text"
            name="Descripción:"
          />
          <div className="grid gap-16 grid-cols-2">
            <div className="">
              <p>Precio:</p>
              <input
                className="bg-back-form rounded-md text-left font-Sub-title mb-9 w-24 h-10 md:w-96"
                type="text"
                name="Precio:"
              />
            </div>
            <div>
              <p>Existecias:</p>
              <input
                className="bg-back-form rounded-md text-left font-Sub-title mb-9 w-24 h-10 md:w-96"
                type="text"
                name="Existencias:"
              />
            </div>
          </div>
        </form>
        <div className="flex items-center z-10">
          <p className="mr-1">Tu categoria:</p>
          <Dropdown />
        </div>
        <div className="flex items-center mt-7 mr-28 z-0">
          <p className="mr-3">Activo:</p>
          <label
            for="check"
            className="bg-back-form relative w-20 h-10 rounded-lg"
          >
            <input type="checkbox" id="check" className="sr-only peer" />
            <span className="w-2/5 h-4/5 bg-button-color absolute rounded-full left-1 top-1 peer:checked:bg-button-color-100/30 peer-checked:left-11 transition-all duration-500"></span>
          </label>
        </div>

        <button className="mt-8 mb-16 bg-button-color text-white w-52 h-16 rounded-xl z-0">
          Guardar
        </button>
      </div>
    </div>
  );
};

export default newProduct;
