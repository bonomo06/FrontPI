import Link from "next/link"
import { useState } from "react"

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
      <header className="bg-gray-500 text-white font-bold p-4">
        <div className="grid grid-cols-2 gap-4 items-center">
          {/* Logo */}
          <div className="flex justify-start">
            <Link href="https://www.indaiatuba.sp.gov.br">
              <img
                className="m-2"
                src="/assets/prefeituraIMG.png"
                alt="Logo"
                width={150}
                height={150}
              />
            </Link>
          </div>

          {/* Menu de navegação */}
          <div className="hidden sm:flex justify-end space-x-8">
            <Link
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300"
              href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue"
            >
              Gov
            </Link>
            <Link
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300"
              href="https://conhecadengue.com.br/vacina"
            >
              Vacinação
            </Link>
            <Link
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300"
              href="#news"
            >
              Notícias
            </Link>
            <Link
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300"
              href="#dengue"
            >
              Dengue
            </Link>
            <Link
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300"
              href="#sintomas"
            >
              Sintomas
            </Link>
            <Link
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300"
              href="#grafico"
            >
              Números
            </Link>
          </div>

          {/* Menu mobile (aparece em telas pequenas) */}
          <div className="sm:hidden flex justify-end">
            <button
              className="text-white"
              onClick={toggleMenu}
            >
              <span className="material-icons">☰</span>
            </button>
          </div>
        </div>

        {/* Links do menu em telas pequenas */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col items-center mt-4 space-y-4">
            <Link
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300"
              href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/dengue"
            >
              Gov
            </Link>
            <Link
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300"
              href="https://conhecadengue.com.br/vacina"
            >
              Vacinação
            </Link>
            <Link
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300"
              href="#news"
            >
              Notícias
            </Link>
            <Link
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300"
              href="#dengue"
            >
              Dengue
            </Link>
            <Link
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300"
              href="#sintomas"
            >
              Sintomas
            </Link>
            <Link
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:underline duration-300"
              href="#grafico"
            >
              Números
            </Link>
          </div>
        )}
      </header>
    </>

    )
}