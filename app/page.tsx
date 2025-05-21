import Image from "next/image"
import Link from "next/link"
import { Upload, Phone, MapPin, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDF6F0]">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#FDF6F0] py-12">
        <div className="container mx-auto px-4 max-w-[1240px] grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#333333] mb-2">Pszichoterápiás magánrendelés</h1>
            <p className="text-lg text-[#444444] mb-6">Mentális segítségnyújtás sportolók és élsportolók számára</p>

            <ul className="space-y-1 text-[#444444] mb-8">
              <li>Ismerd meg Önmagad!</li>
              <li>Fogadd el Önmagad!</li>
              <li>Szeresd meg Önmagad!</li>
              <li>Légy boldog Önmagaddal!</li>
              <li>Nyújts támogatást Önmagadnak!</li>
              <li>Vigyázz Önmagadra!</li>
            </ul>

            <div className="flex gap-4">
              <Link
                href="#contact"
                className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded-[4px] text-sm transition-colors duration-200"
              >
                Időpontot kérek
              </Link>
              <Link
                href="/modszereim"
                className="bg-white hover:bg-gray-100 border border-indigo-700 text-indigo-700 px-4 py-2 rounded-[4px] text-sm transition-colors duration-200"
              >
                Módszereim
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute top-0 right-0 w-full h-full bg-indigo-700 transform translate-x-4 -translate-y-4"></div>
              <div className="relative z-10">
                <Image
                  src="/hero-profile-picture.jpg"
                  alt="Dr. Erdély Kálmán"
                  width={355}
                  height={510}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4 max-w-[1240px] mb-8 text-center">
          <p className="text-gray-700 italic">
            "Nem az, amit átélsz, hanem ahogy fogadod, az formálja a személyiséged."
            <br />
            <span className="font-medium">Blaise Pascal</span>
          </p>
        </div>
        <div className="container mx-auto px-4 flex justify-center gap-12">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-indigo-700 transform -translate-x-4 -translate-y-4"></div>
            <Image
              src="/kavics-blue.jpg"
              alt="Blue pebbles arrangement"
              width={300}
              height={205}
              className="relative z-10"
            />
          </div>
          <div className="relative">
            <div className="absolute top-0 right-0 w-full h-full bg-[#FFCBAD] transform translate-x-4 -translate-y-4"></div>
            <Image
              src="/kavics-orange.jpg"
              alt="Orange pebbles with decorative metal lizard"
              width={300}
              height={205}
              className="relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-[#F6FAFE] py-12">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <h2 className="text-2xl font-bold text-[#333333] mb-6">Bemutatkozás</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-[#444444] mb-4">
              Szakmai tapasztalattal rendelkezem az életvezetési nehézségek, (pár)kapcsolati konfliktusok, szorongás, depresszió, pánikzavar, stresszkezelési nehézségek, önértékelési zavarok terén. A tünetek hátterében megbúvó lélektani történések feltárásában és átdolgozásában valamint önismereti igény esetén felajánlom szakmai segítségemet.
              </p>
              <p className="text-[#444444] mb-8">
                A valójában elérhető teljesítmény lelki egyensúly nélkül nem valósítható meg, így a sportolói teljesítmény alapja is a mentális jóllét. A lelki egyensúly elérése és a megteremtett harmónia fenntartása megkerülhetetlen. A sportolók mentális felkészítésébe fektetett lélektani munka a sportbeli teljesítményen túl az élet más területein is kifejti pozitív hatását. Sportolók, élsportolók is fordulhatnak hozzám mentális felkészítés és segítségnyújtás céljából.
              </p>
              <p className="text-[#444444] mb-8">
                Magánrendelésem csendes, nyugodt környezetben várom.
              </p>
              <Link
                href="/bemutatkozas"
                className="inline-block bg-white hover:bg-gray-100 border border-indigo-700 text-indigo-700 px-4 py-2 rounded-[4px] text-sm transition-colors duration-200"
              >
                Szakmai háttértörténet
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-center">
              <Upload className="text-gray-400 w-8 h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* What is Psychotherapy Section */}
      <section className="bg-indigo-700 text-[#F5F5F5] py-12">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <h2 className="text-2xl font-bold mb-6">Mire szolgál a pszichoterápia?</h2>
          <p className="mb-4">
            Amikor akadályt kell győznöd, terheid megnövekedtek és rádnehezedtek és úgy érzed, hogy szükséged volna
            segítségre, akkor fordulj hozzám bizalommal. A szakember nem hétköznapi módon közelíti meg az ön
            problémáját, hanem azt a pszichológia eszköztárával, módszereivel és technikáival teszi.
          </p>
          <p className="mb-6">
            A lelki problémák nyomásában tehetetlennek érzi magát, álom eloszlatja, de a jövőtől is kétségbeesett
            érzései, vagy gondolatai vannak a gyógyulásról. Akkor fordulj bizalommal... Mindig van jó tanács, "Nem
            tudtam mi lesz velem, hálátlan vagyok, de a pszichológus segített."
          </p>
          <Link href="/pszichoterapia" className="inline-flex items-center text-[#F5F5F5] mt-2 group">
            <span className="underline hover:text-white hover:brightness-125 transition-all">Bővebben</span>
            <Image
              src="/arrow-blue.svg"
              alt="Arrow"
              width={24}
              height={24}
              className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* Therapy Methods Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <h2 className="text-2xl font-bold text-[#333333] mb-10">Önismereti és terápiás módszereim</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Method 1 */}
            <Link href="/onismeret" className="block">
              <div className="bg-[#FFFFFF] border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-indigo-300 transition-all duration-300 max-w-[301px] w-full h-full flex flex-col group">
                <div className="flex justify-start mb-4">
                  <div className="bg-[#E1F0FF] p-3 rounded-full group-hover:bg-[#FDF6F0]">
                    <svg
                      className="w-6 h-6 text-[#2D3DA2]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-medium text-gray-800 mb-2 group-hover:text-indigo-700">Önismeret</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Segítség önmagunk mélyebb megismerésében és elfogadásában
                </p>
                <div className="flex justify-end">
                  <Image
                    src="/arrow-blue.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>

             {/* Method 2 */}
            <Link href="/eletvezetesi-tanacsadas" className="block">
              <div className="bg-[#FFFFFF] border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-indigo-300 transition-all duration-300 max-w-[301px] w-full h-full flex flex-col group">
                <div className="flex justify-start mb-4">
                  <div className="bg-[#E1F0FF] p-3 rounded-full group-hover:bg-[#FDF6F0]">
                    <svg
                      className="w-6 h-6 text-[#2D3DA2]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-medium text-gray-800 mb-2 group-hover:text-indigo-700">Életvezetési tanácsadás</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">Segítség az életvezetési nehézségek megoldásában</p>
                <div className="flex justify-end">
                  <Image
                    src="/arrow-blue.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>

            {/* Method 3 */}
            <Link href="/parkapcsolati-nehezsegek" className="block">
              <div className="bg-[#FFFFFF] border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-indigo-300 transition-all duration-300 max-w-[301px] w-full h-full flex flex-col group">
                <div className="flex justify-start mb-4">
                  <div className="bg-[#E1F0FF] p-3 rounded-full group-hover:bg-[#FDF6F0]">
                    <svg
                      className="w-6 h-6 text-[#2D3DA2]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-medium text-gray-800 mb-2 group-hover:text-indigo-700">
                  Párkapcsolati nehézségek rendezése
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">Segítség a párkapcsolati problémák megoldásában</p>
                <div className="flex justify-end">
                  <Image
                    src="/arrow-blue.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>

            

            

            {/* Method 4 */}
            <Link href="/szorongasoldas" className="block">
              <div className="bg-[#FFFFFF] border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-indigo-300 transition-all duration-300 max-w-[301px] w-full h-full flex flex-col group">
                <div className="flex justify-start mb-4">
                  <div className="bg-[#E1F0FF] p-3 rounded-full group-hover:bg-[#FDF6F0]">
                    <svg
                      className="w-6 h-6 text-[#2D3DA2]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-medium text-gray-800 mb-2 group-hover:text-indigo-700">Szorongásoldás</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Technikák a szorongás csökkentésére és kezelésére
                </p>
                <div className="flex justify-end">
                  <Image
                    src="/arrow-blue.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>

            {/* Method 5 */}
            <Link href="/stresszkezeles" className="block">
              <div className="bg-[#FFFFFF] border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-indigo-300 transition-all duration-300 max-w-[301px] w-full h-full flex flex-col group">
                <div className="flex justify-start mb-4">
                  <div className="bg-[#E1F0FF] p-3 rounded-full group-hover:bg-[#FDF6F0]">
                    <svg
                      className="w-6 h-6 text-[#2D3DA2]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-medium text-gray-800 mb-2 group-hover:text-indigo-700">Stresszkezelés</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Módszerek a stressz tüneteinek kezelésére a mindennapokban
                </p>
                <div className="flex justify-end">
                  <Image
                    src="/arrow-blue.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>

            {/* Method 6 */}
            <Link href="/lelki-munka-belso-kepekkel" className="block">
              <div className="bg-[#FFFFFF] border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-indigo-300 transition-all duration-300 max-w-[301px] w-full h-full flex flex-col group">
                <div className="flex justify-start mb-4">
                  <div className="bg-[#E1F0FF] p-3 rounded-full group-hover:bg-[#FDF6F0]">
                    <svg
                      className="w-6 h-6 text-[#2D3DA2]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-medium text-gray-800 mb-2 group-hover:text-indigo-700">
                  Lelki munka belső képekkel
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">Imaginációs és álomfejtéses technikák feltárása</p>
                <div className="flex justify-end">
                  <Image
                    src="/arrow-blue.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>

            {/* Method 7 */}
            <Link href="/rejtett-lelki-utak" className="block">
              <div className="bg-[#FFFFFF] border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-indigo-300 transition-all duration-300 max-w-[301px] w-full h-full flex flex-col group">
                <div className="flex justify-start mb-4">
                  <div className="bg-[#E1F0FF] p-3 rounded-full group-hover:bg-[#FDF6F0]">
                    <svg
                      className="w-6 h-6 text-[#2D3DA2]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-medium text-gray-800 mb-2 group-hover:text-indigo-700">
                  Rejtett lelki okok vizuális megjelenítése, rajz-, szimbólum elemzés
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">Segítség a tudattalan tartalmak feltárásában</p>
                <div className="flex justify-end">
                  <Image
                    src="/arrow-blue.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>

            {/* Method 8 */}
            <Link href="/pszichiatriai-es-pszichoszomatikus-zavarok" className="block">
              <div className="bg-[#FFFFFF] border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-indigo-300 transition-all duration-300 max-w-[301px] w-full h-full flex flex-col group">
                <div className="flex justify-start mb-4">
                  <div className="bg-[#E1F0FF] p-3 rounded-full group-hover:bg-[#FDF6F0]">
                    <svg
                      className="w-6 h-6 text-[#2D3DA2]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-medium text-gray-800 mb-2 group-hover:text-indigo-700">
                  Pszichotrauma és poszttraumás zavarok komplex kezelése
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  Önfejlesztés és pszichoterápia közötti kombinációja
                </p>
                <div className="flex justify-end">
                  <Image
                    src="/arrow-blue.svg"
                    alt="Arrow"
                    width={20}
                    height={20}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>

           
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-[#333333]">
                Ismerje meg
                <br />
                kiemelt szakterületeimet
              </h2>
            </div>
            <div className="space-y-4">
              <Link
                href="/sportpszichologia"
                className="block bg-indigo-700 text-white p-4 rounded-lg flex justify-between items-center hover:bg-indigo-800 transition-colors group"
              >
                <span>Sportpszichológia, Sportolók, élsportolók számára mentális segítségnyújtás</span>
                <Image
                  src="/arrow-white.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                  className="transform transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/alomkozpontu-dinamikus-rovidterapia"
                className="block bg-indigo-700 text-white p-4 rounded-lg flex justify-between items-center hover:bg-indigo-800 transition-colors group"
              >
                <span>Álomközpontú dinamikus rövidterápia</span>
                <Image
                  src="/arrow-white.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                  className="transform transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/csoportterapia"
                className="block bg-indigo-700 text-white p-4 rounded-lg flex justify-between items-center hover:bg-indigo-800 transition-colors group"
              >
                <span>Csoportterápia - Csoportpszichoterápia</span>
                <Image
                  src="/arrow-white.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                  className="transform transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <h1 className="text-3xl font-bold text-center text-[#333333] mb-8">Bejelentkezés</h1>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gray-700 mb-2">A jelentkezőket csendes, nyugodt környezetben várom.</p>
            <p className="text-gray-700 mb-2">Magánrendelésem Budapest 2. kerületében Pasaréten működik.</p>
            <p className="text-gray-700">Bejelentkezéshez kérem hívja az itt megadott telefonszámot.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-gray-100 rounded-xl p-5 shadow-sm">
                <div className="flex items-start">
                  <Phone className="text-indigo-700 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-indigo-700 text-lg mb-2">+36 30 400 6490</p>
                    <p className="text-gray-600 text-sm">
                      Időpontot egyeztethet hétköznapokon
                      <br />
                      8:00 - 10:00 valamint 20:00 - 22:00 között
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-gray-100 rounded-xl p-5 shadow-sm">
                <div className="flex items-start">
                  <MapPin className="text-indigo-700 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-indigo-700 text-lg mb-2">1026 Budapest, Gyergyó u. 8 Fsz. 3</p>
                    <p className="text-gray-600 text-sm">
                      Személygépkocsival és tömegközlekedési
                      <br />
                      eszközzel egyaránt könnyen elérhető.
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gray-100 rounded-xl p-5 shadow-sm">
                <div className="flex items-start">
                  <Clock className="text-indigo-700 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-indigo-700 text-lg mb-3">Rendelési idő</p>
                    <div className="space-y-1 text-gray-600 text-sm">
                      <p>Hétfő: 17:00 - 20:00</p>
                      <p>Szerda: 08:00 - 11:00</p>
                      <p>Csütörtök: 16:00 - 20:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-xl overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.4046428537366!2d18.9647!3d47.5432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d9f4e4e0d62b%3A0x8d9caafd8a0e3a74!2sGyergy%C3%B3%20u.%208%2C%201026%20Budapest%2C%20Hungary!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
