"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getUser, updateAccount } from "../api/signUp";
import { useRouter } from "next/navigation";
import { useUserContext } from "../contexts/userContext";

const newSeller = () => {
  const [values, setValues] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [isEmpty, setIsEmpty] = useState(false);
  const [info, setInfo] = useState([]);
  const [id, setId] = useState();
  const [file, setFile] = useState();
  const router = useRouter();
  const { setLoged, setUser } = useUserContext();
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
    setId(id);

    getUser(id)
      .then((data) => {
        setInfo(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (info.length === 0) {
    return <span>loading.....</span>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(values).length === 0) {
      return setIsEmpty(true);
    }
    const data = new FormData();
    const phone = parseInt(values.phoneNumber);
    data.append("imgSeller",file)
    data.append("name", values.name);
    data.append("phoneNumber", phone);
    data.append("description", values.description);
    data.append("email", values.email);
    data.append("rfc", values.rfc);
    data.append("address", values.address);
    data.append("role", "seller");
  
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
      const newSeller = await updateAccount(id, data);
      console.log(id, data);
      setLoged(true);
      setUser("seller");
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
          <form enctype="multipart/form-data" method="patch">
            <div className="border-2 w-72 h-48">
              <label htmlFor="file-upload">
                {file ? (
                  <img
                    className="h-32 w-32 mx-auto mt-6"
                    src={URL.createObjectURL(file)}
                    alt="img-person"
                  />
                ) : (
                  <Image
                    className="mx-auto my-[3rem]"
                    src={"/Vector.svg"}
                    width={100}
                    height={95}
                    alt="upload"
                  />
                )}
              </label>
              <input
                id="file-upload"
                type="file"
                label="Image"
                name="imgSeller"
                accept=".jpeg,.png,.jpg"
                className="hidden"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </div>
          </form>

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
              <small className="text-xs hidden md:flex">
                10 digitos sin número lada
              </small>
            </div>
            <small className="text-xs md:hidden">
              10 digitos sin número lada
            </small>
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
                placeholder={`${info.dataJson.data.users.email}`}
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
              <small className="text-xs hidden md:flex">
                Agregar sus 13 digitos de RFC
              </small>
            </div>
            <small className="text-xs md:hidden">
              Agregar sus 13 digitos de RFC
            </small>
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
