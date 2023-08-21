"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import arrowRigth from "../../assets/arrow-rigth.svg";
import arrowLeft from "../../assets/arrow-left.svg";
import { useSwiper } from "swiper/react";
import { Handlee } from "next/font/google";

const SlideNavButtons = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(20);
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  // const pageSize = ()=>{
  //   setWindowSize(window.innerWidth)
  //   useEffect(()=>{
  //       window.addEventListener("resize",pageSize)
  //       return ()=>{
  //           window.removeEventListener("resize",pageSize)
  //       }
  //   },[windowSize])
  // }
  // console.log(windowSize)

  const swiper = useSwiper();

  const previusPage = () => {
    swiper.slidePrev();
    if(currentPage !== 1){
        setCurrentPage(currentPage -1)
    }
  };
  const nextPage = ()=>{
    swiper.slideNext();
    if(currentPage !== page){
        setCurrentPage(currentPage + 1)
    }
  }
  return (
    <div className="flex bg-white rounded-lg font-popins mt-10 justify-center ">
      <button
        onClick={previusPage}
        className={`h-12 border-2 border-r-0 border-[#CFD8DC] w-12 px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white`}
      >
        <Image src={arrowLeft} width={25} height={25} alt="img-prev" />
      </button>
      <div className=" bg-white border-2 border-y-[#CFD8DC] w-16 text-center ">
        <p className="mt-3">{currentPage} /{page} </p>
      </div>
      <button
        onClick={nextPage}
        className="h-12 border-2  border-[#CFD8DC] w-12 px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white"
      >
        <Image src={arrowRigth} width={25} height={25} alt="img-next" />
      </button>
    </div>
  );
};

export default SlideNavButtons;
