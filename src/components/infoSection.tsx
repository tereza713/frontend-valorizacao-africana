"use client"
import React, { useEffect, useState } from "react";
import Skeleton from "./skeleton";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ['latin'], weight: ['400'] }) // configurando a fonte Raleway


export default function Info(){
    const [info, setInfo] = useState<string>(""); //cria um estado de texto vazio que vai ser atualizado quando a api retornar
    const [loading, setLoading] = useState<boolean>(true); // cria um estado de carregamento que vai ser atualizadp quando for false 

    useEffect(()=>{
        async function fetchInfo(){
            try {
            const response = await fetch(
                "https://valorizacao-africana-no-brasil.onrender.com" // api e rota
            );
            if (!response.ok) {
          throw new Error("Falha ao consumir a api");
        }
            const data = await response.text();
            setInfo(data);  // atualiza o array antes vazio com o data, que é a resposta em json. Ou seja, os dados retornados pela api
        } catch (error){
                console.log("Erro ao tentar fazer requisição ou setar estado do componente", error);
        } finally {
            setLoading(false); //atualiza o carregamento para false, mostrando o erro ou os dados
      }
    }

    fetchInfo();
    }, [])

    if (loading) {
        return <Skeleton></Skeleton> //animação para carregamento
        }
      
    return(
        <section id="about" className="flex flex-col items-center text-center p-6 bg-white rounded-lg max-w-3xl mx-auto my-10 scroll-mt-20"> {/*bloco que retorna de forma organizada o que estava armazenado no array*/}
            <h2 className={`${raleway.className} text-2xl font-bold text-orange-800 mb-4`}>Valorização Africana</h2>
            <p>{info}</p>
        </section>
    );
}