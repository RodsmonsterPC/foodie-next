import React, { useState } from "react";
import newProduct from "../../assets/img-create-new-product.svg";
import trash from "../../assets/img-trash.svg";
import Image from "next/image";
import img from "../../assets/pollo.png";

const ModalProducts = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div>
      <div className="w-80 h-[36.5rem] fixed inset-0 backdrop-blur-sm bg-white mt-24 mx-auto border-2 border-[#CFD8DC] rounded-lg md:hidden">
        <p className="mt-6 text-center font-medium text-xl font-Montserrat truncate">
          Pollo Parmesano
        </p>
        <div className="mx-24 flex justify-center ">
          <Image
            className="border border-[#CFD8DC] rounded-full"
            src={img}
            width={100}
            height={100}
            alt="img-product"
          />
        </div>
        <div className="mt-2 flex gap-x-16 border border-[#CFD8DC] rounded-full ml-14 mr-14">
          <p className="my-2 ml-5 font-medium text-xl">ventas</p>
          <p className="my-2 bg-[#B0BEC5] rounded-full w-8 ">+4</p>
        </div>
        <button className="mt-5 flex gap-x-16 border border-[#CFD8DC] rounded-full ml-14 mr-14 w-[204px]">
          <p className="my-2 ml-5 font-medium text-xl">Activo</p>
          <span className="bg-lime-800 w-6 h-6 block rounded-full my-2 ml-2"></span>
        </button>
        <div className="mt-5 flex gap-x-12 border border-[#CFD8DC] rounded-full ml-14 mr-14">
          <p className="my-2 ml-5 font-medium text-xl">Cantidad</p>
          <p className="my-2">23</p>
        </div>
        <div className="flex mt-10 ml-20 gap-x-10 ">
          <button>
            <Image
              src={newProduct}
              width={60}
              height={60}
              alt="img-add-Product"
            />
          </button>
          <button>
            <Image src={trash} width={60} height={60} alt="img-delete" />
          </button>
        </div>
        <button
          className="mt-12 text-xl text-center font-medium font-Montserrat border-2 bg-[#33A833] text-white w-60 h-14 rounded-full mx-10"
          onClick={() => onClose(false)}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalProducts;
