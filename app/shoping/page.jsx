"use client";
import React, { useState } from "react";
import { useUserContext } from "../contexts/userContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalPayment from "../components/paypal.jsx";
import Pagination from "../components/Pagination";
import ModalPaypal from "../components/ModalPaypal";

const Shoping = () => {
  const {
    allProducts,
    total,
    countProducts,
    setAllProducts,
    setTotal,
    setCountProducts,
    paypal,
  } = useUserContext();

  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setproductsPerPage] = useState(3);
  const lasIndex = currentPage * productsPerPage;
  const firsIndex = lasIndex - productsPerPage;

  const deletProduct = (id, priceProduct, quantityProducts) => {
    const filter = allProducts.filter((item) => item._id != id);
    setTotal(total - priceProduct * quantityProducts);
    setAllProducts(filter);
    setCountProducts(countProducts - quantityProducts)

    return filter;
  };

  const emptyCar = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  const sumProduct = (id) => {
    allProducts.forEach((item) => {
      if (item._id === id) {
        setCountProducts(countProducts + 1);
        setTotal(total + item.price);
        item.quantity = item.quantity + 1;
      }
    });
  };
  const restProduct = (id) => {
    allProducts.forEach((item) => {
      if (item._id === id && item.quantity != 1) {
        setCountProducts(countProducts - 1);
        setTotal(total - item.price);
        item.quantity = item.quantity - 1;
      }
    });
  };
   const valuePay = (data) => {
    if (!data) return null;
    else {
     const { purchase_units } = data;
     let idValue = "";
      let priceValue = 0
      purchase_units.forEach((item) => {
      idValue = item.reference_id;
      const { payments } = item;
    const { captures } = payments;
      captures.forEach((item) => {
       const { amount } = item;
        priceValue = amount.value;
      });
      });
     let counterValue = 0
      allProducts.forEach(item =>{
      if(item._id === idValue){
       counterValue = item.quantity
       }
    })
   const filter = allProducts.filter((item) => item._id != idValue);
   setAllProducts(filter);
   setCountProducts(countProducts - counterValue)
       setTotal(total - priceValue)
    }  
   };

  const initialOptions = {
    clientId:
      "AQygtExv1sWlPYCnnaY_A05_kye-F-GOCVUC52dlMsPaJ3yzDIg-Ldog-ssYfTlu15xNdFxCCNCjUiT5",
    currency: "USD",
    intent: "capture",
  };

  return (
    <div className="mt-8 ml-4 mr-4">
      <h2 className="font-poppins font-semibold text-2xl">
        Mi Lista De Compras
      </h2>
      <div className="mt-6 flex gap-20">
        <p className="font-Montserrat text-xs font-medium text-[#37474F]">
          {countProducts} productos agregados
        </p>
        <button
          onClick={() => emptyCar()}
          className="font-semibold text-xs font-Montserrat text-[#EB4335] border border-[#EB4335] w-28 h-6 rounded-lg"
        >
          Vaciar Carrito
        </button>
      </div>
      {allProducts
        .map((list) => (
          <div className="bg-[#F0F5FA] w-full mt-7 h-auto mb-5">
            <div className="flex">
              <div className="mt-3.5 ml-3.5">
                <img src={list.file} alt="product-img" className="h-16 w-16" />
              </div>
              <div>
                <div className="flex mt-3.5 ml-3">
                  <h3 className="font-poppins font-normal text-lg text-[#455A64] truncate w-20">
                    {list.name}
                  </h3>
                  <div className="flex ml-14 ">
                    <button
                      onClick={() =>
                        deletProduct(list._id, list.price, list.quantity)
                      }
                      className="h-7 border border-[#33A833] rounded"
                    >
                      <img
                        className="w-7"
                        src="/trash-delete.svg"
                        alt="img-delete"
                      />
                    </button>
                    <div className="w-10">
                      
                      <PayPalScriptProvider options={initialOptions}>
                        <PayPalPayment
                          product={list.price * list.quantity}
                          id={list._id}
                        />
                      </PayPalScriptProvider>
                    </div>
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
              <p className="font-poppins font-normal text-base mr-14">
                Cantidad
              </p>
              <div className="flex mb-5">
                <button
                  onClick={() => restProduct(list._id)}
                  className="bg-[#33A833] w-14 h-6 rounded-lg text-white mr-4"
                >
                  -
                </button>
                <p className="mr-4 font-Montserrat font-semibold text-sm text-center w-8">
                  {list.quantity}
                </p>
                <button
                  onClick={() => sumProduct(list._id)}
                  className="bg-[#33A833] w-14 h-6 rounded-lg text-white"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))
        .slice(firsIndex, lasIndex)}

      <div>
        <div className="flex justify-between ">
          <p className="font-poppins text-sm font-bold">Costo Total</p>
          <p className="mr-8 w-auto text-lg font-Montserrat font-bold ">
            ${total}
          </p>
        </div>
        
        <PayPalScriptProvider options={initialOptions}>
          <PayPalPayment product={total} click={valuePay()}/>
        </PayPalScriptProvider>
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={allProducts.length}
      />
    </div>
  );
};

export default Shoping;
