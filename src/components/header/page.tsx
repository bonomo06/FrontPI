import Link from "next/link"
import LogoPref from "../assets/logo_prefeitura.svg"

export default function Header() {
    return (
        <>
            <header className="grid grid-cols-2 gap-4 m-5">
                <div>
                    <Link href="/"><img src="/assets/prefeituraIMG.png" alt="" width={70} height={70} /></Link>
                </div>
                <div className="flex justify-end">
                    <Link className="m-8" href="/">Gov</Link>
                    <Link className="m-8" href="/">Vacinação</Link>
                    <Link className="m-8" href="/">Notícias</Link>
                    <Link className="m-8" href="/">Dengue</Link>
                    <Link className="m-8" href="/">Sintomas</Link>
                    <Link className="m-8" href="/">Números</Link>
                </div>
            </header>
        </>
    )
}