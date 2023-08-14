import React from "react";
import Image from "next/image";
import DetailButton from "../components/detailButton";
import Counter from "../components/Counter";
const detailProduct = () => {
  return (
    <div>
      <div>
        <p className="text-3xl mt-12 ml-8 md:flex md:justify-center md:text-5xl md:mt-24">
          Plátano Chiapas
        </p>
      </div>
      <div className="md:flex md:flex-row md:mb-28">
        <div className="flex justify-center mr-2 mt-11 md:flex-col md:ml-2 md:mt-0 ">
          <Image
            className="md:hidden"
            src={"/icon-person.svg"}
            width={144}
            height={150}
          />
          <Image
            className="hidden md:flex "
            src={"/icon-person.svg"}
            width={414}
            height={431}
          />
          <div className="ml-4 mt-4 text-xl">
            <h2 className="md:hidden">$56.00/kg</h2>
            <div className="flex flex-col mt-4 text-xs font-bold md:items-center  md:text-base">
              <small>Cantidad Disponible:</small>
              <small>20</small>
            </div>
          </div>
        </div>
        <div className="ml-6 md:flex md:flex-col md:mt-16 ">
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
        <div className="md:flex md:flex-col md:ml-24">
          <h2 className="hidden md:flex md:justify-center md:text-4xl">
            $56.00/kg
          </h2>
          <Counter />

          <div className="ml-6 flex flex-col mb-12 md:items-center">
            <DetailButton name={"Compra rápida"} />
            <DetailButton name={"Agregar el carrito"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default detailProduct;
