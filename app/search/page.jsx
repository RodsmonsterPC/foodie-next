"use client";
import React, { useState } from "react";
import imgPlatano from "../../assets/img-platano.svg";
import Search from "../components/ComponentsSearch";
import Pagination from "../components/Pagination";
const SearchShoping = () => {
  const products = [
    {
      id: 1,
      name: "Pollo Parmesano",
      price: "$350",
      description: "Aprovecha las promociones en este producto",
      img: imgPlatano,
    },
    {
      id: 2,
      name: "Filete de pescado",
      price: "$350",
      description: "Aprovecha las promociones en este producto",
      img: imgPlatano,
    },
    {
      id: 3,
      name: "bolsa de papas fritas",
      price: "$350",
      description: "Aprovecha las promociones en este producto",
      img: imgPlatano,
    },
    {
      id: 4,
      name: "papas",
      price: "$350",
      description: "Aprovecha las promociones en este producto",
      img: imgPlatano,
    },
  ];
  const [productsPerPage,setProductsPerPage] = useState(2);
  const [currentPage,setCurrentPage] = useState(1)
  const lasIndex = currentPage * productsPerPage;
  const firsIndex = lasIndex - productsPerPage;
  const tamanio = products.length;
  return (
    <section className="w-full mt-6">
      <p className="text-[#607D8B] font-Montserrat font-medium text-sm ml-3 block w-full mb-3">
        {tamanio} Resultasos para <span className="font-Montserrat font-bold text-sm text-black">Platano</span>
      </p>
      <div className="flex flex-wrap w-full">
      {products.map((product) => (
        <Search
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          img={product.img}
        />
      )).slice(firsIndex,lasIndex)}
      </div>
      <Pagination
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={tamanio}
        />
    </section>
  );
};

export default SearchShoping;
