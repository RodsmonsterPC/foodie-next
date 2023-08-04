import React from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div>
      <nav className=" bg-back-color flex justify-between text-slate-900 h-16  drop-shadow-md">
        <div className="flex justify-between my-3 pl-12">
          <Image src="/logo.svg" width={96.05} height={40} alt="logo image" />
          <div className="flex justify-between text-base ml-20 rounded-full bg-search-color h-9 text-center p-1 w-search-input ml-32">
            <Image
              className="ml-6"
              src="/search.svg"
              width={20}
              height={20}
              alt=""
            />
            <input
              type="text"
              placeholder="¡Encuentra lo que necesitas!"
              className="flex text-base bg-search-color text-center w-56"
            />
            <button className="text-sm text-white bg-button-color  rounded-full py-1 px-6 h-7">
              Buscar
            </button>
          </div>
        </div>
        <div className="text-sm flex justify-between my-3 mr-3.5 pr-12">
          <div className="pt-2.5">
            <Link className="m-6 text-link-color" href="">
              Inicio
            </Link>
            <Link className="m-6 text-link-color" href="">
              Catálogos
            </Link>
            <Link className="m-6 text-link-color" href="">
              Iniciar sesión
            </Link>
          </div>

          <button className="flex text-button-color border border-button-color rounded-full w-48 h-9 py-2.5">
            <Image
              className="ml-5 mr-4"
              src="/icon-person.svg"
              width={20}
              height={20}
              alt="person"
            />
            ¡Unete a Foodie!
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
