import Personalities from "@/components/personalitiesSection";
import Religions from "@/components/religionsSection";
import Knowledge from "@/components/knowledgeSection";
import Info from "@/components/infoSection";
import Header from "@/components/header";


export default function LandingPage() {
  return(
    <>
      <Header> {/*cria os elementos para a header desta página*/}
        <ul className="flex flex-col items-center gap-2 text-lg text-neutral-100 sm:text-sm sm:p-4 sm:flex-row">
          <li>
            <a href="#about" className="transition hover:text-neutral-400 duration-300 ease-in-out">Sobre</a>
          </li>
          <li>
            <a href="#personalities" className="transition hover:text-neutral-400 duration-300 ease-in-out">Personalidades</a>
          </li>
          <li>
            <a href="#religions" className="transition hover:text-neutral-400 duration-300 ease-in-out">Religiões</a>
          </li>
          <li>
            <a href="#knowledge" className="transition hover:text-neutral-400 duration-300 ease-in-out">Saberes</a>
          </li>
          </ul>
      </Header>

      <main className="scroll-smooth">
        <div className="bg-[url('/img/capa.png')] bg-cover bg-center h-96 w-full"></div> {/*capa*/}
        <Info></Info> {/*Retorna componente infoSection*/}
        <Personalities></Personalities> {/*Retorna componente personalitiesSection*/}
        <Religions></Religions> {/*Retorna componente religionsSection*/}
        <Knowledge></Knowledge> {/*Retorna componente knowledgeSection*/}
      </main>
    </>
  );
}
