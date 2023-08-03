import React from "react";
import Link from "next/link";
import Image from "next/image";
const navbar = () => {
  return (
    <div>
      <nav className="container mx-auto bg-back-color flex justify-between text-slate-900 h-16">
        <div className="flex justify-between ml-14 my-3 ">
          <Image
            src="/foodie/items/logo.svg"
            width={96.05}
            height={40}
            alt="logo image"
          />
          <div className="text-base ml-20 rounded-full bg-search-color h-9 text-center p-1.5">
            <img src="" alt="" />
            ¡Encuentra lo que necesitas!
            <button className="text-sm bg-button-color ml-7 rounded-full py-1 px-6">
              Buscar
            </button>
          </div>
        </div>
        <div className="text-sm flex justify-between my-6">
          <div>
            <Link className="m-6" href="">
              Inicio
            </Link>
            <Link className="m-6" href="">
              Catálogos
            </Link>
            <Link className="m-6" href="">
              Iniciar sesión
            </Link>
          </div>
          <button className="flex justify-between">
            <Image
              src="/foodie/items/person_apron_FILL1_wght400_GRAD0_opsz48 1.svg"
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

export default navbar;
