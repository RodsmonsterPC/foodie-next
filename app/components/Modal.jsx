import React from "react";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div>
      <div className="w-80 h-[36.5rem] fixed inset-0 backdrop-blur-sm bg-white mt-24 mx-auto border-4 border-black">
        <p className="mt-14 font-medium text-3xl font-popins text-black mx-10 text-justify">
          Pollo Parmesano
        </p>
        <p className="mt-[2.8rem] font-medium text-3xl font-Montserrat mx-auto text-center">
          $350
        </p>
        <img
          className="mt-12 w-36 h-36 mx-auto"
          src="https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg"
          alt=""
        />
        <p className="mt-12 text-2xl text-center font-medium font-Montserrat border-2 border-black w-60 mx-auto rounded-lg ">
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
