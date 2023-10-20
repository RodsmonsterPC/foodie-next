"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import JoinButton from "./JoinButton";
import { useUserContext } from "../contexts/userContext";
import { getUser } from "../api/signUp";
import { useRouter } from "next/navigation";
const Navbar = ({ links }) => {
  const userToken = useUserContext();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);
  const [notLoged, setLoged] = useState(false);
  const [active, setActive] = useState(false);

  const handleRefresh = () => {
    router.reload();
  };

  const register = () => {
    router.push("/register");
  };

  const newProduct = () => {
    router.push("/newProduct");
  };

  const newSeller = () => {
    router.push("/seller");
  };

  const parseJwt = (token) => {
    var base64Url = token?.split(".")[1] || "";
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
    if (jsonPayload === "") {
      return;
    }
    return JSON.parse(jsonPayload);
  };

  useEffect(() => {
    let infoUser = localStorage.getItem("token");
    if (!infoUser) {
      return;
    }
    const { id } = parseJwt(infoUser);
    getUser(id)
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userToken.user]);

  // const { dataJson } = user;

  if (user.length === 0 && userToken.loged) {
    return <span>loading.....</span>;
  }

  const onDeleteProducts = (products) => {
    const results = userToken.allProducts.filter(
      (item) => item._id !== products._id
    );

    userToken.setTotal(userToken.total - products.price * products.quantity);
    userToken.setCountProducts(userToken.countProducts - products.quantity);
    userToken.setAllProducts(results);
  };

  const onClearCart = () => {
    userToken.setAllProducts([]);
    userToken.setTotal(0);
    userToken.setCountProducts(0);
  };

  return (
    <div>
      <nav className="bg-back-color flex justify-between text-slate-900 h-16 drop-shadow-md">
        <div className="flex justify-between my-3 pl-12">
          <Image
            className="cursor-pointer"
            src="/logo.svg"
            width={96.05}
            height={40}
            alt="logo image"
          />

          <div className="hidden md:flex md:justify-between text-base rounded-full bg-search-color h-9 text-center p-1 w-search-input ml-32">
            <Image
              className="ml-6"
              src="/search.svg"
              width={20}
              height={20}
              alt=""
            />
            <input
              type="text"
              placeholder="¡Encuentra lo que necesitas!"
              className="flex text-base bg-search-color text-center w-56"
            />
            <button className="text-sm text-white bg-button-color  rounded-full py-1 px-6 h-7">
              Buscar
            </button>
          </div>
        </div>

        <div className="relative" onClick={() => setActive(!active)}>
          <Image
            className="md:hidden mt-6 ml-6"
            src={"/shopping-car.svg"}
            width={20}
            height={20}
            alt="shopping car"
          />
          <div className="md:hidden flex rounded-full bg-button-color w-4 h-4 text-center absolute items-center justify-center bottom-8 left-9 ">
            <span className="text-xs text-white">
              {userToken.countProducts}
            </span>
          </div>
        </div>

        <div
          className={`md:hidden w-[16rem] bg-white absolute top-16 right-20 shadow-2xl rounded-md  ${
            active ? "" : "hidden"
          }`}
        >
          {userToken.allProducts.length ? (
            <>
              <div className="flex flex-col justify-between border-b-2 border-gray-200">
                {userToken.allProducts.map((products) => (
                  <>
                    <div
                      className="flex justify-between items-center "
                      key={products._id}
                    >
                      <span className="m-4 text-sm ">{products.quantity}</span>
                      <p className="text-xs w-[100px]">{products.name}</p>

                      <span className=" text-sm font-semibold ">
                        ${products.price}
                      </span>
                      <Image
                        className="m-3 "
                        width={15}
                        height={15}
                        src={"/icon-close.svg"}
                        alt="close icon"
                        onClick={() => onDeleteProducts(products)}
                      />
                    </div>
                  </>
                ))}
              </div>
              <div className="flex items-center justify-center pt-3 pb-3">
                <h3 className="text-sm font-semibold mr-3">Total:</h3>
                <span className="text-sm">${userToken.total}</span>
              </div>
                <Link href={"/shoping"} className="bg-gray-100 p-[.5rem] w-full inline-block text-center  text-button-color transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 hover:bg-green-500 hover:text-white duration-300">Pagar</Link>
              <button
                onClick={onClearCart}
                className="bg-button-color p-[.5rem] w-full rounded-b-lg text-white transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 hover:bg-white-500 hover:text-white duration-300"
              >
                Vaciar el carrito
              </button>
            </>
          ) : (
            <p className="ml-16 text-sm">El carrito esta vacio</p>
          )}
        </div>

        <div className="text-sm md:flex md:justify-between md:my-3 md:mr-3.5 md:pr-12 ">
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-40 z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-10 " : "top-[-490px]"
            }`}
          >
            {links.map((link) => (
              <li
                key={link.name}
                className={`ml-4 mt-8 mb-6 mr-6 md:my-0 text-link-color hover:text-button-color duration-500`}
              >
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
            {userToken.token ? (
              <>
                <li
                  className={`ml-4 mt-8 mb-6 mr-6 md:my-0 text-link-color hover:text-button-color duration-500`}
                >
                  <Link href="/profile">Perfil</Link>
                </li>
                <li
                  onClick={() => {
                    localStorage.removeItem("token");

                    setLoged(false);
                  }}
                  className={`ml-4 mt-8 mb-6 mr-6 md:my-0 text-link-color hover:text-button-color duration-500`}
                >
                  <Link href="/" onClick={handleRefresh}>
                    Cerrar sesión
                  </Link>
                </li>
              </>
            ) : (
              <li
                className={`ml-4 mt-8 mb-6 mr-6 md:my-0 text-link-color hover:text-button-color duration-500`}
              >
                <Link href="/loggin">Iniciar sesión</Link>
              </li>
            )}

            <div className="relative" onClick={() => setActive(!active)}>
              <Image
                className="hidden md:flex mr-6"
                src={"/shopping-car.svg"}
                width={20}
                height={20}
              />
              <div className="hidden md:flex rounded-full bg-button-color w-4 h-4 text-center items-center justify-center absolute bottom-3 left-3 ">
                <span className="text-xs text-white">
                  {userToken.countProducts}
                </span>
              </div>
            </div>

            <div
              className={`flex flex-col w-[16rem] bg-white absolute top-16 right-64 shadow-2xl rounded-md  ${
                active ? "" : "hidden"
              }`}
            >
              {userToken.allProducts.length ? (
                <>
                  <div className="flex flex-col justify-between border-b-2 border-gray-200">
                    {userToken.allProducts.map((products) => (
                      <>
                        <div
                          className="flex justify-between items-center "
                          key={products._id}
                        >
                          <span className="m-4 text-sm ">
                            {products.quantity}
                          </span>
                          <p className="text-xs w-[100px]">{products.name}</p>

                          <span className=" text-sm font-semibold ">
                            ${products.price}
                          </span>
                          <Image
                            className="m-3 "
                            width={15}
                            height={15}
                            src={"/icon-close.svg"}
                            alt="close icon"
                            onClick={() => onDeleteProducts(products)}
                          />
                        </div>
                      </>
                    ))}
                  </div>
                  <div className="flex items-center justify-center pt-3 pb-3">
                    <h3 className="text-sm font-semibold mr-3">Total:</h3>
                    <span className="text-sm">${userToken.total}</span>
                  </div>
                   <Link href={"/shoping"} className="bg-gray-100 p-[.5rem] w-full inline-block text-center  text-button-color transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 hover:bg-green-500 hover:text-white duration-300">Pagar</Link>
                  <button
                    onClick={onClearCart}
                    className="bg-button-color p-[.5rem] w-full rounded-b-lg text-white transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 hover:bg-white-500 hover:text-white duration-300"
                  >
                    Vaciar el carrito
                  </button>
                </>
              ) : (
                <p className="ml-16 text-sm">El carrito esta vacio</p>
              )}
            </div>

            {userToken.loged &&
            user.dataJson.data.users.role[0] === "seller" ? (
              <>
                <div className="hidden sm:flex">
                  <JoinButton name={"Crear producto"} onClick={newProduct} />
                </div>
              </>
            ) : userToken.loged &&
              user.dataJson.data.users.role[0] === "buyer" ? (
              <>
                <div
                  className={`hidden sm:flex ${
                    !notLoged && user.dataJson.data.users.role[0] === "seller"
                      ? "sm:hidden"
                      : null
                  }`}
                >
                  <JoinButton name={"¡Unete a Foodie!"} onClick={newSeller} />
                </div>
              </>
            ) : (
              <>
                <div
                  className={`hidden sm:flex ${
                    userToken.loged &&
                    user.dataJson.data.users.role[0] === "seller"
                      ? "sm:hidden"
                      : null
                  }`}
                >
                  <JoinButton name={"¡ Registrate ! "} onClick={register} />
                </div>
              </>
            )}

            {userToken.loged &&
            user.dataJson.data.users.role[0] === "seller" ? (
              <button
                onClick={newProduct}
                className="md:hidden flex text-button-color border border-button-color rounded-full w-72 h-9 py-2.5 hover:text-black duration-500 ml-9"
              >
                <Image
                  className="ml-16 mr-3"
                  src="/icon-person.svg"
                  width={20}
                  height={20}
                  alt="person"
                />
                Crear producto
              </button>
            ) : userToken.loged &&
              user.dataJson.data.users.role[0] === "buyer" ? (
              <button
                onClick={newSeller}
                className="md:hidden flex text-button-color border border-button-color rounded-full w-72 h-9 py-2.5 hover:text-black duration-500 ml-9"
              >
                <Image
                  className="ml-16 mr-3"
                  src="/icon-person.svg"
                  width={20}
                  height={20}
                  alt="person"
                />
                ¡Unete a Foodie!
              </button>
            ) : (
              <button
                onClick={register}
                className="md:hidden flex text-button-color border border-button-color rounded-full w-72 h-9 py-2.5 hover:text-black duration-500 ml-9"
              >
                <Image
                  className="ml-16 mr-3"
                  src="/icon-person.svg"
                  width={20}
                  height={20}
                  alt="person"
                />
                ¡ Registrate !
              </button>
            )}

            <div className="md:hidden flex justify-between text-base mt-6 rounded-full bg-search-color h-9 text-center p-1 w-72 ml-9">
              <Image
                className="ml-2"
                src="/search.svg"
                width={20}
                height={20}
                alt=""
              />
              <input
                type="text"
                placeholder="¡Encuentra lo que necesitas!"
                className="flex text-xs bg-search-color text-center w-56"
              />
              <button className="text-sm text-white bg-button-color rounded-full py-1 px-6 h-7">
                Ir
              </button>
            </div>
          </ul>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
          >
            <Image
              src="/icon-menu.svg"
              width={40}
              height={40}
              name={open ? "close" : "menu"}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
