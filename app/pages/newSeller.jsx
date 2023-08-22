"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
const newSeller = () => {
  const [values, setValues] = useState();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name: values.name,
      phoneNumber: values.phoneNumber,
      description: values.description,
      email: values.email,
      rfc: values.rfc,
      address: values.address,
    };

    const { status, dataJson } = await updateAccount();

    if (status === 200) {
      router.push("/");
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
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
          <form className="flex flex-col justify-start md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-10 ">
            <div>
              <p className="text-2xl">Nombre:</p>
              <input
                className="bg-back-form rounded-md text-left font-Sub-title mb-2 w-64 h-10 "
                type="text"
                onChange={handleChange}
                name="name"
              />
            </div>
            <div>
              <p className="text-2xl">Número:</p>
              <input
                className="bg-back-form rounded-md text-left font-Sub-title mb-2 w-64 h-10 "
                type="text"
                onChange={handleChange}
                name="phoneNumber"
              />
            </div>
            <div>
              <p className="text-2xl">Descripción:</p>
              <input
                className="bg-back-form rounded-md text-left font-Sub-title mb-2 w-64 h-10 "
                type="text"
                onChange={handleChange}
                name="description"
              />
            </div>
            <div>
              <p className="text-2xl">Correo:</p>
              <input
                className="bg-back-form rounded-md text-left font-Sub-title mb-2 w-64 h-10 "
                type="text"
                onChange={handleChange}
                name="email"
              />
            </div>
            <div>
              <p className="text-2xl">RFC:</p>
              <input
                className="bg-back-form rounded-md text-left font-Sub-title mb-2 w-64 h-10"
                type="text"
                onChange={handleChange}
                name="rfc"
              />
            </div>
            <div>
              <p className="text-2xl">Dirección:</p>
              <input
                className="bg-back-form rounded-md text-left font-Sub-title mb-2 w-64 h-10"
                type="text"
                onChange={handleChange}
                name="address"
              />
            </div>
          </form>
          <div className="md:col-span-2 md:ml-96">
            <button
              type="submit"
              className="mt-8 mb-5 bg-button-color text-white w-[12.5rem] h-14 rounded-xl"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newSeller;
