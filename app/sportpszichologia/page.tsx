import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Sportpszichologia() {
  return (
    <main className="min-h-screen bg-[#FDF6F0]">
      <Navbar activePage="modszereim" />

      {/* Header Section with Title and Quote */}
      <section className="bg-[#FDF6F0] py-16">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 md:mb-0">
              Sportpszichiátria, sportolók, élsportolók
              <br />
              számára mentális segítségnyújtás
            </h1>
            <div className="max-w-md">
              <blockquote className="italic text-gray-700">
                "A nehéz feladatok megvalósításához sok idő kell,
                <br />a lehetetlenekhez egy kicsit még több"
                <footer className="text-right mt-2 text-gray-600">/Percy Cerutty/</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="space-y-6 mb-12">
            <p className="text-gray-700">
              A mentális stabilitás szükséges alap! Ahhoz, hogy (él)sportolóként jól teljesítsen, önmagával is jóban
              kell lennie! Nem minden ember sportoló, de minden sportoló ember. Önálló entitás - személyes élményekkel,
              múlttal, jelennel, sebezhetőséggel. Egy (él)sportolónak ugyanúgy lehetnek múltbeli vagy jelenben megélt -
              többek között magánélethez, edzőhöz, az elvárt teljesítményekhez köthető - traumatikus élményei, lelki
              konfliktusai.
            </p>

            <p className="text-gray-700">
              Az (él)sportoló tüneteit, múltját, jelenét ilyenkor többnyire szégyelli, titkolja, sokszor úgy érzi, nem
              engedheti meg, hogy látszódjon rajta a gyengesége. Küzd, a lelke sérült, egyedül van. Ilyenkor "belül"
              segítséget igényel (de sokszor ezt nem tudja kimondani) és valójában segítségre is szorul. Igény esetén
              ebben tudok segítséget nyújtani. Volt élsportolóként a sportolói lét, közeg sem idegen számomra, így át
              tudom élni és érezni a megélt csodákat ugyanúgy, mint a kísérő nehézségeket, bizonytalanságokat,
              alakadást, sebezhetőséget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Jellemző problémakörök, igények, amivel megkeresnek
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  Versenyhelyzetben tapasztalt csökkent vagy várakozásnak nem megfelelő teljesítmény. A sportoló edzések
                  alkalmával és a versenyek pszichés megterhelése alatt elért eredményei jelentősen eltérnek egymástól.
                </li>
                <li>
                  Önértékelési és szorongásos problémák, melyek adott esetben a sportoló sporton kívüli szociális
                  viselkedésére is kihatnak.
                </li>
                <li>Feladat priorizálási kérdések (tanulás / edzés, magánélet / edzés).</li>
                <li>Jövőkép és célok kialakítása és a reális lehetőségek feltérképezése.</li>
                <li>Munkakapcsolat az edzővel és ennek buktatói.</li>
                <li>
                  Kommunikációs defektusok, maladaptív rutinok (hiányos / rossz alkalmazkodás, indulatkezelés, énképet
                  romboló kommunikáció, izoláció).
                </li>
                <li>Burn out</li>
              </ul>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-700 rounded-lg transform translate-x-2 translate-y-2"></div>
                <Image
                  src="/sportpszichologia.png"
                  alt="Sportpszichológia - színes illusztráció"
                  width={500}
                  height={300}
                  className="rounded-lg relative z-10 object-cover max-h-[300px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Sportpszichiátriai szolgáltatások, mentális segítségnyújtás:
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Tanácsadás, konzultáció</li>
                <li>Diagnosztika</li>
                <li>
                  Az ok keresése, a sportoló személyiségének megfelelő terápiás eszköz megtalálása, megtanítása és a
                  rutin kialakítása
                </li>
                <li>Versenyekre történő mentális felkészítés</li>
                <li>Versenyszorongás, teljesítményszorongás csökkentése</li>
                <li>Mentális blokkok oldása</li>
                <li>Stresszkezelés</li>
                <li>Versenyhelyzetekben nyújtott teljesítmény fokozása, stabilizálása</li>
                <li>Mentális tréning</li>
                <li>Csapatépítés, csapatkohézió</li>
                <li>Burn out felismerése, kezelése</li>
                <li>
                  Igény és szükség esetén edzőkkel való konzultáció, egyben edukáció (önismeret, saját viselkedés
                  tudatosítása, a sportolók személyiségtípusának felismerése, adekvát kommunikáció gyakorlása,
                  konfliktuskezelés lehetőségei)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-[1240px] text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Kezdje el a sportpszichológiai felkészülést</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-700">
            Ha Ön sportoló vagy edző, és szeretné javítani a mentális teljesítményét vagy csapata mentális
            felkészültségét, vegye fel velem a kapcsolatot. Szakértő segítségemmel biztonságos környezetben fejlesztheti
            mentális képességeit és érheti el a kívánt teljesítményt.
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
