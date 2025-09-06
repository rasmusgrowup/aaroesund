import React from "react";

export default function Contact({standalone}) {
    return (
        <section id="kontakt" className={`py-12 px-4 mt-12 ${standalone && standalone ? 'flex items-center h-full' : 'bg-red-500 text-white'}`}>
            <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-3xl font-semibold mb-4">Kontakt</h3>
                <p className="text-lg mb-4">Har du spørgsmål eller vil du være medlem? Kontakt os gerne.</p>
                <p>Email: <a href="mailto:kontakt@aa-b.dk"
                             className="hover:underline">kontakt@aa-b.dk</a></p>
                <p className={"mt-3"}>Årøsund Bådelaug<br/>Færgevej 106, 6100 Haderslev<br/>Lillebælt Syd Kreds
                </p>
            </div>
        </section>
    )
}