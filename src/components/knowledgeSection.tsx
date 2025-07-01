"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import SkeletonCards from "./skeletonCards";
import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ['latin'], weight: ['400'] })

interface KnowledgeProps{ // tipando
    id: string;
    civilizacao:string;
    descricao: string;
    contribuições: string;
    }

export default function Knowledge(){
    const [knowledge, setKnowledge] = useState<KnowledgeProps[]>([]); // criando um array vazio e usando o usestate para atualizar com as informações da API que vão chegar
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
       async function fetchKnowledge(){
        try {
            const response = await fetch(
                "https://valorizacao-africana-no-brasil.onrender.com/saberes"
            );
            if (!response.ok) {
          throw new Error("Falha ao consumir a api");
        }
            const data = await response.json();
            setKnowledge(data);
        } catch (error){
                console.log("Erro ao tentar fazer requisição ou setar estado do componente", error);
        } finally {
            setLoading(false);
      }
    }

    fetchKnowledge()
}, []);

    if (loading) {
        return <SkeletonCards></SkeletonCards>
    }

    return (
    <section id="saberes" className="flex flex-col items-center text-center p-6 rounded-lg max-w-3xl mx-auto my-10 scroll-mt-20">
        <h2 className={`${raleway.className} text-2xl font-bold text-orange-800 mb-4`}>Saberes africanos</h2>
        <Image
            src="/img/knowledge.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="rounded-lg"
        />
        <ul className="flex flex-wrap gap-6 justify-center p-4">
            {knowledge.map((know)=>(
                <li key={know.id} className="bg-white p-6 w-64 rounded-xl shadow-md border border-neutral-200 text-neutral-800 hover:shadow-lg transition-shadow duration-300">
                    <p className={`${raleway.className}text-lg text-orange-700 mb-3`}> {know.civilizacao}</p>
                    <p className="space-y-2 text-sm text-neutral-600 mb-3">Descrição: {know.descricao}</p>
                    <p className="space-y-2 text-sm text-neutral-600 mb-3">Contribuições: {know.contribuições}</p>
                </li>
            ))}
        </ul>
    </section>
    );
}