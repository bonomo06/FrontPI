import Link from "next/link"
import LogoPref from "../assets/logo_prefeitura.svg"

export default function Header() {
    return (
        <>
            <header className="grid grid-cols-2 gap-4 bg-gray-500 text-white font-bold font-mono">
                <div>
                    <Link href="/"><img className="m-2" src="/assets/prefeituraIMG.png" alt="" width={70} height={70} /></Link>
                </div>
                <div className="flex justify-end">
                    <Link className="m-8 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300" href="/">Gov</Link>
                    <Link className="m-8 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300" href="/">Vacinação</Link>
                    <Link className="m-8 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300" href="/">Notícias</Link>
                    <Link className="m-8 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300" href="/">Dengue</Link>
                    <Link className="m-8 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300" href="/">Sintomas</Link>
                    <Link className="m-8 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300" href="/">Números</Link>
                </div>
            </header>
        </>
    )
}