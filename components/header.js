"use client";

import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";

function HeaderLinks() {
    return(
        <>
            <Link href="/" className="block md:inline text-2xl md:text-base mb-2 md:mb-0 hover:underline hover:text-red-500">Forside</Link>
            <Link href="/" className="block md:inline text-2xl md:text-base mb-2 md:mb-0 hover:underline hover:text-red-500">Medlemslogin</Link>
            <Link href="/kajak" className="block md:inline text-2xl md:text-base mb-2 md:mb-0 hover:underline hover:text-red-500">Kajak</Link>
            <Link href="/kontakt" className="block md:inline text-2xl md:text-base hover:underline mb-2 md:mb-0 hover:text-red-500">Kontakt</Link>
        </>
    )
}

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <header className="max-w-7xl mx-auto p-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"} className="flex items-center">
                    <Image src={"/Logo_alt.jpg"} alt="logo" width={"75"} height={"40"}/>
                    <h1 className="ms-2 md:text-2xl font-bold">Årøsund Bådelaug</h1>
                </Link>
                <nav className="space-x-6 hidden md:block">
                    <HeaderLinks />
                </nav>
                <nav className="space-x-6 block md:hidden">
                    <button className={"bg-red-500 text-white p-2 px-6 cursor-pointer"} onClick={toggleMenu}>{openMenu ? 'Luk' : 'Menu'}</button>
                </nav>
            </div>
            <div className={`mt-12 md:hidden ${openMenu ? "block" : "hidden"}`}>
                <HeaderLinks onClick={setOpenMenu(false)}/>
            </div>
        </header>
    )
}