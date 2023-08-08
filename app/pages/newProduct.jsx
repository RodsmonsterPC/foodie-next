import React from "react";
import Image from "next/image";
import Dropdown from "../components/Dropdown";
const newProduct = () => {
  return (
    <div>
      <h1>Nuevo Producto</h1>
      <div>
        <button>
          <Image />
        </button>
        <p>Proporcionar imagen clara y concisa</p>
      </div>
      <div>
        <form>
          <input
            className="bg-back-form rounded-md text-left font-Sub-title mb-9 w-64 h-10 md:w-96"
            type="text"
            name="Nombre del producto:"
          />
          <input
            className="bg-back-form rounded-md text-left font-Sub-title mb-9 w-64 h-10 md:w-96"
            type="text"
            name="Descripción:"
          />
          <input
            className="bg-back-form rounded-md text-left font-Sub-title mb-9 w-64 h-10 md:w-96"
            type="text"
            name="Precio:"
          />
          <input
            className="bg-back-form rounded-md text-left font-Sub-title mb-9 w-64 h-10 md:w-96"
            type="text"
            name="Existencias:"
          />
        </form>
      </div>
      <div>
        <p>Tu categoria:</p>
        <Dropdown />
      </div>
      <div>
        <p>Activo:</p>
        <label for="check" className="bg-white realtive w-20 h-10 rounded-full">
          <input type="checkbox" id="check" className="sr-only peer" />
          <span className="w-2/5 h-4/5 bg-button-color absolute rounded-full left-1 top-1 peer:checked:bg-button-color-100/30 peer-checked:left-11 transition-all duration-500"></span>
        </label>
      </div>

      <button>Guardar</button>
    </div>
  );
};

export default newProduct;
