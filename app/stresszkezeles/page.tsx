import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Stresszkezeles() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar activePage="modszereim" />

      {/* Header Section with Title and Quote */}
      <section className="bg-[#FDF6F0] py-16">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 md:mb-0">Stresszkezelés</h1>
            <div className="max-w-md">
              <blockquote className="italic text-gray-700">
                "Szökik a kód, futok utána,
                <br />
                szökik a kód, gyorsabb a lába.
                <br />
                Kódból a kód, kódból a lába
                <br />
                Amíg test vagy, mért futsz utána ?"
                <footer className="text-right mt-2 text-gray-600">/Zelk Zoltán: Ne siess!/</footer>
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
                A stressz szokványos jelentése szerint olyan történés, amikor a minket érő környezeti behatásra nem
                tudunk megfelelően reagálni és tehetetlenül beszorulunk egy akcióra felkészült, de cselekvőképtelen
                állapotba. A tehetetlen beszorultság maga a tüneti szorongás ennek számos vegetatív idegrendszeri
                megjelenési formájával (pl.: álulásszerű fizikai rosszullét, szív és keringési rendszer zavarai, pánik
                tünetek, megsemmisüléstől való félelem). A szervezeti küzdőhormonok (stresszhormonok pl.: adrenalin,
                noradrenalin, kortizol) szimpatikus idegrendszeri aktivitást tartanak fenn, amely a nyugtalan
                felajzottságért és szorongásért felelős.
              </p>
              <p className="text-gray-700">
                Ezért a stresszkezelésben meg kell tanulnunk a magas feszültségi szint csökkentését és a behatásokra
                reagálás mértékének tompítását.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-700 rounded-lg transform translate-x-2 translate-y-2"></div>
                <Image
                  src="/stresszkezeles.png"
                  alt="Stresszkezelés - emberek mozgásban"
                  width={500}
                  height={300}
                  className="rounded-lg relative z-10 object-cover max-h-[300px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <p className="text-gray-700">
              A sokféle lehetőség közül az autogén tréninget emelem ki, amely éppen a stresszben szélsőségesen működő
              vegetatív idegrendszer működési harmonizációjára törekszik. Leginkább ellazító módszerként ismeretes,
              pedig többre képes, mert nem csak megnyugtat és feszültséget old, hanem módszeresen programozza a
              legfontosabb vegetatív működéseket és megtanít a stresszállapotok hatásainak szervezeti csökkentésére.
            </p>

            <p className="text-gray-700">
              Hat gyakorlatból áll, amelyet rendszeres gyakorlással szükséges elsajátítani. Minden gyakorlat 2 hét
              tréning időt igényel, így 3 hónap alatt lehet a módszer birtokába jutni. Az autogén tréning lehetővé teszi
              az izomzat ellazítását, a szív és keringési rendszer egészséges működésének elérését, a légzés
              tökéletesítését és az egészséges légzéssel elérhető belső szervezeti folyamatok kedvező megváltoztatását,
              a zsigeri vegetatív működések harmonizációját és a szellemi kipihentség és felfrissülés állapotának
              elérését.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-[1240px] text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Kezdje el a stresszkezelést</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-700">
            Ha szeretné megtanulni kezelni a stresszt és elsajátítani az autogén tréning technikáit, vegye fel velem a
            kapcsolatot. Szakértő segítségemmel biztonságos környezetben sajátíthatja el a stresszkezelés különböző
            módszereit és javíthatja életminőségét.
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
