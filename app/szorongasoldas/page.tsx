import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Szorongasoldas() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar activePage="modszereim" />

      {/* Header Section with Title and Quote */}
      <section className="bg-[#FDF6F0] py-16">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 md:mb-0">Szorongásoldás</h1>
            <div className="max-w-md">
              <blockquote className="italic text-gray-700">
                "...boldog a csönd,
                <br />
                ha meghalhat az emberi daltól."
                <footer className="text-right mt-2 text-gray-600">/Weöres Sándor: Boldog/</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section with Image */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-700">
                Minden egészséges ember tud szorongani, ha megfelelően működik a lelkiismerete. Az a szorongás kóros
                mértékű, amely felborítja a testi és lelki egyensúlyunkat és befolyásolja kapcsolati életünket is. Azt a
                szorongást nem kell csökkenteni, amely elősegíti erőink bevetését egy problémahelyzet megoldásában. Az
                azonban már káros és tüneti, ha a szorongás bénulttá és tehetetlenné tesz, elszívja erőinket és
                debilizálja gondolkodásunkat („Se kép, se hang állapot"). Ilyenkor van szükségünk a szorongás
                feloldására különféle pszichológiai módszerek bevetésével.
              </p>

              <p className="text-gray-700">
                Alapvető szorongásoldási lehetőség a relaxáció, amelynek eltérő technikáit alkalmazzuk bizonyos
                személyiségvonásoktól függően. Az a személy, aki inkább az aktivitást, mozgást kedveli, gyorsabban
                megtanulja a progresszív relaxációt, amely aktív testi gyakorlatokon keresztül éri el az izmok
                ellazulását és az ennek következményeként létrejövő lelki megnyugvást.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-700 rounded-lg transform translate-x-2 translate-y-2"></div>
                <Image
                  src="/szorongasoldas.png"
                  alt="Szorongásoldás - fa szimbólum"
                  width={500}
                  height={300}
                  className="rounded-lg relative z-10 object-cover max-h-[300px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <p className="text-gray-700">
              Az inkább testi pihenést, nyugalmat kívánó személy számára előnyösebbek a meditatív típusú ellazító
              módszerek, amelyek belső koncentrációt, szellemi aktivitást kívánnak. Legismertebb eljárás ezek közül az
              autogén tréning. Mivel ez a módszer a szorongásoldó és ellazító eljáráson túl a lelki eredetű testi
              tünetek, az úgynevezett pszichoszomatikus zavarok gyógyításában is fontos szerepet játszik, ezért bővebb
              ismertetésére a stresszkezelés kapcsán kerül sor.
            </p>

            <p className="text-gray-700">
              A szorongás tárgynélküli félelem mivoltából következik, hogy a lelki feltárás útjait is célszerű
              végigjárnunk megkeresve azokat a mély, rejtett, elfojtott okokat, sokszor koragyermekkori élményeket,
              amelyekből a szorongás ered.
            </p>

            <p className="text-gray-700">Hasznos, ha együtt alkalmazzuk a testi lazítást az okok lelki feltárásával.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-[1240px] text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Kezdje el a szorongás kezelését</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-700">
            Ha szeretné megtanulni kezelni a szorongását és visszanyerni belső nyugalmát, vegye fel velem a kapcsolatot.
            Szakértő segítségemmel biztonságos környezetben sajátíthatja el a szorongásoldás különböző technikáit és
            feltárhatja a szorongás mélyebb okait.
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
