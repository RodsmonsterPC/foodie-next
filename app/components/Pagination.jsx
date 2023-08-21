"use client";
import React from "react";
import { useState } from "react";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRigth from "../../assets/arrow-rigth.svg";
import Image from "next/image";

const Pagination = ({productsPerPage,currentPage,setCurrentPage,totalProducts,}) => {
  const [limitPage,setLimitPage] =useState(4);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  const previusPage = () => {
    if (currentPage !== 1 ) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nexPage = () => {
    if(currentPage !== pageNumbers.length){
      setCurrentPage(currentPage + 1);
    }
  };
  const specificPage = (e) => {
    setCurrentPage(e);
  };
  return (
    <div className="flex bg-white rounded-lg font-popins mt-10 justify-center">
      <button
        onClick={previusPage}
        className={`h-12 border-2 border-r-0 border-[#CFD8DC] w-12 px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white`}
      >
        <Image src={arrowLeft} width={25} height={25} />
      </button>
      {pageNumbers.map((noPage) => (
        <button
          onClick={() => specificPage(noPage)}
          key={noPage}
          className={`h-12 border-2 border-r-0 border-[#CFD8DC] w-12 ${
            currentPage === noPage && "bg-indigo-600 text-white"
          }`}
        >
          {noPage}
        </button>
      ))}
      <button
        onClick={nexPage}
        className="h-12 border-2  border-[#CFD8DC] w-12 px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white"
      >
        <Image src={arrowRigth} width={25} height={25} />
      </button>
    </div>
  );
};

export default Pagination;
