export default function Home() {
  return (
    <section className="md:flex-wrap">
      <div>
        <div>
          <h1 className="mt-[2.5rem] text-[1.9rem] mx-8  font-popins font-semibold  text-[#37474F]
           md:mt-[10rem] md:ml-[3.5rem] md:h-14 md:w-[39rem] md:text-5xl">
            Saborea la Excelencia
          </h1>
          <p className="mt-4 text-base mx-8 p-2 text-center font-Montserrat font-medium text-[#37474F] 
          md:text-[1.2rem] md:ml-[3rem] md:w-[36rem] md:pr-8 md:mt-5 md:text-left">
            ¡Bienvenido a nuestro exclusivo rincón culinario! Descubre la
            plataforma de insumos gourmet que te llevará a un viaje de sabores
            excepcionales.
          </p>
        </div>
        <div className="lg:flex">
          <button className="mt-8 w-80 h-12 mx-8 text-lg bg-button-color rounded-full text-white font-Montserrat 
           md:mt-20 md:ml-16">
            Explorar opciones gourmet
          </button>
          <div className="flex flex-col-reverse md:flex-row md:h-40">
            <div className="flex items-center mt-4 mx-8 md:mx-0 md:mt-12">
              <span className="inline-block border border-#455A64 rounded-full  h-[3rem] w-[3rem]">
                <img
                  className="ml-2 mt-2"
                  src="icon-person.svg"
                  alt="icon-person"
                />
              </span>
              <p className="font-Montserrat ml-[1rem] font-bold text-[1rem] text-[#455A64]
              md:w-[16rem]">
                ¡Únete al mundo Culinario!
              </p>
            </div>
            <div className="relative ">
              <img
                className="md:relative md:w-[30rem] md:h-[34rem] md:bottom-[20rem] md:left-24"
                src="/img-principal.svg"
                alt="icon-principal"
              />
              <div className="absolute bottom-20 left-[7.5rem] md:bottom-[3.5rem] md:left-[15.5rem]">
                <img className="" src="/logo.svg" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
