"use client";
import React from "react";
import Image from "next/image";
import DetailButton from "../../components/detailButton";
import Counter from "../../components/Counter";
import { useEffect, useState } from "react";

const detailProduct = ({ params: { id } }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPostId = async (id) => {
      const response = await fetch(`http://localhost:8081/posts/${id}`);
      const dataProduct = await response.json();
      return {
        status: response.status,
        dataProduct,
      };
    };

    getPostId(id)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (data.length === 0) {
    return <span>loading.....</span>;
  }
  const { dataProduct } = data;
 
  return (
    <div>
      <div>
        <p className="text-3xl mt-12 ml-8 md:flex md:justify-center md:text-5xl md:mt-24">
          {dataProduct.data.products.name}
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
            <h2 className="md:hidden">${dataProduct.data.products.price}/kg</h2>
            <div className="flex flex-col mt-4 text-xs font-bold md:items-center  md:text-base">
              <small>Cantidad Disponible:</small>
              <small>{dataProduct.data.products.existence}</small>
            </div>
          </div>
        </div>
        <div className="ml-6 md:flex md:flex-col md:mt-16 ">
          <p className="font-bold text-sm">Descripción</p>
          <ul className="mt-5">
            <li className="flex mt-4">
              <Image src={"/check-icon.svg"} width={18} height={18} />{" "}
              <p className="text-base">
                {dataProduct.data.products.description}
              </p>{" "}
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
            ${dataProduct.data.products.price}/kg
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