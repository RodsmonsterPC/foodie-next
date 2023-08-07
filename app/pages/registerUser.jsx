import React from "react";
import Image from "next/image";
import Form from "../components/Form";
import Link from "next/link";
const RegisterUser = () => {
  return (
    <div className="w-auto md:mx-auto md:w-479 md:border-2 md:rounded-md md:border-black-100/35 md:mt-20">
      <div>
        <article>
          <Image
            className="cursor-pointer flex mx-auto mt-6"
            src="/logo.svg"
            width={282}
            height={121}
            alt="logo image"
          />
          <div className="flex flex-col">
            <h1 className="text-5xl mt-10 font-Sub-title mx-auto">
              Bienvenido
            </h1>
            <p className="text-lg font-Sub-title text-center mx-auto mt-6 w-13">
              Un placer recibirte en nuestra comunidad
            </p>
          </div>
        </article>
        <Form />
        <div className="ml-7 mt-14 mb-28 md:flex md:justify-center">
          <button className="bg-button-color font-Sub-title text-white h-14 rounded-full w-72">
            ¡Registrate!
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
