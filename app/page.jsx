import Image from "next/image";
import SmallCardRender from "./components/SmallCardRender";
import CardLanding from "./components/CardLanding";


export default function Home() {
    return(
        <section>
        <div className="flex">
          <div className="flex-1 w-14">
            <h1 className="text-5xl	">Saborea la Excelencia</h1>
            <p className="text-lg">
              ¡Bienvenido a nuestro exclusivo rincón culinario! Descubre la
              plataforma de insumos gourmet que te llevará a un viaje de sabores
              excepcionales.
            </p>
          </div>
          <div>
            <button className="text-lg bg-button-color text-white w-80 h-12 rounded-full">Explorar opciones gourmet</button>
            <img src="icon-person.svg" alt="icon-person" />
            <p className="text-lg">¡Únete al mundo Culinario!</p>
          </div>
        </div>
        <div>
          <img src="/img-principal.svg" alt="icon-principal" />
        </div>
        <section>
          <SmallCardRender title={'Top Gourmet'} />
          <SmallCardRender title={'¡Lo Nuevo!'} />
        </section>
        <section className="my-5">
          <div className="text-center flex-col">
            <h2 className="font-semibold text-4xl">Déjate llevar por una experiencia culinaria única</h2>
            <p className="w-1/3 mx-auto py-5">Encuentra los ingredientes perfectos para tus creaciones culinarias. Conéctate con los mejores proveedores y disfruta de productos frescos y de alta calidad.</p>
            <div className="flex gap-9">
              <CardLanding 
                title={'¿Listo para desatar tu creatividad gastronómica?'} 
                paragraph={'Únete a la experiencia inigualable de Saborea la Excelencia.'} 
                button={'Únete al Mundo culinario'} 
                bgColor={`bg-[#f6be2c]`} 
                imgUrl={'/culinary-world.svg'} 
                buttonColor={'bg-button-color'} 
                textColor={'black'} 
                textButtonColor={'white'} 
              />
              <CardLanding 
                title={'Aquí encontrarás todo lo que necesitas'} 
                paragraph={'Desde exquisitas especias hasta selectos productos locales.'} 
                button={'Explorar opciones gourmet'} 
                bgColor={'bg-button-color'} 
                imgUrl={'/gourmet-options.svg'} 
                buttonColor={`bg-[#f6be2c]`} 
                textColor={'white'} 
                textButtonColor={'black'} 
              />
            </div>
          </div>
        </section>
      </section>
    )   
}
