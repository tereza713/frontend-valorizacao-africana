import React from "react"
interface HeaderProps{
children: React.ReactNode;
}

export default function Header({children}:HeaderProps){
return(
 <header className="bg-amber-950 h-23 flex justify-end items-center">
    {children}
 </header>
)
}