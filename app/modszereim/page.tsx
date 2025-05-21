import Link from "next/link"
import { ArrowRight, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TerapiasModszereim() {
  return (
    <main className="min-h-screen bg-[#FDF6F0]">
      <Navbar activePage="modszereim" />

      {/* Header Section */}
      <section className="bg-[#FDF6F0] py-12">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">Önismereti és terápiás módszereim</h1>

          {/* Therapy Methods Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Method 1 */}
            <Link href="/onismeret" className="block">
              <div className="bg-white border border-gray-200 rounded-none rounded-tr-xl rounded-br-xl p-6 hover:shadow-md transition-all duration-300 border-l-4 border-l-[#2D3DA2] hover:border-indigo-400 group h-[200px] flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Users className="w-6 h-6 text-blue-700" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-gray-700 mb-2">
                        Szeretné jobban megismerni, megérteni és kontrollálni Önmagát?
                      </p>
                      <h3 className="font-medium text-gray-800 mb-4 group-hover:text-indigo-700 transition-colors">
                        Önismeret
                      </h3>
                    </div>
                    <div className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm mt-auto">
                      <span>Részletek</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Method 2 */}
            <Link href="/eletvezetesi-tanacsadas" className="block">
              <div className="bg-white border border-gray-200 rounded-none rounded-tr-xl rounded-br-xl p-6 hover:shadow-md transition-all duration-300 border-l-4 border-l-[#2D3DA2] hover:border-indigo-400 group h-[200px] flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Users className="w-6 h-6 text-blue-700" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-gray-700 mb-2">Van-e segítőtársa életvezetési problémáinak megoldásában?</p>
                      <h3 className="font-medium text-gray-800 mb-4 group-hover:text-indigo-700 transition-colors">
                        Életvezetési tanácsadás
                      </h3>
                    </div>
                    <div className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm mt-auto">
                      <span>Részletek</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Method 3 */}
            <Link href="/parkapcsolati-nehezsegek" className="block">
              <div className="bg-white border border-gray-200 rounded-none rounded-tr-xl rounded-br-xl p-6 hover:shadow-md transition-all duration-300 border-l-4 border-l-[#2D3DA2] hover:border-indigo-400 group h-[200px] flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Users className="w-6 h-6 text-blue-700" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-gray-700 mb-2">
                        Ki segíti Önt párkapcsolati, családi és munkahelyi kapcsolati nehézségeiben?
                      </p>
                      <h3 className="font-medium text-gray-800 mb-4 group-hover:text-indigo-700 transition-colors">
                        (Pár)kapcsolati nehézségek
                      </h3>
                    </div>
                    <div className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm mt-auto">
                      <span>Részletek</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Method 4 */}
            <Link href="/szorongasoldas" className="block">
              <div className="bg-white border border-gray-200 rounded-none rounded-tr-xl rounded-br-xl p-6 hover:shadow-md transition-all duration-300 border-l-4 border-l-[#2D3DA2] hover:border-indigo-400 group h-[200px] flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Users className="w-6 h-6 text-blue-700" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-gray-700 mb-2">Mit kezd a szorongásával?</p>
                      <h3 className="font-medium text-gray-800 mb-4 group-hover:text-indigo-700 transition-colors">
                        Szorongásoldás
                      </h3>
                    </div>
                    <div className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm mt-auto">
                      <span>Részletek</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Method 5 */}
            <Link href="/stresszkezeles" className="block">
              <div className="bg-white border border-gray-200 rounded-none rounded-tr-xl rounded-br-xl p-6 hover:shadow-md transition-all duration-300 border-l-4 border-l-[#2D3DA2] hover:border-indigo-400 group h-[200px] flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Users className="w-6 h-6 text-blue-700" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-gray-700 mb-2">
                        Tudja-e, mit tegyen, ha fokozott stressznek van kitéve, kifáradt, kimerült?
                      </p>
                      <h3 className="font-medium text-gray-800 mb-4 group-hover:text-indigo-700 transition-colors">
                        Stresszkezelés
                      </h3>
                    </div>
                    <div className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm mt-auto">
                      <span>Részletek</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Method 6 */}
            <Link href="/lelki-munka-belso-kepekkel" className="block">
              <div className="bg-white border border-gray-200 rounded-none rounded-tr-xl rounded-br-xl p-6 hover:shadow-md transition-all duration-300 border-l-4 border-l-[#2D3DA2] hover:border-indigo-400 group h-[200px] flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Users className="w-6 h-6 text-blue-700" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-gray-700 mb-2">Szeretné megtudni, mit üzennek álmai?</p>
                      <h3 className="font-medium text-gray-800 mb-4 group-hover:text-indigo-700 transition-colors">
                        Lelki munka belső képekkel (imagináció) és álomelemzés
                      </h3>
                    </div>
                    <div className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm mt-auto">
                      <span>Részletek</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Method 7 */}
            <Link href="/rejtett-lelki-utak" className="block">
              <div className="bg-white border border-gray-200 rounded-none rounded-tr-xl rounded-br-xl p-6 hover:shadow-md transition-all duration-300 border-l-4 border-l-[#2D3DA2] hover:border-indigo-400 group h-[200px] flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Users className="w-6 h-6 text-blue-700" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-gray-700 mb-2">
                        Hogyan gazdálkodik lelki erőivel, tudattalanja mély bölcsességével?
                      </p>
                      <h3 className="font-medium text-gray-800 mb-4 group-hover:text-indigo-700 transition-colors">
                        Rejtett lelki utak vizuális megjelenítése, rajz-, szimbólum elemzés
                      </h3>
                    </div>
                    <div className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm mt-auto">
                      <span>Részletek</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Method 8 */}
            <Link href="/pszichiatriai-es-pszichoszomatikus-zavarok" className="block">
              <div className="bg-white border border-gray-200 rounded-none rounded-tr-xl rounded-br-xl p-6 hover:shadow-md transition-all duration-300 border-l-4 border-l-[#2D3DA2] hover:border-indigo-400 group h-[200px] flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Users className="w-6 h-6 text-blue-700" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-gray-700 mb-2">
                        Depressziós? Pánik tünetek gyötrik? Pszichoszomatikus betegsége van?
                      </p>
                      <h3 className="font-medium text-gray-800 mb-4 group-hover:text-indigo-700 transition-colors">
                        Pszichiátriai és pszichoszomatikus zavarok komplex (gyógyszeres és pszichoterápiás) kezelése
                      </h3>
                    </div>
                    <div className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm mt-auto">
                      <span>Részletek</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Specialties Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kiemelt szakterületek</h2>

            <div className="space-y-4">
              <Link
                href="/sportpszichologia"
                className="block bg-white border border-gray-200 rounded-none rounded-tr-xl rounded-br-xl p-6 hover:shadow-md transition-shadow flex justify-between items-center border-l-4 border-l-[#2D3DA2]"
              >
                <span className="text-gray-800">
                  Sportpszichológia, sportolók, élsportolók számára mentális segítségnyújtás
                </span>
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </Link>

              <Link
                href="/alomkozpontu-dinamikus-rovidterapia"
                className="block bg-white border border-gray-200 rounded-none rounded-tr-xl rounded-br-xl p-6 hover:shadow-md transition-shadow flex justify-between items-center border-l-4 border-l-[#2D3DA2]"
              >
                <span className="text-gray-800">Álomközpontú dinamikus rövidterápia</span>
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </Link>

              <Link
                href="/csoportterapia"
                className="block bg-white border border-gray-200 rounded-none rounded-tr-xl rounded-br-xl p-6 hover:shadow-md transition-shadow flex justify-between items-center border-l-4 border-l-[#2D3DA2]"
              >
                <span className="text-gray-800">Csoportterápia - Csoportpszichoterápia</span>
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
