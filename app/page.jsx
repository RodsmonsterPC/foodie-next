import CardLanding from "./components/CardLanding";
import SmallCardRender from "./components/SmallCardRender";

export default function Home() {
  return (
    <section className="md:flex-wrap">
      <div>
        <div>
          <h1
            className="mt-[2.5rem] text-[1.9rem] mx-8  font-popins font-semibold  text-[#37474F]
           md:mt-[10rem] md:ml-[3.5rem] md:h-14 md:w-[39rem] md:text-5xl"
          >
            Saborea la Excelencia
          </h1>
          <p
            className="mt-4 text-base mx-8 p-2 text-center font-Montserrat font-medium text-[#37474F] 
          md:text-[1.2rem] md:ml-[3rem] md:w-[36rem] md:pr-8 md:mt-5 md:text-left"
          >
            ¡Bienvenido a nuestro exclusivo rincón culinario! Descubre la
            plataforma de insumos gourmet que te llevará a un viaje de sabores
            excepcionales.
          </p>
        </div>
        <div className="lg:flex">
          <button
            className="mt-8 w-80 h-12 mx-8 text-lg bg-button-color rounded-full text-white font-Montserrat 
           md:mt-20 md:ml-16"
          >
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
              <p
                className="font-Montserrat ml-[1rem] font-bold text-[1rem] text-[#455A64]
              md:w-[16rem]"
              >
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
      <section className=" mx-5 md:mx-10 my-36">
        <div className="text-center">
          <h2 className="font-semibold text-4xl">Una irresistible variedad de productos</h2>
          <p className="md:w-1/3 mx-auto py-5"> Conecta con los mejores proveedores, elige los ingredientes más frescos y de alta calidad para tus creaciones culinarias.</p>
        </div>
        <SmallCardRender title={'Top Gourmet'} />
      </section>
      <section className="my-5 mx-5 md:mx-10">
        <div className="text-center">
          <h2 className="font-semibold text-4xl">Déjate llevar por una experiencia culinaria única</h2>
          <p className="md:w-1/3 mx-auto py-5">Encuentra los ingredientes perfectos para tus creaciones culinarias. Conéctate con los mejores proveedores y disfruta de productos frescos y de alta calidad.</p>
        </div>
        <div className="md:flex gap-10">
          <CardLanding
            title={'¿Listo para desatar tu creatividad gastronómica?'}
            paragraph={'Únete a la experiencia inigualable de Saborea la Excelencia.'}
            button={'Únete al Mundo culinario'}
            divExtraStyles={`bg-[#f6be2c] text-black`}
            imgUrl={'/culinary-world.svg'}
            buttonExtraStyles={'text-white bg-button-color'}
          />
          <CardLanding
            title={'Aquí encontrarás todo lo que necesitas'}
            paragraph={'Desde exquisitas especias hasta selectos productos locales.'}
            button={'Explorar opciones gourmet'}
            divExtraStyles={'bg-button-color text-white'}
            imgUrl={'/gourmet-options.svg'}
            buttonExtraStyles={`text-black bg-[#f6be2c]`}
          />
        </div>
      </section>
    </section>
  );
}
