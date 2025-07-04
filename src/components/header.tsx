import React from "react"

interface HeaderProps{
children: React.ReactNode; // devido a variação de opções do que pode ter na header
}

export default function Header({children}:HeaderProps){
return(
 <header className="flex items-center justify-center h-46 bg-amber-950 sm:h-23 sm:justify-end">
    {children}
 </header>
)
}