"use client";
import React from "react";
import { useState } from "react";
import DasboardUser from "../components/DashBoard";
import Pagination from "../components/Pagination";
import Modal from "../components/ModalCompras";

const boughtProducts = () => {
  const info = [
    {
      id: 1,
      name: "Pollo Parmesano",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
    },
    {
      id: 2,
      name: "Fiete de Res ",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
    },
    {
      id: 3,
      name: "Arrachera",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
    },
    {
      id: 4,
      name: "Jamón de Pavo",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
    },
    {
      id: 5,
      name: "Chorizo",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
    },
    {
      id: 6,
      name: "Chorizo",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
    },
    {
      id: 7,
      name: "Bisteck de Res",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
    },
    {
      id: 8,
      name: "Bisteck de Res",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
    },
    {
      id: 9,
      name: "Bisteck de Res",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
    },
    {
      id: 10,
      name: "Bisteck de Res",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
    },
    {
      id: 11,
      name: "Bisteck de Res",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
    },
    {
      id: 12,
      name: "Bisteck de Res",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
    },
    {
      id: 13,
      name: "Bisteck de Res",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
    },
    {
      id: 14,
      name: "Bisteck de Res",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setproductsPerPage] = useState(6);
  const [showModal, setShowModal] = useState(false);
  const totalProducts = info.length;
  const lasIndex = currentPage * productsPerPage;
  const firsIndex = lasIndex - productsPerPage;
  return (
    <section className="md:flex">
      <DasboardUser />
      <div className="md:w-[70%]">
        <h2 className="font-medium text-3xl font-popins hidden md:block md:mt-6 md:ml-8">
          Productos Comprados
        </h2>
        <div className="border-2 border-[#CFD8DC] mt-14 mx-8 rounded-lg md:mt-4 h-auto">
          <div className="hidden md:bg-[#F7FBD3] md:flex md:justify-around md:font-medium md:text-lg  ">
            <p>Cantidad</p>
            <p>Precio</p>
            <p>Producto</p>
            <p>Entrega</p>
          </div>
          {info
            .map((infoProduct) => (
              <>
                <button
                  onClick={() => setShowModal(true)}
                  key={infoProduct.id}
                  className="flex flex-col h-16 bg-[#F7FBD3] w-full border-2 border-b-[#CFD8DC] md:justify-center md:w-full"
                >
                  <div className="flex flex-row justify-around md:flex md:flex-row-reverse">
                    <p className="hidden md:block md:text-base md:mt-4  md:w-1/4 md:text-center">
                      {infoProduct.stattus}
                    </p>
                    <p className="font-Montserrat font-medium text-xl truncate w-[50%] ml-4 mt-4 md:text-base  md:ml-0 md:text-center md:w-1/4">
                      {infoProduct.name}
                    </p>
                    <p className="font-Montserrat font-medium text-xl w-[50%] mt-4 md:text-base md:w-1/4">
                      {infoProduct.price}
                    </p>
                    <div className="hidden md:flex gap-3 md:w-1/4 md:justify-center ">
                      <p className="md:mt-4">X1</p>
                      <img
                        className="md:inline-block md-border md:rounded-full md:w-10 md:h-10"
                        src={infoProduct.image}
                        alt="img-product"
                      />
                    </div>
                  </div>
                </button>
              </>
            ))
            .slice(firsIndex, lasIndex)}
          <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
        />
      </div>
    </section>
  );
};
export default boughtProducts;
