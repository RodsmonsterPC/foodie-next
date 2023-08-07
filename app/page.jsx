import Image from "next/image";
export default function Home() {
  return (
    <section className="lg:flex-wrap">
      <div>
        <div>
          <h1 className="mt-[2.5rem] text-[1.9rem] mx-8  font-popins font-semibold  text-[#37474F] lg:mt-[9rem] lg:ml-[3rem] lg:h-14 lg:w-[39rem] lg:text-[3rem] ">
            Saborea la Excelencia
          </h1>
          <p className="mt-4 text-base mx-8 p-2 text-center font-Montserrat font-medium text-[#37474F] lg:text-[1.2rem] lg:ml-[3rem] lg:w-[36rem] lg:pr-8 lg:mt-5 lg:text-left">
            ¡Bienvenido a nuestro exclusivo rincón culinario! Descubre la
            plataforma de insumos gourmet que te llevará a un viaje de sabores
            excepcionales.
          </p>
        </div>
        <div className="lg:flex">
          <button className="mt-8 w-80 h-12 mx-8 bg-button-color rounded-full text-white font-Montserrat lg:text-lg lg:mt-[4rem] lg:ml-[3rem]">
            Explorar opciones gourmet
          </button>
          <div className="flex flex-col-reverse lg:flex-row lg:h-40">
          <div className="flex items-center mt-4 mx-8">
            <span className="inline-block border border-#455A64 rounded-full  h-[3rem] w-[3rem]">
              <img
                className="ml-2 mt-2"
                src="icon-person.svg"
                alt="icon-person"
              />
            </span>
            <p className="font-Montserrat ml-[1rem] font-bold text-[1rem] text-[#455A64]">
              ¡Únete al mundo Culinario!
            </p>
          </div>
          <div className="relative ">
            <img className="lg:relative lg:bottom-80 lg:h-[36rem]" src="/img-principal.svg" alt="icon-principal" />
            <div className="absolute bottom-20">
            <img className="" src="/logo.svg" alt="logo" />
            </div>
          </div>
        </div>
          </div>
      </div>
    </section>
  );
}
