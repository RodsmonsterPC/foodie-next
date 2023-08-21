import React from "react";
import Link from "next/link";

const sectionSocial=[
  {name:"facebook",link:"/",url:'/icon-facebook.svg'},
  {name:"twitter",link:"/",url:'/icon-twitter.svg' },
  {name:"linkeding",link:"/",url:'/icon-linkeding.svg'},
]

const sectionLink = [
  { name: "Home", link: "/"},
  { name: "Categorias", link: "/" },
  { name: "Carrito", link: "/" },
];

const Footer = () => {
  return (
    <footer className="bg-[#FAFFC0]  h-[50rem] md:h-[24rem] ">
      <div className="md:flex">
        <div className="flex md:flex-col ml-4 md:ml-[3.5rem]">
          <img className="mt-12 w-48 h-16 mr-[2.8rem] md:mt-[5.5rem] md:mr-0 md:pr-8" src="/logo.svg" alt="logo" />
          <div className="flex flex-row md:justify-around">
           {
            //falta poner una key
            sectionSocial.map((link)=> (
              <Link href={link.link}>
              <img className="mt-16 w-8 h-8 mr-5 md:mt-8" src={link.url} alt={link.name} />
              </Link>
            ))
           }
          </div>
        </div>
        <div className="mt-[1.75rem] ml-4 flex flex-col md:mx-16 md:mt-[5.5rem] ">
          <h5 className="font-semibold text-xl text-[#263238] font-popins"> Nosotros </h5>
          {
            //Falta poner una key
            sectionLink.map((link) => (
              <Link
                href={link.link}
                className="font-medium text-base text-[#455A64] mt-4 font-Montserrat">
                {link.name}
              </Link>
            ))
          }
        </div>
        <div className="mt-[1.75rem] ml-4 md:mt-[5.5rem] md:mr-10 md:ml-0 ">
          <h5 className="font-semibold text-xl text-[#263238] font-popins">Contacto </h5>
          <div className="flex items-center mt-4">
            <img className="inline-block" src="/icon-phone.svg" alt="icon-phone"/>
            <p className="ml-[0.75rem] font-medium text-base text-[#455A64] font-Montserrat"> (MEX) +52 1564 2789</p>
          </div>
          <div className="flex items-center mt-4">
           <img className="inline-block"src="/icon-email.svg"alt="icon-phone" />
            <p className="ml-[0.75rem] font-medium text-base text-[#455A64] font-Montserrat"> info@foodie.com</p>
          </div>
        </div>
        <div className="mt-[1.8rem] ml-4 md:mt-[5.5rem] md:mr-20">
          <h5 className="font-semibold text-xl text-[#263238] font-popins">Servicio</h5>
          <p className="font-medium text-base text-[#455A64] mt-4 font-Montserrat"> Términos y condiciones{" "}</p>
          <p className="font-medium text-base text-[#455A64] mt-4 font-Montserrat"> Aviso de privacidad</p>
        </div>
        <div className="flex flex-col mt-8 md:mt-[5.5rem] ">
          <h5 className="font-semibold text-xl text-[#263238] mx-auto font-popins">¡Únete a Foodie</h5>
          <Link href={"/loggin"}>
          <button className="mt-4 w-[18.7rem] h-12 text-lg bg-button-color text-white rounded-full mx-auto font-Montserrat"> ¡Regístrate! </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 mx-5 text-center md:mt-20">
        <p className="font-medium text-base text-[#455A64] text-center font-popins"> © 2023 Copyright. Todos los derechos reservados por Foodie.</p>
      </div>
    </footer>
  );
};

export { Footer };
