"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Search = ({ id, name, price, description, img }) => {
  return (
    <Link href={`/detailProduct/${id}`}>
      <div className="w-[18rem] bg-[#F0F5FA]  mb-5 h-[190px] ml-3 rounded-lg md:w-[2]">
        <div className="flex mt-4 ml-3 w-full ">
          <Image
            className=""
            src={img}
            width={100}
            height={100}
            alt="img-platano"
          />
          <div className="ml-3 mt-2 w-2/4">
            <h2 className="font-poppins font-normal text-sm text-[#455A64] text-start">
              {name}
            </h2>
            <p className="font-Montserrat font-bold text-xs mt-1">{price}/kg</p>
          </div>
        </div>
        <div className="mt-2 ml-3">
          <p className="font-Montserrat font-medium text-xs text-[#607D8B]">
            {description}
          </p>
        </div>
        <div className="flex mt-3 ml-3  ">
          <Link href={"#"}>
            <button className="font-Montserrat text-xs font-semibold text-[#33A833] border border-[#33A833] w-16 h-6 mb-6 rounded-md mr-12">
              Pagar
            </button>
          </Link>
          <Link href={"#"}>
            <Image
              src="/shopping-car.svg"
              width={20}
              height={20}
              alt="img-shopping"
            />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Search;
