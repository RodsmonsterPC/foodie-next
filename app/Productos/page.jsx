"use client";
import React, { useState } from "react";
import DasboardUser from "../components/DashBoard";
import Image from "next/image";
import add from "../../assets/img-add.svg";
import Pagination from "../components/Pagination";
import ModalProducts from "../components/ModalProductos";
import Link from "next/link";
import newProduct from "../../assets/img-create-new-product.svg";
import trash from "../../assets/img-trash.svg";

const Products = () => {
  const info = [
    {
      id: 1,
      name: "Pollo Parmesano",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
      sell: 0,
      asset: false,
      amout: 20,
      edit: newProduct,
      delete: trash,
    },
    {
      id: 2,
      name: "Fiete de Res ",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
      sell: 10,
      asset: true,
      amout: 20,
      edit: newProduct,
      delete: trash,
    },
    {
      id: 3,
      name: "Arrachera",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
      sell: 15,
      asset: false,
      amout: 20,
      edit: newProduct,
      delete: trash,
    },
    {
      id: 4,
      name: "Jamón de Pavo",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
      sell: 0,
      asset: false,
      amout: 20,
      edit: newProduct,
      delete: trash,
    },
    {
      id: 5,
      name: "Chorizo",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
      sell: 0,
      asset: true,
      amout: 20,
      edit: newProduct,
      delete: trash,
    },
    {
      id: 6,
      name: "Salmón",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
      sell: 6,
      asset: true,
      amout: 20,
      edit: newProduct,
      delete: trash,
    },
    {
      id: 7,
      name: "Bisteck de Res",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
      sell: 4,
      asset: true,
      amout: 20,
      edit: newProduct,
      delete: trash,
    },
    {
      id: 8,
      name: "Bisteck de Res",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
      sell: 4,
      asset: true,
      amout: 20,
      edit: newProduct,
      delete: trash,
    },
    {
      id: 9,
      name: "Bisteck de Res",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
      sell: 4,
      asset: true,
      amout: 20,
      edit: newProduct,
      delete: trash,
    },
    {
      id: 10,
      name: "Bisteck de Res",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
      sell: 4,
      asset: true,
      amout: 20,
      edit: newProduct,
      delete: trash,
    },
    {
      id: 11,
      name: "Bisteck de Res",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
      sell: 4,
      asset: true,
      amout: 20,
      edit: newProduct,
      delete: trash,
    },
    {
      id: 12,
      name: "Bisteck de Res",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
      sell: 4,
      asset: true,
      amout: 20,
      edit: newProduct,
      delete: trash,
    },
    {
      id: 13,
      name: "Bisteck de Res",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
      sell: 4,
      asset: true,
      amout: 20,
      edit: newProduct,
      delete: trash,
    },
    {
      id: 14,
      name: "Bisteck de Res",
      price: "$350",
      stattus: "pendiente",
      image:
        "https://img.freepik.com/vector-premium/pollo-asado-dibujos-animados_119631-190.jpg",
      sell: 4,
      asset: true,
      amout: 20,
      edit: newProduct,
      delete: trash,
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setproductsPerPage] = useState(6);
  const [showModal, setShowModal] = useState(false);
  const totalProducts = info.length;
  const lasIndex = currentPage * productsPerPage;
  const firsIndex = lasIndex - productsPerPage;
  return (
    <section className="md:flex ">
      <DasboardUser />
      <div className="mx-8 mt-5 md:w-[70%] md:block">
        <div className="flex flex-row-reverse  justify-between">
          <Link href={"/newProduct"}>
            <p className="hidden md:block md:mr-4 md:text-sm md:text-white md:rounded-full md:h-7 md:py-1 w-28 text-center bg-[#33A833]">
              Agregar
            </p>
            <Image
              className="md:hidden"
              src={add}
              width={45}
              height={45}
              alt="add-newProduct"
            />
          </Link>
          <h2 className="font-medium text-3xl font-popins hidden md:block md:mt-6 md:ml-8 md:justify-items-end">
            Productos Vendidos
          </h2>
        </div>
        <div className="border-2 border-[#CFD8DC] mt-7  rounded-lg md:mt-4 h-auto">
          <div className="hidden md:bg-[#F7FBD3] md:flex md:justify-around md:font-medium md:text-lg  ">
            <p>Precio</p>
            <p>Producto</p>
            <p>Ventas</p>
            <p>Activo</p>
            <p>Cantidad</p>
            <p>Editar</p>
            <p>Eliminar</p>
          </div>
          {info
            .map((infoProduct) => (
              <>
                <button
                  onClick={() => setShowModal(true)}
                  key={infoProduct.id}
                  className="flex flex-col h-16 bg-[#F7FBD3] w-full border-2 border-b-[#CFD8DC] md:justify-center md:w-full"
                >
                  <div className="flex flex-row justify-between md:flex md:flex-row-reverse">
                    <div className="hidden md:flex md:w-[14%] md:justify-center">
                      <button>
                        <Image
                          src={infoProduct.delete}
                          width={30}
                          height={30}
                          alt="img-delete"
                        />
                      </button>
                    </div>
                    <div className="hidden md:flex md:w-[14%] md:justify-center md:mt-3">
                      <Link href={"/newProduct"}>
                        <Image
                          src={infoProduct.edit}
                          width={30}
                          height={30}
                          alt="img-edit"
                        />
                      </Link>
                    </div>
                    <p className="hidden md:block font-Montserrat font-medium text-xl truncate w-[50%] ml-4 mt-4 md:text-base  md:ml-0 md:text-center md:w-[14%]">
                      {infoProduct.amout}
                    </p>
                    <div className="hidden md:flex md:w-[14%] mt-2 md:justify-center">
                      <span
                        className={`${
                          infoProduct.asset == true
                            ? "bg-[#00FF29]"
                            : "bg-[#FF0F00]"
                        } md:block w-6 h-6  rounded-full my-2 ml-2 `}
                      ></span>
                    </div>

                    <p className="hidden md:block font-Montserrat font-medium text-xl truncate w-[50%] ml-4 mt-4 md:text-base  md:ml-0 md:text-center md:w-[14%]">
                      {infoProduct.sell > 0
                        ? `+${infoProduct.sell}`
                        : `${infoProduct.sell}`}
                    </p>
                    <p className="truncate font-Montserrat ml-4 font-medium text-xl w-[50%] mt-4 md:text-base md:w-[14%] md:ml-0">
                      {infoProduct.name}
                    </p>

                    <div className="md:flex gap-3 md:w-[14%] md:justify-center ">
                      <img
                        src={infoProduct.image}
                        alt="img-product"
                        className="hidden md:inline-block md-border md:rounded-full md:w-10 md:h-10"
                      />
                      <p className="mr-7 font-Montserrat text-center font-medium text-xl w-[50%] mt-4 md:text-base md:w-1/4 md:mr-0">
                        {infoProduct.price}
                      </p>
                    </div>
                  </div>
                </button>
              </>
            ))
            .slice(firsIndex, lasIndex)}
          <ModalProducts
            isVisible={showModal}
            onClose={() => setShowModal(false)}
          />
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

export default Products;
