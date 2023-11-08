"use client";
import React, { useState, useEffect } from "react";
import imgPlatano from "../../assets/img-platano.svg";
import Search from "../components/ComponentsSearch";
import Pagination from "../components/Pagination";
import { getPost } from "../api/post";
const SearchShoping = () => {
  const [data, setData] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [botanas, setBotanas] = useState();
  const [bebidas, setBebidas] = useState();
  const [frutas, setFrutas] = useState();
  const [carnes, setCarnes] = useState([]);
  const [especies, setEspecies] = useState([]);
  const [postres, setPostres] = useState([]);
  const lasIndex = currentPage * productsPerPage;
  const firsIndex = lasIndex - productsPerPage;

  const filterBotana = (info) => {
    const botanasArray = info.products.product.filter(
      (type) => type.category === "Botana"
    );

    return setBotanas(botanasArray);
  };
  const filterBebidas = (info) => {
    const bebidasArray = info.products.product.filter(
      (type) => type.category === "Bebidas"
    );
    return setBebidas(bebidasArray);
  };
  const filterFruta = (info) => {
    const frutasArray = info.products.product.filter(
      (type) => type.category === "Frutas y Verduras"
    );

    return setFrutas(frutasArray);
  };
  const filterCarnes = (info) => {
    const carnessArray = info.products.product.filter(
      (type) => type.category === "Carnes"
    );
    return setCarnes(carnessArray);
  };
  const filterEspecies = (info) => {
    const especiesArray = info.products.product.filter(
      (type) => type.category === "Especies"
    );
    return setEspecies(especiesArray);
  };
  const filterPostres = (info) => {
    const postressArray = info.products.product.filter(
      (type) => type.category === "Postres"
    );
    return setPostres(postressArray);
  };
  useEffect(() => {
    getPost()
      .then((data) => {
        setData(data);
        filterBotana(data);
        filterBebidas(data);
        filterCarnes(data);
        filterEspecies(data);
        filterFruta(data);
        filterPostres(data);

        // setProductsPerPage(data.products.product.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { products } = data;

  if (data.length === 0) {
    return <span>loading.....</span>;
  }
  const paginationSide = products.product.length;

  return (
    <>
      <div className="text-center mt-4 text-3xl">Catalogo de Productos</div>

      <section className="w-full mt-6">
        <p className="text-[#607D8B] font-Montserrat font-medium text-sm ml-3 block w-full mb-3">
          {paginationSide} de todos los{" "}
          <span className="font-Montserrat font-bold text-sm text-black">
            Productos
          </span>
        </p>
        <div className="flex flex-wrap w-full">
          {products.product
            .map((product) => (
              <Search
                key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                img={product.img}
              />
            ))
            .slice(firsIndex, lasIndex)}
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={paginationSide}
        />
      </section>

      <section className={`w-full mt-6 `}>
        <p className="text-[#607D8B] font-Montserrat font-medium text-sm ml-3 block w-full mb-3">
          {botanas.length} resultados de{" "}
          <span className="font-Montserrat font-bold text-sm text-black">
            Botanas
          </span>
        </p>
        <div className="flex flex-wrap w-full">
          {botanas.length === 0 ? (
            <>
              <h1 className="text-center">
                Actualmente no se encuentran productos
              </h1>
            </>
          ) : (
            botanas
              .map((product) => (
                <Search
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  img={product.img}
                />
              ))
              .slice(firsIndex, lasIndex)
          )}
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={botanas.length}
        />
      </section>
      <section className="w-full mt-6">
        <p className="text-[#607D8B] font-Montserrat font-medium text-sm ml-3 block w-full mb-3">
          {bebidas.length} resultados de{" "}
          <span className="font-Montserrat font-bold text-sm text-black">
            Bebidas
          </span>
        </p>
        <div className="flex flex-wrap w-full">
          {bebidas.length === 0 ? (
            <>
              <h1 className="text-center">
                Actualmente no se encuentran productos
              </h1>
            </>
          ) : (
            bebidas
              .map((product) => (
                <Search
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  img={product.img}
                />
              ))
              .slice(firsIndex, lasIndex)
          )}
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={bebidas.length}
        />
      </section>
      <section className="w-full mt-6">
        <p className="text-[#607D8B] font-Montserrat font-medium text-sm ml-3 block w-full mb-3">
          {frutas.length} resultados de{" "}
          <span className="font-Montserrat font-bold text-sm text-black">
            Frutas y Verduras
          </span>
        </p>
        <div className="flex flex-wrap w-full">
          {frutas.length === 0 ? (
            <>
              <h1 className="text-center">
                Actualmente no se encuentran productos
              </h1>
            </>
          ) : (
            frutas
              .map((product) => (
                <Search
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  img={product.img}
                />
              ))
              .slice(firsIndex, lasIndex)
          )}
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={frutas.length}
        />
      </section>
      <section className="w-full mt-6">
        <p className="text-[#607D8B] font-Montserrat font-medium text-sm ml-3 block w-full mb-3">
          {carnes.length} resultados de{" "}
          <span className="font-Montserrat font-bold text-sm text-black">
            Carnes
          </span>
        </p>
        <div className="flex flex-wrap w-full">
          {carnes.length === 0 ? (
            <>
              <h1 className="text-center">
                Actualmente no se encuentran productos
              </h1>
            </>
          ) : (
            carnes
              .map((product) => (
                <Search
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  img={product.img}
                />
              ))
              .slice(firsIndex, lasIndex)
          )}
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={carnes.length}
        />
      </section>
      <section className="w-full mt-6">
        <p className="text-[#607D8B] font-Montserrat font-medium text-sm ml-3 block w-full mb-3">
          {especies.length} resultados de{" "}
          <span className="font-Montserrat font-bold text-sm text-black">
            Especies
          </span>
        </p>
        <div className="flex flex-wrap w-full">
          {especies.length === 0 ? (
            <>
              <h1 className="text-center">
                Actualmente no se encuentran productos
              </h1>
            </>
          ) : (
            especies
              .map((product) => (
                <Search
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  img={product.img}
                />
              ))
              .slice(firsIndex, lasIndex)
          )}
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={especies.length}
        />
      </section>
      <section className="w-full mt-6">
        <p className="text-[#607D8B] font-Montserrat font-medium text-sm ml-3 block w-full mb-3">
          {postres.length} resultados de{" "}
          <span className="font-Montserrat font-bold text-sm text-black">
            Postres
          </span>
        </p>
        <div className="flex flex-wrap w-full">
          {postres.length === 0 ? (
            <>
              <h1 className="text-center">
                Actualmente no se encuentran productos
              </h1>
            </>
          ) : (
            postres
              .map((product) => (
                <Search
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  img={product.img}
                />
              ))
              .slice(firsIndex, lasIndex)
          )}
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={postres.length}
        />
      </section>
    </>
  );
};

export default SearchShoping;
