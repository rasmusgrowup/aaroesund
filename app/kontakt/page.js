import Contact from "@/components/contact";
import Link from "next/link";

export default function KontaktPage() {
    return (
        <main className="bg-white text-gray-800">
            <Contact standalone={true} />
            <ul className={"max-w-7xl mx-auto px-9 py-15 lg:flex justify-between"}>
                <li className={"mb-6"}>
                    <h3 className={"font-bold"}>Formand</h3>
                    <p>Jørgen Platz</p>
                    <Link href={"mailto: faergevej106@gmail.com"}>faergevej106@gmail.com</Link>
                </li>
                <li className={"mb-6"}>
                    <h3 className={"font-bold"}>Kasserer:</h3>
                    <p>Poul Bek</p>
                    <Link href={"mailto: faergevej106@gmail.com"}>poul@poulbek.dk</Link>
                    <Link href={"tel:+4526872200"}>tel. 26872200</Link>
                </li>
                <li className={"mb-6"}>
                    <h3 className={"font-bold"}>Tursejladskontakt</h3>
                    <p>Jørgen Platz</p>
                    <Link href={"mailto:faergevej106@gmail.com"}>faergevej106@gmail.com</Link>
                </li>
                <li className={"mb-6"}>
                    <h3 className={"font-bold"}>Kapsejladskontakt</h3>
                    <p>Jørgen Platz</p>
                    <Link href={"mailto:faergevej106@gmail.com"}>faergevej106@gmail.com</Link>
                </li>
            </ul>
        </main>
    )
}