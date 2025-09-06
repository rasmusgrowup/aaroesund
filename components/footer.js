import React from "react";

export default function Footer() {
    return (
        <footer className="bg-red-500 text-white text-center p-4 absolute w-full h-[100px] bottom-0">
            <p>&copy; {new Date().getFullYear()} Årøsund Bådelaug. Alle rettigheder forbeholdes.</p>
        </footer>
    )
}