import Image from "next/image";

export default function Home() {
  return (
    <section className="flex">
      <div>
        <div>
          <h1 className=" text-5xl font-semibold	h-14 w-[39rem] mt-[9rem] ml-[3rem] text-[#37474F]">
            Saborea la Excelencia
          </h1>
          <p className="text-[1rem] mt-[1.2rem] font-medium ml-[3rem] w-[36rem] pr-8 text-[#37474F]">
            ¡Bienvenido a nuestro exclusivo rincón culinario! Descubre la
            plataforma de insumos gourmet que te llevará a un viaje de sabores
            excepcionales.
          </p>
        </div>
        <div className="flex">
          <button className="text-lg bg-button-color text-white w-80 h-12 rounded-full mt-[4rem] ml-[3rem]">
            Explorar opciones gourmet
          </button>
          <div className="mt-[4rem] ml-[1rem] flex items-center ">
            <span className="inline-block border border-#455A64 rounded-full h-[3rem] w-[3rem]">
              <img
                className="ml-2 mt-2"
                src="icon-person.svg"
                alt="icon-person"
              />
            </span>
            <p className="ml-[1rem] font-bold text-[1rem] text-[#455A64]">
              ¡Únete al mundo Culinario!
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-[38rem] h-[38rem] bottom-10 left-8">
        <img src="/img-principal.svg" alt="icon-principal" />
        <div className="absolute h-[2rem] w-[6rem] bottom-24 left-52">
          <img src="/logo.svg" alt="logo" />
        </div>
      </div>
    </section>
  );
}
