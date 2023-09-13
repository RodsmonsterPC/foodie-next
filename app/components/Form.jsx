"use client";
import React from "react";
import { useState } from "react";
import { loginAccount } from "../api/login";
import { createAccount } from "../api/signUp";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Form = () => {
  const [values, setValues] = useState({});
  const [error, setError] = useState();
  const [isEmpty, setIsEmpty] = useState();

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(values).length === 0) {
      return setIsEmpty(true);
    }
    const { status, dataJson } = await createAccount(
      values.email,
      values.contraseña
    );

    if (status === 200) {
      router.push("/loggin");
      //setteas el token a local storage
      // redirecciones a tal pagina
    } else {
      if (!dataJson.success)
        setError("Error al registrarse, revise sus datos porfavor");
      setIsEmpty(false);
    }
  };
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const dataForm = [
    {
      name: "email",
      placeholder: "Ingrese su correo",
      type: "text",
    },
    {
      name: "contraseña",
      placeholder: "Contraseña",
      type: "password",
    },
    {
      name: "confirmar contraseña",
      placeholder: "Confirmar contraseña",
      type: "password",
    },
  ];

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-72 items-center mt-11 mx-auto"
      >
        {dataForm.map((form) => (
          <input
            className={`bg-back-form rounded-md text-left font-Sub-title mb-9 w-64 h-10 md:w-96 ${
              isEmpty ? "border-2 border-red-600" : ""
            }`}
            key={form.name}
            type={form.type}
            name={form.name}
            placeholder={form.placeholder}
            onChange={handleChange}
          />
        ))}
        {isEmpty ? (
          <p className="text-red-500 flex justify-center mb-3">
            Los campos no pueden estar vacios
          </p>
        ) : (
          ""
        )}
        {error && (
          <p className="text-red-500 flex justify-center mb-3">{error}</p>
        )}
        <div className="ml-7 mt-14 mb-24 md:flex md:justify-center">
          <button
            type="submit"
            className="bg-button-color font-Sub-title text-white h-14 rounded-full w-72 "
          >
            ¡Registrate!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
