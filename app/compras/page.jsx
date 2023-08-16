"use client";
import React from "react";
import { useState } from "react";
import DasboardUser from "../components/DashBoard";
import Pagination from "../components/Pagination";
import Modal from "../components/Modal";
import image from "../../assets/pollo.png"

const boughtProducts = () => {
  const info = [
    {
      id: 1,
      name: "Pollo Parmesano",
      price: "$350",
      stattus:"pendiente",
      
      
    },
    {
      id: 2,
      name: "Fiete de Res ",
      price: "$350",
      stattus:"pendiente",
      
    },
    {
      id: 3,
      name: "Arrachera",
      price: "$350",
      stattus:"pendiente",
      
    },
    {
      id: 4,
      name: "Jamón de Pavo",
      price: "$350",
      stattus:"pendiente",
      
    },
    {
      id: 5,
      name: "Chorizo",
      price: "$350",
      stattus:"pendiente",
      
    },
    {
      id: 6,
      name: "Chorizo",
      price: "$350",
      stattus:"pendiente",
      
    },
    {
      id: 7,
      name: "Bisteck de Res",
      price: "$350",
      stattus:"pendiente",
      
    },
    {
      id: 8,
      name: "Bisteck de Res",
      price: "$350",
      stattus:"pendiente",
      
    },
    {
      id: 9,
      name: "Bisteck de Res",
      price: "$350",
      stattus:"pendiente",
      
    },
    {
      id: 10,
      name: "Bisteck de Res",
      price: "$350",
      stattus:"pendiente",
      
    },
    {
      id: 11,
      name: "Bisteck de Res",
      price: "$350",
      stattus:"pendiente",
      
    },
    {
      id: 12,
      name: "Bisteck de Res",
      price: "$350",
      stattus:"pendiente",
      
    },
    {
      id: 13,
      name: "Bisteck de Res",
      price: "$350",
      stattus:"pendiente",
      
    },
    {
      id: 14,
      name: "Bisteck de Res",
      price: "$350",
      stattus:"pendiente",
      
    },
  ];
  const [open,setOpen] = useState(false)
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setproductsPerPage] = useState(6);
  const [showModal,setShowModal] = useState(false);
  const totalProducts = info.length;
  const lasIndex = currentPage * productsPerPage;
  const firsIndex = lasIndex - productsPerPage;
  return (
    <section>
      <DasboardUser />
      <div className="border-2 border-[#CFD8DC] mt-14 mx-8 rounded-lg h-96">
        {info
          .map((infoProduct) => (
            <>
            <button onClick={()=>setShowModal(true)}
              key={infoProduct.id}
              className="flex flex-col h-16 bg-[#F7FBD3] w-full border-2 border-b-[#CFD8DC]"
            >
              <div className="flex flex-row justify-around">
                <p className="font-Montserrat font-medium text-xl truncate w-[50%] ml-4 mt-4">
                  {infoProduct.name}
                </p>
                <p className="font-Montserrat font-medium text-xl w-[50%] mt-4">
                  {infoProduct.price}
                </p>
              </div>
            </button>
            </>
          ))
          .slice(firsIndex, lasIndex)}
          <Modal isVisible={showModal} onClose={()=>setShowModal(false)}/>
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
        
      />
    </section>
  );
};
export default boughtProducts;
