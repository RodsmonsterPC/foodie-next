"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { loginAccount } from "../api/login";
const Loggin = () => {
  const [values, setValues] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await loginAccount(values.email, values.password);

    if (!result.success) setError("Error al iniciar Sesión");
    console.log(result);
    localStorage.setItem("token", result.data.token);
  };
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  return (
    <section className="relative md:flex md:flex-row">
      <div
        className="bg-no-repeat bg-cover bg-center h-screen w-screen opacity-20 absolute
        md:opacity-100 md:static md:bg-auto   md:mt-8 md:w-[850px] md:h-[530px]  md:mr-12"
        style={{ backgroundImage: `url('/img-loggin.png')` }}
      ></div>
      <div
        className="mt-6 absolute md:static md:border-black md:border border-black 
      md:rounded-md md:mr-12 md:mt-8 md:w-[450px]"
      >
        <form onSubmit={handleSubmit}>
          <img
            className="w-[17.5rem] h-[7.5rem] ml-12 md:w-[21.7rem]  md:h-[5.5rem]"
            src="/logo.svg"
            alt="logo"
          />
          <div className="mt-4 ml-5">
            <input
              className="bg-back-form text-left font-Sub-title mb-8 w-[21rem] h-12 md:ml-[1.5rem] "
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              className="bg-back-form text-left font-Sub-title mb-8 w-[21rem] h-12 md:ml-[1.5rem]"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <Link href={"/"}>
              <button
                type="submit"
                className=" bg-[#33A833] text-white w-[18.7rem] h-12 rounded-full mx-8 mb-[3.7rem] md:mb-[2.5rem]"
              >
                Iniciar sesión
              </button>
            </Link>
          </div>
        </form>
        <div className="border-t-2 border-[#D9D9D9] ml-0">
          <p className="mt-4 text-center">Or</p>
          <button className="mt-[2.5rem] bg-[#33A833] text-white w-[18.7rem] h-12 rounded-full mx-12 md:mt-4">
            Login con Google
          </button>
        </div>
        <div className="flex mt-12 justify-center md:mt-6">
          <p>¿No Tienes Cuenta?</p>
          <Link href={"/register"} className="text-blue-600 font-bold ml-2">
            Click aquí
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Loggin;
