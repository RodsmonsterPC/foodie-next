"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import imgPlatano from "../../assets/img-platano.svg";
import { info } from "autoprefixer";

const Shoping = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const infoProducts = [
      {
        id: 1,
        name: "Pollo Parmesano",
        price: 350,
        description: "Aprovecha las promociones en este producto",
        img: imgPlatano,
      },
      {
        id: 2,
        name: "Filete de pescado",
        price: 350,
        description: "Aprovecha las promociones en este producto",
        img: imgPlatano,
      },
      {
        id: 3,
        name: "bolsa de papas fritas",
        price: 350,
        description: "Aprovecha las promociones en este producto",
        img: imgPlatano,
      },
      {
        id: 4,
        name: "papas",
        price: 350,
        description: "Aprovecha las promociones en este producto",
        img: imgPlatano,
      },
    ];

    setProduct(infoProducts);
  }, []);

  const [product, setProduct] = useState(1); //Va el estado del producto previamente
  const [total, setTotal] = useState(0);

  const getProduct = (price) => {
    setProduct(product + 1);
    setTotal(total + price);
  };
  const restProduct = (price) => {
    if (product !== 1) {
      setProduct(product - 1);
      setTotal(total - price);
    }
  };
  return (
    <div className="mt-8 ml-4 mr-4">
      <h2 className="font-poppins font-semibold text-2xl">
        Mi Lista De Compras
      </h2>
      <div className="mt-6 flex gap-20">
        <p className="font-Montserrat text-xs font-medium text-[#37474F]">
          10 producto agregados
        </p>
        <button className="font-semibold text-xs font-Montserrat text-[#EB4335] border border-[#EB4335] w-28 h-6 rounded-lg">
          Vaciar Carrito
        </button>
      </div>
      {products.map((list) => (
        <div className="bg-[#F0F5FA] w-full mt-7 h-auto mb-5">
          <div className="flex">
            <div className="mt-3.5 ml-3.5">
              <Image
                className="object-cover"
                src={imgPlatano}
                width={90}
                height={10}
                alt="img-product"
              />
            </div>
            <div>
              <div className="flex mt-3.5 ml-3">
                <h3 className="font-poppins font-normal text-lg text-[#455A64] truncate w-20">
                  {list.name}
                </h3>
                <div className="flex ml-14 ">
                  <button className="h-7 border border-[#33A833] rounded">
                    <img
                      className="w-7"
                      src="/trash-delete.svg"
                      alt="img-delete"
                    />
                  </button>
                  <button className="font-Montserrat text-xs font-semibold text-[#33A833] border border-[#33A833] w-16 h-6 rounded-md ml-4">
                    {" "}
                    Pagar
                  </button>
                </div>
              </div>
              <div className="ml-3 mt-2 mr-3">
                <p className="font-Montserrat font-medium text-sm text-[#607D8B] w-64 truncate">
                  {list.description}
                </p>
                <p className="font-Montserrat text-sm font-bold text-[#37474F] mt-4">
                  ${list.price}/kg
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-8 ml-3">
            <p className="font-poppins font-normal text-base mr-14">Cantidad</p>
            <div className="flex mb-5">
              <button
                onClick={restProduct(list.price)}
                className="bg-[#33A833] w-14 h-6 rounded-lg text-white mr-4"
              >
                -
              </button>
              <p className="mr-4 font-Montserrat font-semibold text-sm text-center w-8">
                {product}
              </p>
              <button
                onClick={getProduct(list.price)}
                className="bg-[#33A833] w-14 h-6 rounded-lg text-white"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}

      <div>
        <div className="flex justify-between ">
          <p className="font-poppins text-sm font-bold">Costo Total</p>
          <p className="mr-8 w-auto text-lg font-Montserrat font-bold ">
            ${total}
          </p>
        </div>
        <button className=" bg-[#33A833] text-white w-[18.7rem] h-12 rounded-full mx-8 mt-5 ">
          Proceder al Pago
        </button>
      </div>
    </div>
  );
};

export default Shoping;
