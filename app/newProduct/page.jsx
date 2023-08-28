"use client";
import React, { useState } from "react";
import Image from "next/image";
import Dropdown from "../components/Dropdown";
import { Akaya_Telivigala } from "next/font/google";
const NewProduct = () => {
  const [selected, setSelected] = useState("");
  const [values, setValues] = useState();
  const [active, setActive] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: values.name,
      description: values.description,
      price: values.price,
      existence: values.existence,
      category: selected,
      active: active,
    };
    console.log(body);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="hidden md:flex md:justify-center">
          <h1 className="mt-3.5 mb-5 text-3xl">Nuevo Producto</h1>
        </div>

        <div className="md:w-product-w md:h-product-h md:border-2 md:mx-auto md:rounded-xl md:flex md:flex-row-reverse md:justify-around">
          <div className="flex flex-col items-center  md:mb-9 ">
            <h1 className="mt-9 mb-5 text-3xl md:hidden">Nuevo Producto</h1>
            <button className="border-2 w-64 h-40 rounded-md md:w-upload-w md:h-upload-h md:mt-11">
              <Image
                className="mx-auto my-auto"
                src={"/Vector.svg"}
                width={75}
                height={66}
              />
            </button>
            <p className="mt-5 text-sm font-Sub-title">
              Proporcionar imagen clara y concisa
            </p>
            <div className="md:flex  md:items-center md:mr-36 md:mt-14 md:z-10 hidden">
              <p className="mr-6 md:text-3xl">Tu categoria:</p>
              <Dropdown selected={selected} setSelected={setSelected} />
            </div>
            <p className="hidden md:flex mt-3 text-md">
              Asi es como posibles clientes pueden encontrar tu producto{" "}
            </p>
            <div className=" text-sm md:flex md:flex-col md:text-3xl md:mt-7 md:ml-96  md:z-0 hidden">
              <p className="mr-3">Activo:</p>
              <label
                for="check"
                className="bg-back-form relative w-20 h-10 rounded-lg"
              >
                <input
                  type="checkbox"
                  id="check"
                  className="sr-only peer"
                  name="active"
                  onChange={handleChange}
                  onClick={() => setActive(!active)}
                />
                <span className="w-2/5 h-4/5 bg-button-color absolute rounded-full left-1 top-1 peer:checked:bg-button-color-100/30 peer-checked:left-11 transition-all duration-500"></span>
              </label>
            </div>
          </div>
          <div className="flex flex-col text-sm md:text-3xl items-center mt-9 md:mt-5  md:mr-32">
            <div>
              <p>Nombre del producto:</p>
              <input
                className="bg-back-form rounded-md text-left font-Sub-title mb-9 w-64 h-10 md:w-description-w"
                type="text"
                name="name"
                onChange={handleChange}
              />
              <p className="md:mt-4">Descripción:</p>
              <input
                className="bg-back-form rounded-md text-left font-Sub-title mb-9 w-64 h-56 md:w-description-w md:h-description-h"
                type="text"
                name="description"
                onChange={handleChange}
              />
              <div className="grid gap-16 grid-cols-2">
                <div className="">
                  <p className="mt-14">Precio:</p>
                  <input
                    className="bg-back-form rounded-md text-left font-Sub-title mb-9 w-24 h-10 md:w-40"
                    type="text"
                    name="price"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <p className="mt-14">Existencias:</p>
                  <input
                    className="bg-back-form rounded-md text-left font-Sub-title mb-9 w-24 h-10 md:w-48"
                    type="text"
                    name="existence"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center z-10 md:hidden">
              <p className="mr-1">Tu categoria:</p>
              <Dropdown selected={selected} setSelected={setSelected} />
            </div>
            <div className="flex items-center mt-7 mr-28 z-0 md:hidden">
              <p className="mr-3">Activo:</p>
              <label
                for="check"
                className="bg-back-form relative w-20 h-10 rounded-lg"
              >
                <input
                  type="checkbox"
                  id="check"
                  className="sr-only peer"
                  name="active"
                  onChange={handleChange}
                  onClick={() => setActive(!active)}
                />
                <span className="w-2/5 h-4/5 bg-button-color absolute rounded-full left-1 top-1 peer:checked:bg-button-color-100/30 peer-checked:left-11 transition-all duration-500"></span>
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 mb-16 bg-button-color text-white w-52 h-16 rounded-xl z-0 md:hidden"
            >
              Guardar
            </button>
          </div>
        </div>
        <div className="hidden md:flex md:justify-end">
          <button
            type="submit"
            className="mt-8 mb-5 mr-11 bg-button-color text-white w-52 h-14 rounded-xl  "
          >
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewProduct;
