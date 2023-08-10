import React from "react";
import Image from "next/image";
const newSeller = () => {
  return (
    <div>
      <div>
        <h1>Perfecto, ahora brinda la información a detalle de tu empresa</h1>
        <div>
          <button>
            <Image />
          </button>
          <p>Porfavor llenar todos los campos que se solicitan:</p>
        </div>
        <div>
          <form>
            <p>Nombre:</p>
            <input type="text" />
            <p>Número:</p>
            <input type="text" />
            <p>Descripción:</p>
            <input type="text" />
            <p>Correo:</p>
            <input type="text" />
            <p>RFC:</p>
            <input type="text" />
            <p>Dirección:</p>
            <input type="text" />
          </form>
        </div>
        <button>Guardar</button>
      </div>
    </div>
  );
};

export default newSeller;
