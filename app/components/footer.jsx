import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#FAFFC0] w-full h-[50rem] md:h-[23.8rem]">
      <div className="md:flex">
        <div className="flex md:flex md:flex-col md:mt-[5.6rem] md:ml-[3.5rem] ">
          <img className="mt-12 ml-4 w-40 h-16 md:ml-0 md:mt-0" src="/logo.svg" alt="logo" />
          <div className="flex flex-row">
            <img
              className="mt-16  ml-[2.8rem] w-8 h-8 md:mt-8 md:ml-4"
              src="/icon-facebook.svg"
              alt="icon-facebook"
            />
            <img
              className="mt-16 w-8 h-8 mr-[1.25rem] ml-[1.25rem] md:mt-8"
              src="/icon-twitter.svg"
              alt="icon-twitter"
            />
            <img
              className="mt-16 w-8 h-8 md:mt-8"
              src="/icon-linkeding.svg"
              alt="icon-linkeding"
            />
          </div>
        </div>
        
        <div className="mt-[1.75rem] ml-4 flex flex-col md:ml-24 md:mt-[5.6rem]">
          <h5 className="font-semibold text-xl text-[#263238]">Nosotros</h5>
          <a className="font-medium text-base text-[#455A64] mt-4" href="#">
            Home
          </a>
          <a className="font-medium text-base text-[#455A64] mt-4" href="#">
            Categorias
          </a>
          <a className="font-medium text-base text-[#455A64] mt-4" href="#">
            Carrito
          </a>
        </div>
        <div className="mt-[1.75rem] ml-4 md:ml-32 md:mt-[5.6rem]">
          <h5 className="font-semibold text-xl text-[#263238]">Contacto</h5>
          <div className="flex items-center mt-4">
            <span>
              <img
                className="inline-block"
                src="/icon-phone.svg"
                alt="icon-phone"
              />
            </span>
            <p className="ml-[0.75rem] font-medium text-base text-[#455A64]">(MEX) +52 1564 2789</p>
          </div>
          <div className="flex items-center mt-4">
            <span>
              <img
                className="inline-block"
                src="/icon-email.svg"
                alt="icon-phone"
              />
            </span>
            <p className="ml-[0.75rem] font-medium text-base text-[#455A64]">info@foodie.com</p>
          </div>
        </div>
        <div className="mt-[1.8rem] ml-4 md:ml-[13.6rem] md:mt-[5.6rem]">
          <h5 className="font-semibold text-xl text-[#263238]">Servicio</h5>
          <p className="font-medium text-base text-[#455A64] mt-4">Términos y condiciones </p>
          <p className="font-medium text-base text-[#455A64] mt-4">Aviso de privacidad</p>
        </div>
        <div className="flex flex-col mt-8 md:ml-52 md:mt-[5.6rem]">
          <h5 className="font-semibold text-xl text-[#263238] mx-auto">¡Únete a Foodie</h5>
          <button className="mt-4 w-[18.7rem] h-12 text-lg bg-button-color text-white rounded-full mx-auto">¡Regístrate!</button>
        </div>
      </div>
      <div className="mt-8 md:mt-24">
        <p className="font-medium text-base text-[#455A64] text-center ">© 2023 Copyright. Todos los derechos reservados por Foodie.</p>
      </div>
    </footer>
  );
};

export { Footer };
