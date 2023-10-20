"use client";
import React from "react";
import Image from "next/image";
import Counter from "../../components/Counter";
import { useEffect, useState } from "react";
import { useUserContext } from "@/app/contexts/userContext";


const detailProduct = ({ params: { id } }) => {
  const [data, setData] = useState([]);
  const userToken = useUserContext();
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
  
  const checkout = async () => {
    const response = await fetch("/create-order", {
      method: "POST",
    });
    const data = await response.json();
    window.location.href = data.links[1].href;
  };

  if (data.length === 0) {
    return <span>loading.....</span>;
  }
  const { dataProduct } = data;
 
  const {
    setAllProducts,
    allProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
  } = userToken;
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item._id === product._id)) {
      const products = allProducts.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

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
          {/* <Image
            className="hidden md:flex "
            src={dataProduct.data.productss.file}
            width={414}
            height={431}
          /> */}
          <img src={dataProduct.data.products.file} alt="product" />
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
          <Counter existence={dataProduct.data.products.existence} />

          <div className="ml-6 flex flex-col mb-12 md:items-center">
            <button
              onClick={() => onAddProduct(dataProduct.data.products)}
              className="text-white text-lg bg-button-color w-description-h h-12 rounded-full mt-7 drop-shadow-xl"
            >
              Agregar al carrito
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default detailProduct;
