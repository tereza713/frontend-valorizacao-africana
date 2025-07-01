"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import SkeletonCards from "./skeletonCards";

interface PersonalitiesProps{ // tipando
    id: string;
    nome:string;
    biografia: string;
    importancia: string;
    }

export default function Personalities(){
    const [personalities, setPersonalities] = useState<PersonalitiesProps[]>([]); // criando um array vazio e usando o usestate para atualizar com as informações da API que vão chegar
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
       async function fetchPersonalities(){
        try {
            const response = await fetch(
                "https://valorizacao-africana-no-brasil.onrender.com/personalidades"
            );
            if (!response.ok) {
          throw new Error("Falha ao consumir a api");
        }
            const data = await response.json();
            setPersonalities(data);
        } catch (error){
                console.log("Erro ao tentar fazer requisição ou setar estado do componente", error);
        } finally {
            setLoading(false);
      }
    }

    fetchPersonalities()
}, []);

    if (loading) {
        return <SkeletonCards></SkeletonCards>
    }

    return (
    <section className="flex flex-col items-center text-center p-6 bg-white rounded-lg max-w-3xl mx-auto my-10">
        <h2 className="text-2xl font-bold text-orange-800 mb-4">Personalidades Negras</h2>
        <Image
            src="/img/personalities.png"
            alt="Marina Firmina, a primeira escritora negra do Brasil"
            width={500}
            height={500}
            className="rounded-lg"
        />
        <ul className="flex flex-wrap gap-6 justify-center p-4">
            {personalities.map((person)=>(
                <li key={person.id} className="bg-white p-6 w-64 rounded-xl shadow-md border border-neutral-200 text-neutral-800 hover:shadow-lg transition-shadow duration-300">
                    <p className="text-lg font-semibold text-orange-700 mb-3">Nome: {person.nome} </p>
                    <p className="space-y-2 text-sm text-neutral-600 mb-3">Biografia: {person.biografia}</p>
                    <p className="space-y-2 text-sm text-neutral-600 mb-3">Importancia: {person.importancia}</p>
                </li>
            ))}
        </ul>
        
    </section>
    );
}