import React from "react";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div>
      <div className="w-80 h-[36.5rem] fixed inset-0 backdrop-blur-sm bg-white mt-24 mx-auto border-4 border-black md:hidden">
        <p className="mt-5 font-medium text-3xl font-popins text-black mx-10 text-center">
          Pollo Parmesano
        </p>
        <p className="mt-5 font-medium text-3xl font-Montserrat mx-auto text-center">
          $350
        </p>
        <div className="mt-8 font-medium text-3xl font-Montserrat mx-auto text-center">
          <p>Cantidad</p>
          <p>X2</p>
        </div>
        <img
          className="mt-5 w-28 h-28 mx-auto"
          src="https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg"
          alt="img-producto"
        />
        <p className="mt-3 text-2xl text-center font-medium font-Montserrat border-2 border-black w-60 mx-auto rounded-lg ">
          Entrega Pendiente
        </p>
        <button
          className="mt-12 text-2xl text-center font-medium font-Montserrat border-2 bg-[#33A833] text-white w-60 h-14 rounded-full mx-10"
          onClick={() => onClose(false)}
        >
          {" "}
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
