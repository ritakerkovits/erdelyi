import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EletvezetesiTanacsadas() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar activePage="modszereim" />

      {/* Header Section with Title and Quote */}
      <section className="bg-[#FDF6F0] py-16">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 md:mb-0">Életvezetési tanácsadás</h1>
            <div className="max-w-md">
              <blockquote className="italic text-gray-700">
                "Imádom a határozatlant, a törékeny hangokat és színeket.
                <br />
                Mindazt, ami remeg, hullámzik és borzong és csillog.
                <br />A hajat és a szemet, a fátyolat, a selymet
                <br />
                És a törékeny formák szellemíségét."
                <footer className="text-right mt-2 text-gray-600">/Albert Samain: Dilection/</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section with Single Image */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-700">
                Az elnevezésben foglalt „tanácsadás" kifejezés azt a látszatot keltheti, hogy életének megoldatlan
                problémáira a terapeuta tudja a biztos választ és ő az, aki ezt meg is mondja önnek. A tanácsadás
                azonban valójában „tanácskozást", közös tanakodást jelent.
              </p>

              <p className="text-gray-700">
                Az ember önmagában örvényszerűen és kiúttalanul forog saját problémáiban. Aki kívülről belép, az
                megszakítja a terméketlen spekulációkat. A terapeuta pedig éppen azt tudja, hogy mikor, milyen módon
                érdemes belépni és elősegíteni azt, hogy felszabaduljon a sokféle megoldási ötlet. Így terápiás
                segítséggel önmaga talál rá a saját útjára és megoldására.
              </p>

              <p className="text-gray-700">
                Ahogyan másnak a cipője nem jó a lábunkra, úgy mások ötleteit és javaslatait sem tudjuk eredményesen
                felhasználni. Amíg saját ötleteinkből használható cselekvési terv születik, szükség van kiérlelő
                folyamatra. Ezt az utat nevezzük életvezetési tanácsadásnak.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-700 rounded-lg transform translate-x-2 translate-y-2"></div>
                <Image
                  src="/eletvezetesi-tanacsadas.png"
                  alt="Életvezetési tanácsadás - közös útkeresés"
                  width={500}
                  height={300}
                  className="rounded-lg relative z-10 object-cover max-h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-[1240px] text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Kezdje el az életvezetési tanácsadást</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-700">
            Ha úgy érzi, hogy elakadt életének valamely területén, vagy nehezen talál megoldást problémáira, vegye fel
            velem a kapcsolatot. Közös munkával segítek megtalálni az Ön számára legmegfelelőbb utat.
          </p>
          <a
            href="/kapcsolat"
            className="inline-block bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-800 transition-colors"
          >
            Kapcsolat felvétel
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
