import Image from "next/image";
import TopGourmet from "./components/TopGourmet";


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
          <TopGourmet />
        </section>
      </section>
    )   
}
