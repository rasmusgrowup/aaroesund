"use client";

import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";
import ConventusLoginModal from "@/components/ConventusLoginModal";

function HeaderLinks({onNavigate, onLogin}) {
    return (
        <>
            <Link onClick={onNavigate} href="/"
                  className="block md:inline text-2xl md:text-base mb-2 md:mb-0 hover:underline hover:text-red-500">Forside</Link>
            {/* Login opens modal, not a route
            <button type="button" onClick={onLogin}
                    className="block md:inline text-2xl md:text-base mb-2 md:mb-0 hover:underline hover:text-red-500">Medlemslogin
            </button>
            */}
            <Link onClick={onNavigate} href="https://www.conventus.dk/medlemslogin/index.php?forening=3446"
                  target={"_blank"}
                  className="block md:inline text-2xl md:text-base mb-2 md:mb-0 hover:underline hover:text-red-500">Medlemslogin</Link>
            <Link onClick={onNavigate} href="/kajak"
                  className="block md:inline text-2xl md:text-base mb-2 md:mb-0 hover:underline hover:text-red-500">Kajak</Link>
            <Link onClick={onNavigate} href="/kontakt"
                  className="block md:inline text-2xl md:text-base hover:underline mb-2 md:mb-0 hover:text-red-500">Kontakt</Link>
        </>
    )
}

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

    const toggleMenu = () => setOpenMenu((o) => !o);
    const closeMenu = () => setOpenMenu(false);

    const openLogin = () => {
        setLoginOpen(true);
        closeMenu(); // close burger menu on mobile when opening modal
    };

    return (
        <header className="max-w-7xl mx-auto p-6 w-full inset-x-0">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"} className="flex items-center">
                    <Image src={"/Logo_alt.jpg"} alt="logo" width={"75"} height={"40"}/>
                    <h1 className="ms-2 md:text-2xl font-bold">Årøsund Bådelaug</h1>
                </Link>
                <nav className="space-x-6 hidden md:block">
                    <HeaderLinks onNavigate={closeMenu} onLogin={openLogin}/>
                </nav>
                <nav className="space-x-6 block md:hidden">
                    <button className={"bg-red-500 text-white p-2 px-6 cursor-pointer"}
                            onClick={toggleMenu}>{openMenu ? 'Luk' : 'Menu'}</button>
                </nav>
            </div>
            <div className={`mt-12 md:hidden ${openMenu ? "block" : "hidden"}`} onClick={closeMenu}>
                <HeaderLinks onNavigate={closeMenu} onLogin={openLogin}/>
            </div>

            {/* Modal */}
            <ConventusLoginModal
                open={loginOpen}
                onClose={() => setLoginOpen(false)}
                src="/conventus.html"
                title="Medlemslogin"
                minHeight={560}
            />
        </header>
    )
}