"use client";
import React from "react";
import { useState } from "react";
import { loginAccount } from "../api/login";
import { createAccount } from "../api/signUp";
import Link from "next/link";
const Form = () => {
  const [values, setValues] = useState();
  const [error, setError] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await createAccount(values.email, values.contraseña);

    if (!result.success) setError("Error al iniciar Sesión");

    localStorage.setItem("token", result.data.token);
  };
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const dataForm = [
    {
      name: "email",
      placeholder: "Ingrese su correo",
    },
    {
      name: "contraseña",
      placeholder: "Contraseña",
    },
    {
      name: "confirmar contraseña",
      placeholder: "Confirmar contraseña",
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
            className="bg-back-form rounded-md text-left font-Sub-title mb-9 w-64 h-10 md:w-96"
            key={form.name}
            type="text"
            name={form.name}
            placeholder={form.placeholder}
            onChange={handleChange}
          />
        ))}
        <div className="ml-7 mt-14 mb-24 md:flex md:justify-center">
          <Link href="/loggin">
            <button
              type="submit"
              className="bg-button-color font-Sub-title text-white h-14 rounded-full w-72 "
            >
              ¡Registrate!
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
