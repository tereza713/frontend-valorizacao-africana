"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import SkeletonCards from "./skeletonCards";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ['latin'], weight: ['400'] }) // configurando a fonte Raleway


interface ReligionsProps{ // tipando
    id: string;
    nome:string;
    origem: string;
    descricao: string;
    preconceitosComuns: string;
    esclarecimento: string;
    }

export default function Religions(){
    const [religions, setReligions] = useState<ReligionsProps[]>([]); // criando um array vazio e usando o usestate para atualizar com as informações da API que vão chegar
    const [loading, setLoading] = useState<boolean>(true); // cria um estado de carregamento que vai ser atualizadp quando for false 

    useEffect(()=>{
       async function fetchReligions(){
        try {
            const response = await fetch(
                "https://valorizacao-africana-no-brasil.onrender.com/religioes" // api e rota
            );
            if (!response.ok) {
          throw new Error("Falha ao consumir a api");
        }
            const data = await response.json();
            setReligions(data); // atualiza o array antes vazio com o data, que é a resposta em json. Ou seja, os dados retornados pela api
        } catch (error){
                console.log("Erro ao tentar fazer requisição ou setar estado do componente", error);
        } finally { // sempre executado
            setLoading(false); //atualiza o carregamento para false, mostrando o erro ou os dados
      }
    }
    fetchReligions()
    }, []);

  if (loading) {
    return <SkeletonCards></SkeletonCards> //animação para carregamento
    }

    return (
    <section id="religions" className="flex flex-col items-center text-center p-6 bg-white rounded-lg max-w-3xl mx-auto my-10 scroll-mt-20">
        <h2 className={`${raleway.className} text-2xl font-bold text-orange-800 mb-4`}>Religiões</h2>
        <Image
            src="/img/religion.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="rounded-lg"
        />
        <ul className="flex flex-wrap gap-6 justify-center p-4"> {/*cards que retornam de forma organizada o que estava armazenado no array*/}
            {religions.map((religion)=>(
                <li key={religion.id} className="bg-white p-6 w-64 rounded-xl shadow-md border border-neutral-200 text-neutral-800 hover:shadow-lg transition-shadow duration-300">
                    <p className={`${raleway.className}text-lg text-orange-700 mb-3`}>{religion.nome}</p>
                    <p className="space-y-2 text-sm text-neutral-600 mb-3">Origem: {religion.origem}</p>
                    <p className="space-y-2 text-sm text-neutral-600 mb-3">Descrição: {religion.descricao}</p>
                    <p className="space-y-2 text-sm text-neutral-600 mb-3">Preconceitos comuns: {religion.preconceitosComuns}</p>
                    <p className="space-y-2 text-sm text-neutral-600 mb-3">Esclarecimentos: {religion.esclarecimento}</p>
                </li>
            ))}
        </ul>
    </section>
    );
}