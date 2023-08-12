import React from "react";
import Image from "next/image";
import DetailButton from "../components/detailButton";
const detailProduct = () => {
  return (
    <div>
      <div>
        <p className="text-3xl mt-12 ml-8">Plátano Chiapas</p>
      </div>
      <div className="flex justify-center mr-2 mt-11">
        <Image className="" src={"/icon-person.svg"} width={144} height={150} />
        <div className="ml-4 mt-4 text-xl">
          <h2>$56.00/kg</h2>
          <div className="flex flex-col mt-4 text-xs font-bold">
            <small>Cantidad Disponible:</small>
            <small>20</small>
          </div>
        </div>
      </div>
      <div className="ml-6">
        <p className="font-bold text-sm">Descripción</p>
        <ul className="mt-5">
          <li className="flex mt-4">
            <Image src={"/check-icon.svg"} width={18} height={18} />{" "}
            <p className="text-base">Plátano Chiapas por Kg</p>{" "}
          </li>
          <li className="flex mt-4">
            <Image src={"/check-icon.svg"} width={18} height={18} />{" "}
            <p className="text-base">Elige una vida más saludable</p>
          </li>
          <li className="flex mt-4">
            <Image src={"/check-icon.svg"} width={18} height={18} />{" "}
            <p className="text-base">
              Aprovecha las promociones en este producto
            </p>
          </li>
          <li className="flex mt-4">
            <Image src={"/check-icon.svg"} width={18} height={18} />{" "}
            <p className="text-base">Muy delicioso sabor</p>
          </li>
        </ul>
      </div>
      {/* Contador componente */}

      <div className="ml-6 flex flex-col mb-12">
        <DetailButton name={"Compra rápida"} />
        <DetailButton name={"Agregar el carrito"} />
      </div>
    </div>
  );
};

export default detailProduct;
