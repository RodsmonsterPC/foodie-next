"use client";
import { useState } from "react";
import Image from "next/image";
import user from "../../assets/img-user.png";
import list from "../../assets/icon-list-products.svg";
import shopping from "../../assets/icon-store.svg";
import goOut from "../../assets/icon-out.svg";
import Link from "next/link";

const DasboardUser = ({ name, email }) => {
  const btnUser = [
    {
      name: "Productos",
      src: list,
      alt: "list-product",
      num: 1,
      href: "/Productos",
    },
    {
      name: "Compras",
      src: shopping,
      alt: "icon-shopping",
      num: 2,
      href: "/Compras",
    },
  ];
  return (
    <div className="flex flex-col-reverse mt-8 mx-4 md:flex-col md:ml-14 md:mt-4 md:w-[20%] ">
      <div className="md:border md:border-[#CFD8DC] md:shadow-lg  md:rounded-lg md:relative">
        <Image
          className="hidden  md:block md:mt-6 md:rounded-full md:border-2 md:mx-auto"
          src={user}
          width={90}
          height={100}
        />
        <h2 className="hidden md:inline-block md:mt-5 md:ml-10 md:font-popins md:font-medium md:text-[1.8rem] md:mb-5 ">
          General
        </h2>
        <div>
          {btnUser.map((btn, i) => (
            <Link href={btn.href} key={i}>
              <button
                onClick={""}
                className={
                  "border-2 border-[#33A833] text-black w-36 h-10 ml-5 mt-5 rounded-lg font-medium text-xl font-Montserrat md:flex md:ml-8 md:mb-10 md:mt-0 md:w-48 md:h-10 md:p-1"
                }
              >
                <Image
                  className="hidden md:inline-block md:mr-2 md:ml-2"
                  src={btn.src}
                  width={25}
                  height={25}
                  alt={btn.alt}
                />
                {btn.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div
        className="bg-slate-100 flex flex-row justify-between h-16  rounded-lg 
         md:border md:border-[#CFD8DC] md:mt-4 md:shadow-lg md:rounded-lg md:bg-white md:flex-col md:h-auto md:relative"
      >
        <div className="flex flex-row">
          <div className="my-auto md:hidden">
            <Image
              className="rounded-full mr-2 ml-2"
              src={user}
              width={55}
              height={55}
            />
          </div>
          <div className="flex flex-col justify-center md:mt-8 md:ml-4 md:bg-slate-100 md:h-20 md:w-60 md:text-center md:rounded-lg">
            <h5 className="text-xl font-Montserrat font-medium">{name}</h5>
            <p className="font-light text-sm font-Montserrat text-[#B0BEC5]">
              {email}
            </p>
          </div>
        </div>
        <button className="mr-4 md:flex md:mt-4 ml-8 mb-6 ">
          <Image className="mt-4 md:mt-0" src={goOut} width={30} height={30} />
          <p className="hidden md:inline-block md:font-medium md:text-xl md:font-Montserrat md:ml-2">
            Cerrar sesión
          </p>
        </button>
      </div>
    </div>
  );
};
export default DasboardUser;
