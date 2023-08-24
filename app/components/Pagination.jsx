"use client";
import React from "react";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRigth from "../../assets/arrow-rigth.svg";
import Image from "next/image";

const Pagination = ({ productsPerPage, currentPage,setCurrentPage, totalProducts}) => {
  
  const pageNumbers = Math.ceil(totalProducts / productsPerPage);

  const previusPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nexPage = () => {
    if (currentPage !== pageNumbers) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  return (
    <div className="flex bg-white rounded-lg font-popins mt-10 justify-center md:mt-5">
      <button
        onClick={previusPage}
        className={`h-12 border-2 border-r-0 border-[#CFD8DC] w-12 px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white`}
      >
        <Image src={arrowLeft} width={25} height={25} />
      </button>
      <div className="h-12 border-2 border-r-0 border-[#CFD8DC] w-16 text-center">
        <p className="mt-2">
          {currentPage}/{pageNumbers}
        </p>
      </div>
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
