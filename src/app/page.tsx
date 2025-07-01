import Personalities from "@/components/personalitiesSection";
import Religions from "@/components/religionsSection";
import Knowledge from "@/components/knowledgeSection";
import Info from "@/components/infoSection";
import Header from "@/components/header";


export default function Home() {
  return(
    <>
      <Header>
        <ul className="flex flex-col items-center gap-2 text-lg text-neutral-100 sm:text-sm sm:p-4 sm:flex-row">
          <li>
            <a href="#sobre" className="transition hover:text-neutral-400 duration-300 ease-in-out">Sobre</a>
          </li>
          <li>
            <a href="#personalidades" className="transition hover:text-neutral-400 duration-300 ease-in-out">Personalidades</a>
          </li>
          <li>
            <a href="#religioes" className="transition hover:text-neutral-400 duration-300 ease-in-out">Religiões</a>
          </li>
          <li>
            <a href="#saberes" className="transition hover:text-neutral-400 duration-300 ease-in-out">Saberes</a>
          </li>
          </ul>
      </Header>

      <main className="scroll-smooth">
        <section className="bg-[url('/img/capa.png')] bg-cover bg-center h-96 w-full"></section>
        <Info></Info>
        <Personalities></Personalities>
        <Religions></Religions>
        <Knowledge></Knowledge>
      </main>
    </>
  );
}
