import React from "react";
import Image from "next/image";
import imgLoggin from "../assets/img-loggin.svg";
const Loggin = () => {
  return (
    <section className="h-screen w-screen md:flex ">
      <div className="mt-16 md:ml-12 md:mt-8  md:mr-20">
        <Image 
        src={imgLoggin} alt="background-img" 
        className="hidden"
        // className="object-fill z-0 opacity-10 
        // md:opacity-100 md:w-[53rem] md:h-full md:rounded-md md:drop-shadow-lg"
        />
      </div>
      <div className="mt-[3.5rem] 
      md:border md:border-black w-[30rem]   md:mt-8 md:rounded-lg">
        <img className="w-[17.5rem] h-[7.5rem] m-auto " src="/logo.svg" alt="logo" />
        <div className="mt-[1.8rem]">
          <input className="w-[17rem] h-[2.5rem] border-black bg-[#8d9092] placeholder:text-black mx-12" type="email" placeholder="Email" />
          <input className="w-[17rem] h-[2.5rem] border-black bg-[#8d9092] placeholder:text-black mt-12 mx-12" type="password" placeholder="Password" />
          <button className="mt-[2.5rem] bg-[#33A833] text-white w-[18.7rem] h-12 rounded-full mx-12" >Iniciar sesión</button>
        </div>
        <div className="border-t-2 border-black mt-12 ml-0 ">
          <p className="mt-4 text-center">Or</p>
          <button className="mt-[2.5rem] bg-[#33A833] text-white w-[18.7rem] h-12 rounded-full mx-12">Login con Google</button>
          <div className="flex mt-12 justify-center">
            <p>¿No Tienes Cuenta?</p>
            <a className="text-blue-600 font-bold" href="#">Click aquí</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Loggin };
