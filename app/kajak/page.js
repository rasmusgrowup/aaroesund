import React from "react";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/contact";

export default function Page() {
    return (
        <main className="bg-white text-gray-800">
            {/* Hero section */}
            <section className="text-white flex justify-center items-center h-[40vw] overflow-hidden relative">
                <Image src="/Kajak_hero.jpg" alt="Årøsund udsigt  af både" layout="fill" objectFit="cover"
                       objectPosition={"center"}/>
                <h1 className={"absolute text-3xl md:text-5xl font-bold text-center p-2"}>ÅB Kajak</h1>
            </section>

            {/* Om Klubben */}
            <section id="om" className="max-w-7xl mx-auto py-15 md:flex">
                <div className="basis-2/3 p-8">
                    <h3 className="text-3xl font-semibold mb-4">Velkommen til ÅB Kajak</h3>
                    <p className="text-lg mb-6">ÅB Kajak tilbyder fællesskab omkring kajaksporten.
                    </p>
                    <div className="basis-1/3 md:hidden">
                        <div className={"my-12"}>
                            <h3 className={"text-2xl font-bold mb-6"}>Book kajak</h3>
                            <p className={"mb-6"}>Husk at klubkajakkerne ikke må tages med andre steder.</p>
                            <p className={"mb-6"}>“Jeg er ude at ro…” er tiltænkt, at man kan skrive, hvornår man er ude at ro, hvis andre gerne vil følges.</p>
                            <p className={"mb-6"}>Husk altid at skrive på tavlen når du tager ud og slette det igen, når du er kommet hjem.</p>
                            <p className={"mb-6"}>Har du spørgsmål så henvend dig til Flemmin Madsen på mail: madsen-23@mail.tele.dk</p>
                            <div className={"mt-9"}>
                                <Link href="https://facebook.com"
                                      className={"bg-red-500 hover:bg-red-600 p-3 px-6 text-white "}>Book her</Link>
                            </div>
                        </div>
                    </div>
                    <p className="text mb-6">
                        <strong>Vi ror hver mandag kl. 18.00 fra stranden NV for lystbådehavnen.</strong><br/>
                        Vi afslutter gerne roaftenerne med en kop kaffe i klubhuset, hvor vi kan dele erfaringer og
                        oplevelser. Der vil evt. også blive arrangeret andre ture som informeres via mail.
                    </p>
                    <p className="text mb-6">ÅB Kajak tilbyder fællesskab omkring kajaksporten.</p>

                    <p className="text mb-6">Vi ror hver mandag kl. 18.00 fra stranden NV for lystbådehavnen.
                        Vi afslutter gerne roaftenerne med en kop kaffe i klubhuset, hvor vi kan dele erfaringer og
                        oplevelser. Der vil evt. også blive arrangeret andre ture som informeres via mail.</p>

                    <p className="text mb-6"><strong>Sikkerhed</strong><br/>
                        ÅB Kajak vægter sikkerhed højt. Så derfor vil vi hjælpe hinanden til at blive bedre roere. Vi
                        skal være i stand til at bedømme vore egne evner samt at forbedre disse. Vi skal kunne bedømme
                        vandet og vejret i forhold til vore roture. Når du har fundet den klubkajak, du ror bedst i,
                        eller købt din egen kajak, opfordrer vi kraftigt til, at du prøver selvredning i denne kajak, da
                        der er stor forskel på kajakker. Man kan ro med en sæson, og så skal man tage kajakbevis før man
                        kan fortsætte, ikke kun for ens egen sikkerhed, men også for de andres.</p>

                    <p className="text mb-6"><strong>Opbevaring af kajak</strong><br/>
                        ÅB Kajak kan tilbyde opbevaring af medlemmernes egne kajakker. Al opbevaring af materiel sker på
                        eget ansvar. Vi arbejder på at få nogle flere klubkajakker, så der også er plads til dem, der
                        ikke har egen kajak eller måske først vil prøve sporten af, inden de investerer.</p>

                    <p className="text mb-6">ÅB Kajak samarbejder med DGI omkring kurser m.m., og vi kan derfor tilbyde
                        disse til fordelagtige priser.</p>

                    <p className="text mb-6"><strong>Medlemskab</strong><br/>
                        Medlemsskab af ÅB kajak koster 600 kr. (Ægtefælle/samlever/juniorer 400 kr.) For at blive medlem
                        skal du oplyse navn, adresse, telefonnummer, e-mail og fødselsdag. Hvis du ikke ønsker dit
                        telefonnummer og e-mail oplyst på listen til de andre kajakmedlemmer, skal du gøre opmærksom på
                        dette.</p>

                    <p className="text mb-6"><strong>Indmelding</strong><br/>
                        Du kan melde dig ind på hjemmesiden eller ved at kontakte Berit (se bagsiden af folderen).
                        Medlemmer med egen kajak, som ønsker disse opbevaret, eller medlemmer, der er friroet og ønsker
                        at bruge klubkajakkerne, kan for 500 kr. købe en nøglebrik. Nøglen er personlig og bådehuset
                        skal altid være låst, når det forlades.</p>

                    <p className="text mb-6"><strong>Betingelser</strong><br/>
                        I ÅB Kajak skal man minimum opfylde nogle få, men rimelige betingelser for at ro alene, uanset
                        om du ror i klubkajak eller i egen kajak.</p>

                    <p className="text mb-6">Man skal have gennemført Roer 1, EPP 2 eller være frigivet af
                        klubinstruktør. Vi opfordrer til, at man ror med en makker. Foruden at have en at dele glæden
                        med, giver det også tryghed. Makkeren skal selvfølgelig også opfylde ovennævnte betingelser. Det
                        vil sige, at du ikke kan tage en med, der ikke har gennemført ovennævnte forløb. Skriv på tavlen
                        i bådehuset, hvornår du er taget af sted, og hvor længe du forventer at være væk. Giv også nogen
                        besked om, hvor du ror hen samt hvornår du forventer at være tilbage. Det giver også tryghed for
                        dem på land. Husk at slette dig på tavlen, når du kommer hjem.</p>

                    <p className="text mb-6"><strong>Klubkajakker</strong><br/>
                        ÅB Kajak råder pt. over 7 klubkajakker: 1 Easky 15, 1 Easky 17, 1 Dagger Alchemy 14,1 P&amp;H
                        Scorpio, 1 Tahe Marine Bay Spirit, 1 Tahe Reval Mini LC og 1 Wilderness Zephyr 155.</p>

                    <p className="text mb-6">Når du ror i disse, skal du være opmærksom på, at du ikke må være i
                        kajakken på land. Dvs. at fodspark skal indstilles, når kajakken er i vandet. Ind- og udstigning
                        skal også foregå i vandet, og kajakken skal bæres helt ud i vandet inden udstigning, og
                        udstigning skal også ske i vandet.</p>

                    <p className="text mb-6"><strong>Udstyr</strong><br/>
                        Vi råder også over udstyr til disse kajakker samt sikkerhedsudstyr. Udstyret vi har, er for at
                        alle kan komme med ud at prøve at ro kajak, og man må selvfølgelig bruge dette. Men det kan være
                        en god ide, at købe sit eget udstyr, så man altid har det, der passer bedst til en.</p>

                    <p className="text mb-6">Alt udstyr og kajakker skal efter endt brug skylles af i ferskvand og
                        aftørres. Husk også at tage lugerne af kajakken og tørre der også. Dette gælder alt udstyr, der
                        opbevares i huset, også egne kajakker og udstyr.</p>

                    <p className="text mb-6">Klubkajakkerne må ikke tages med andre steder hen uden forudgående aftale
                        med bestyrelsen.</p>

                    <p className="text mb-6"><strong>Reservation af klubkajak</strong><br/>
                        I ÅB Kajak skal du reservere klubkajakkerne, både til roaftenerne om mandagen og når du ellers
                        vil ud at ro. Dette gøres ved at booke på hjemmesiden eller efter aftale med Berit. Det er kun
                        medlemmer, der kan booke og må bruge kajakkerne, og der kan max. bookes en uge frem.
                        Ikke-medlemmer kan ro med om mandagen 2-3 gange inden de melder sig ind. For at reservere en
                        kajak skal de henvende sig til Berit.</p>

                    <p className="text mb-6"><strong>Roreglementer i ÅB Kajak</strong><br/>
                        Dette er baseret på, at medlemmerne bruger deres sunde fornuft når de planlægger og gennemfører
                        en tur. Enhver tur sker på eget ansvar.</p>

                    <p className="text mb-6">Der skal bæres CE-mærket (typegodkendt) rednings/svømmevest under
                        roning.</p>

                    <p className="text mb-6">Ved al roning skal de internationale søvejsregler overholdes, herunder også
                        vigepligtsregler.</p>

                    <p className="text mb-6">Der skal altid tages behørigt hensyn til vejr, vind, sø og strøm. Vær altid
                        særlig opmærksom på ændringer i vejrforholdende, tiltagende vind eller lignende.</p>

                    <p className="text mb-6">Det er forbudt at ro i tåget vejr uden landkending. Det tilrådes at have
                        kompas med.</p>

                    <p className="text mb-6">Roning i spirituspåvirket tilstand eller hermed ligestillede tilstande
                        medfører øjeblikkelig karantæne. I grovere tilfælde eller ved gentagelser kan dette medføre
                        eksklusion.</p>

                    <p className="text mb-6">Ethvert medlem er forpligtet til at holde sit materiel i forsvarlig
                        stand.</p>

                    <p className="text mb-6">I ÅB Kajak kan du friroes, når du har som minimum har enten EPP 2 eller
                        Roer I bevis. Dog ser vi helst, at man det første år ikke roer alene, men altid med en
                        makker.</p>

                    <p className="text mb-6">Derudover opfordres der til, at man hver sæson øver:<br/>
                        Selvredning (sidder i kajakken med spraydeck på og klar til at tømme for vand indenfor 4
                        min.)<br/>
                        Makkerredning<br/>
                        Bugsering</p>

                    <p className="text mb-6">Om vinteren (fra standerstrygning til standerhejsning) skal der altid ros
                        så tæt på land som muligt, og det indskærpes, at man tager ekstraordinært hensyn til vejr- og
                        vindforholdende. Ligeledes skal man medbringe skiftetøj, bruge våd/tørdragt og overtræk.
                        Bestyrelsen kan i særlige tilfælde nedlægge forbud mod vinterroning.</p>

                    <p className="text mb-6">Hvor du må ro aftales med klubbens instruktører.</p>

                    <p className="text mb-6"><strong>Regler for brug og opbevaring af kajakker</strong><br/>
                        Når du ror i klubkajakkerne, skal du være opmærksom på, at du ikke må være i kajakken på land.
                        Dvs. at fodspark skal indstilles, når kajakken er i vandet. Ind- og udstigning skal også foregå
                        i vandet, og kajakken skal bæres helt ud i og op af vandet.</p>

                    <p className="text mb-6">Vi råder også over 5 pagajer, 5 veste, 5 spraydeck, 2 pumper og 2
                        pagajflydere, og man må selvfølgelig bruge dette.</p>

                    <p className="text mb-6">Alt udstyr og kajakker skal efter endt brug skylles af i ferskvand og
                        aftørres.</p>

                    <p className="text mb-6">Husk også at tage lugerne af kajakken og tørre der også.</p>

                    <p className="text mb-6">Dette gælder alt udstyr, der opbevares i huset, også egne kajakker.</p>

                    <p className="text mb-6">Klubkajakkerne skal ALTID reserveres, både til roaftenerne om mandagen og
                        når du ellers vil ud. Dette gøres ved at booke på hjemmesiden eller efter aftale med Berit. Det
                        er kun medlemmer, der kan booke, og der kan max. bookes en uge frem.</p>

                    <p className="text mb-6">Klubkajakkerne må ikke tages med andre steder hen uden forudgående aftale
                        med bestyrelsen.</p>

                    <p className="text mb-6">Man skal have gennemført Roer 1, EPP 2 eller være frigivet af
                        klubinstruktør. Vi opfordrer til, at man ror med en makker. Makkeren skal selvfølgelig også
                        opfylde ovennævnte betingelser. Det vil sige, at du IKKE kan tage en med, der ikke har
                        gennemført ovennævnte forløb.</p>

                    <p className="text mb-6">Skriv på tavlen i bådehuset, hvornår du er taget af sted, og hvor længe du
                        forventer at være væk. Giv også nogen besked om, hvor du ror hen samt hvornår du forventer at
                        være tilbage. Det giver også tryghed for dem på land. Husk at slette dig på tavlen, når du
                        kommer hjem.</p>

                    <p className="text mb-6">Al opbevaring af materiel sker på eget ansvar.</p>

                    <p className="text mb-6">Bådehuset skal ALTID være låst, når det forlades.</p>
                </div>
                <div className="basis-1/3 p-8 py-2 hidden md:block">
                    <div className={"my-12"}>
                        <h3 className={"text-2xl font-bold mb-6"}>Book kajak</h3>
                        <p className={"mb-6"}>Husk at klubkajakkerne ikke må tages med andre steder.</p>
                        <p className={"mb-6"}>“Jeg er ude at ro…” er tiltænkt, at man kan skrive, hvornår man er ude at ro, hvis andre gerne vil følges.</p>
                        <p className={"mb-6"}>Husk altid at skrive på tavlen når du tager ud og slette det igen, når du er kommet hjem.</p>
                        <p className={"mb-6"}>Har du spørgsmål så henvend dig til Flemmin Madsen på mail: madsen-23@mail.tele.dk</p>
                        <div className={"mt-9"}>
                            <Link href="https://facebook.com"
                                  className={"bg-red-500 hover:bg-red-600 p-3 px-6 text-white "}>Book her</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </main>
    )
}