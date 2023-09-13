"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getUser, updateAccount } from "../api/signUp";
import { Shadows_Into_Light } from "next/font/google";
import { useRouter } from "next/navigation";
import { data } from "autoprefixer";

const newSeller = () => {
  const [values, setValues] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [isEmpty, setIsEmpty] = useState(false);
  const [user, setUser] = useState([]);
  const router = useRouter();

  const parseJwt = (token) => {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  };

  useEffect(() => {
    let user = localStorage.getItem("token");

    let { id } = parseJwt(user);

    getUser(id)
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (user.length === 0) {
    return <span>loading.....</span>;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(values).length === 0) {
      return setIsEmpty(true);
    }

    const body = {
      name: values.name,
      phoneNumber: values.phoneNumber,
      description: values.description,
      email: values.email,
      rfc: values.rfc,
      address: values.address,
      role: "seller",
    };

    if (
      values.name &&
      values.name !== "" &&
      values.phoneNumber &&
      values.phoneNumber !== "" &&
      values.description &&
      values.description !== "" &&
      values.email &&
      values.email !== "" &&
      values.rfc &&
      values.rfc !== "" &&
      values.address &&
      values.address !== ""
    ) {
      const newSeller = await updateAccount(token.id, body);

      router.push("/");
    } else {
      setError("Error al registrarse, llenar todos los campos");
      setIsEmpty(false);
    }
  };

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  return (
    <div>
      <h1 className="hidden md:flex md:justify-center md:w-product-w text-center md:text-4xl md:mt-12">
        Perfecto, ahora brinda la información a detalle de tu empresa
      </h1>
      <div className="flex flex-col items-center mt-1.5 md:grid md:grid-cols-2 md:justify-items-start">
        <h1 className="md:hidden w-seller-title md:w-product-w text-center text-3xl md:ml-24">
          Perfecto, ahora brinda la información a detalle de tu empresa
        </h1>
        <div className="flex flex-col items-center md:mb-52 md:ml-28 ">
          <button className="border-2 w-64 h-40 rounded-md mt-6 md:w-supload-w md:h-supload-h md:mt-10">
            <Image
              className="mx-auto my-auto"
              src={"/Vector.svg"}
              width={100}
              height={95}
              alt="upload"
            />
          </button>
          <p className="sm:hidden w-64 text-sm mt-6">
            Porfavor llenar todos los campos que se solicitan:
          </p>

          <p className="hidden md:flex text-sm md:mt-6 md:mr-14">
            Proporcionar imagen clara y concisa
          </p>
        </div>
        <div className="mt-6 md:justify-self-auto md:mt-16 md:mr-44 ">
          <p className="hidden md:flex text-sm md:mb-5">
            Porfavor llenar todos los campos que se solicitan:
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-start md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-10 "
          >
            <div>
              <p className="text-2xl">Nombre:</p>
              <input
                className={`bg-back-form rounded-md text-left font-Sub-title mb-2 w-64 h-10 ${
                  isEmpty ? "border-2 border-red-600" : ""
                }`}
                type="text"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="text-2xl">Número:</p>
              <input
                className={`bg-back-form rounded-md text-left font-Sub-title mb-2 w-64 h-10 ${
                  isEmpty ? "border-2 border-red-600" : ""
                }`}
                type="text"
                name="phoneNumber"
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="text-2xl">Descripción:</p>
              <input
                className={`bg-back-form rounded-md text-left font-Sub-title mb-2 w-64 h-10 ${
                  isEmpty ? "border-2 border-red-600" : ""
                }`}
                type="text"
                name="description"
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="text-2xl">Correo:</p>
              <input
                className={`bg-back-form rounded-md text-left font-Sub-title mb-2 w-64 h-10 ${
                  isEmpty ? "border-2 border-red-600" : ""
                }`}
                type="text"
                name="email"
                placeholder={`${user.dataJson.data.users.email}`}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="text-2xl">RFC:</p>
              <input
                className={`bg-back-form rounded-md text-left font-Sub-title mb-2 w-64 h-10 ${
                  isEmpty ? "border-2 border-red-600" : ""
                }`}
                type="text"
                name="rfc"
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="text-2xl">Dirección:</p>
              <input
                className={`bg-back-form rounded-md text-left font-Sub-title mb-2 w-64 h-10 ${
                  isEmpty ? "border-2 border-red-600" : ""
                }`}
                type="text"
                name="address"
                onChange={handleChange}
              />
            </div>
            {isEmpty ? (
              <p className="text-red-500 flex justify-center text-sm">
                Los campos no pueden estar vacios
              </p>
            ) : (
              ""
            )}
            {error && (
              <p className="text-red-500 flex justify-center text-xs md:text-sm">
                {error}
              </p>
            )}
            <div className="md:col-span-2 md:ml-[21.5rem]">
              <button
                type="submit"
                className="mt-8 mb-5 bg-button-color text-white w-52 h-14 rounded-xl"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default newSeller;
