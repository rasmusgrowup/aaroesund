import React from "react";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/contact";

export default function HomePage() {
    return (
        <main className="bg-white text-gray-800">
            <div className="mx-auto">
                {/* Hero section */}
                <section
                    className="text-white flex justify-center items-center h-[80vw] md:h-[40vw] overflow-hidden relative">
                    <Image src="/Hero.jpg" alt="Årøsund udsigt  af både" layout="fill" objectFit="cover"
                           objectPosition={"center"} priority={true}/>
                    <h1 className={"absolute text-3xl md:text-5xl font-bold text-center p-6"}>Velkommen til Årøsund
                        Bådelaug{"'s"} hjemmeside</h1>
                </section>

                {/* Om Klubben */}
                <section id="om" className="max-w-7xl mx-auto py-15 md:flex">
                    <div className="basis-2/3 p-8">
                        <h3 className="text-3xl font-semibold mb-4">Velkommen til Årøsund Bådelaug</h3>
                        <p className="text-lg mb-6">Som medlem af Årøsund Bådelaug, får du/i en række af oplevelser,
                            hvor det at sejle og have
                            vandet som omdrejnings punkt, samt fællesskabet medlemmerne i mellem, er i højsædet.
                        </p>
                        <p className="text mb-6">
                            Vi vægter det sociale samvær højt, og derfor har vi en del arrangementer som alle vil
                            kunne
                            finde interesse i. Da vi er ret dynamiske i bådelauget, er det ikke alle arrangementer
                            der
                            finder sted hvert år, men af de faste og altid tilbagevendende begivenheder er der
                            bl.a.:
                            - Standerhejsning med efterfølgende spisning
                            - Sensommerfest med spisning
                            - Fælles tur til andre havne hvor vi låner deres klubhuse, hygger og spiser sammen, samt
                            udforsker det område vi ligger i.
                        </p>
                        <p className="text mb-6">
                            I vinterperioderne ligger vi ikke stille og her har vi op til flere foredrag eller
                            events,
                            samt selvfølgelig vores generalforsamling.
                        </p>
                        <p className="text mb-6">
                            Vi glæder os til at se jer i vores dejlige fællesskab.
                        </p>
                    </div>
                    <div className="basis-1/3 p-8">
                        <div className={"md:my-12"}>
                            <Image src={"/facebook-icon.png"} alt={"facebook-icon"} width={"28"} height={"28"}/>
                            <p className={"py-6"}>Følg livets gang i vores bådelaug på facebook. Her vil der ugentlig
                                blive lagt video, billeder og andet op omkring vores bådelaug.</p>
                            <div className={"mt-3"}>
                                <Link href="https://facebook.com"
                                      className={"bg-blue-500 hover:bg-blue-600 p-3 px-6 text-white "}>Facebookgruppen</Link>
                            </div>
                        </div>
                        <div className={"my-12"}>
                            <Image src={"/DS_logo.png"} alt={"facebook-icon"} width={"150"} height={"40"}/>
                            <p className={"py-6"}>Som medlem af Dansk Sejlunion får du nogle helt specielle tilbud bl.a.
                                super tilbud på både ansvars og kasko-forsikring på båden, mulighed for at bruge DS
                                ankerbøjerne rundt om i Danmark, samt et væld af andre tilbud. </p>
                            <div className={"mt-2"}>
                                <Link href="https://dansksejlunion.dk/klubber/aaroesund-baadelaug"
                                      className={"bg-red-500 hover:bg-red-600 p-3 px-6 text-white "}>Dansk
                                    Sejlunion</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Aktiviteter */}
                <section id="aktiviteter" className="max-w-7xl mx-auto px-8 md:py-15 md:flex">
                    <div className="block md:flex justify-between text-center gap-6">
                        <div className={"basis-1/3 mb-15 md:mb-0"}>
                            <Image src={"/Kajak.jpg"} alt={"Kajak"} layout={"responsive"} width={"700"} height={"500"}/>
                            <h3 className={"font-bold mt-4 mb-2"}>ÅB Kajak</h3>
                            <p>Vores kajakafdeling har ugentlige ro aftner, hvor man kan låne en klubkajak eller har
                                mulighed for at opbevare sin egen kajak.</p>
                            <div className={"mt-6"}>
                                <Link href="/kajak/page"
                                      className={"bg-red-500 hover:bg-red-600 mt-1 p-3 px-6 text-white "}>Læs
                                    mere</Link>
                            </div>
                        </div>
                        <div className={"basis-1/3 mb-15 md:mb-0"}>
                            <Image src={"/Tirsdagssejlads.jpg"} alt={"Kajak"} layout={"responsive"} width={"700"}
                                   height={"500"}/>
                            <h3 className={"font-bold mt-4 mb-2"}>Tirsdagssejlads</h3>
                            <p>Hver tirsdag i sæsonen, afholdes der kapsejlads for kølbåde, hvor alle er velkommen
                                uanset erfaring med kapsejlads. Deltagelse koster 100 kr pr. sæson pr. båd.</p>
                        </div>
                        <div className={"basis-1/3 mb-15 md:mb-0"}>
                            <Image src={"/Klubhus.jpg"} alt={"Kajak"} layout={"responsive"} width={"700"}
                                   height={"500"}/>
                            <h3 className={"font-bold mt-4 mb-2"}>Klubhus</h3>
                            <p>Årøsund Bådelaug holder til i den ene ende af medborgerhuset. Som medlem har man fri
                                adgang hertil. Det er også her vi holder vores små arrangementer, møder osv.</p>
                        </div>
                    </div>
                </section>

                {/* Indmeldelse */}
                <section id={"indmeldelse"} className={"max-w-7xl mx-auto px-8 py-15"}>
                    <div className={"max-w-3xl"}>
                        <h3 className={"text-2xl font-bold mb-3"}>Indmeldelse og kontigenter</h3>
                        <p>Hvis du/i kunne tænke jer at melde jer ind i Årøsund Bådelaug kan dette gøres ved at sende en
                            mail til: <Link className={"hover:underline"} href={"mailto:baadelaug@aarosund.dk"}>baadelaug@aarosund.dk</Link> med følgende oplysninger: navn, adresse, telefonnummer,
                            e-mail og fødselsdag.</p>
                        <div className={"border-b-1 flex justify-between items-center mt-8 pb-4"}>
                            <h4>Aktivt medlemskab</h4>
                            <h4>500 kr.</h4>
                        </div>
                        <div className={"border-b-1 flex justify-between items-center mt-4 pb-4"}>
                            <h4>Aktiv ægtefælle/samlever medlemsskab</h4>
                            <h4>300 kr.</h4>
                        </div>
                        <div className={"border-b-1 flex justify-between items-center mt-4 pb-4"}>
                            <h4>Junior medlemskab (1-20år)</h4>
                            <h4>250 kr.</h4>
                        </div>
                        <div className={"border-b-1 flex justify-between items-center mt-4 pb-4"}>
                            <h4>ÅB Kajak (forudsætter aktivt medlemsskab)</h4>
                            <h4>300 kr.</h4>
                        </div>
                    </div>
                </section>
            </div>
            <Contact/>
        </main>
    );
}
