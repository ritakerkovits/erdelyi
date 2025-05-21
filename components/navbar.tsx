import Link from "next/link"
import Image from "next/image"

interface NavbarProps {
  activePage?: string
}

export default function Navbar({ activePage }: NavbarProps) {
  return (
    <nav className="bg-[#FDF6F0] h-[108px] flex items-center">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="py-4 flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image
              src="/janus-logo.svg"
              alt="Dr. Erdély Kálmán logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <span className="font-semibold text-[#333333]">Dr. Erdély Kálmán</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`text-sm ${activePage === "home" ? "text-indigo-700 font-medium" : "text-[#444444] hover:text-indigo-700"}`}
          >
            Kezdőlap
          </Link>
          <Link
            href="/bemutatkozas"
            className={`text-sm ${activePage === "bemutatkozas" ? "text-indigo-700 font-medium" : "text-[#444444] hover:text-indigo-700"}`}
          >
            Bemutatkozás
          </Link>
          <Link
            href="/pszichoterapia"
            className={`text-sm ${activePage === "pszichoterapia" ? "text-indigo-700 font-medium" : "text-[#444444] hover:text-indigo-700"}`}
          >
            Mire szolgál a pszichoterápia
          </Link>
          <Link
            href="/modszereim"
            className={`text-sm ${activePage === "modszereim" ? "text-indigo-700 font-medium" : "text-[#444444] hover:text-indigo-700"}`}
          >
            Terápiás módszereim
          </Link>
          <Link
            href="/referenciak"
            className={`text-sm ${activePage === "referenciak" ? "text-indigo-700 font-medium" : "text-[#444444] hover:text-indigo-700"}`}
          >
            Referenciák
          </Link>
          <Link
            href="/kapcsolat"
            className="text-sm bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded-[4px] transition-colors"
          >
            Kapcsolat felvétel
          </Link>
        </div>
      </div>
    </nav>
  )
}
