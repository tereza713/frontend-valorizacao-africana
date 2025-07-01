"use client"
import React, { useEffect, useState } from "react";
import Skeleton from "./skeleton";
import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ['latin'], weight: ['400'] })


export default function Info(){
    const [info, setInfo] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        async function fetchInfo(){
            try {
            const response = await fetch(
                "https://valorizacao-africana-no-brasil.onrender.com"
            );
            if (!response.ok) {
          throw new Error("Falha ao consumir a api");
        }
            const data = await response.text();
            setInfo(data);
        } catch (error){
                console.log("Erro ao tentar fazer requisição ou setar estado do componente", error);
        } finally {
            setLoading(false);
      }
        }

    fetchInfo();
    }, [])

    if (loading) {
            return <Skeleton></Skeleton>
        }
      
    return(
        <section id="sobre" className="flex flex-col items-center text-center p-6 bg-white rounded-lg max-w-3xl mx-auto my-10 scroll-mt-20">
            <h2 className={`${raleway.className} text-2xl font-bold text-orange-800 mb-4`}>Valorização Africana</h2>
            <p>{info}</p>
        </section>
    );
}