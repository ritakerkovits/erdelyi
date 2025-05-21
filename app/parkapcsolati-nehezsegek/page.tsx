import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ParkapcsolatiNehezsegek() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar activePage="modszereim" />

      {/* Header Section with Title and Quote */}
      <section className="bg-[#FDF6F0] py-16">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 md:mb-0">Párkapcsolati nehézségek rendezése</h1>
            <div className="max-w-md">
              <blockquote className="italic text-gray-700">
                "A gyepet nézem, talán a gyepet.
                <br />
                Mozdul a fű. Szél vagy zápor talán
                <br />
                Vagy egyszerűen az, hogy létezél
                <br />
                Mozditja meg itt és most a világot."
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
                Életünk legfontosabb színtere a család, ezen belül a párkapcsolat. Minél közelebb állunk érzelmileg
                valakihez, annál szabadabban tudjuk kinyilvánítani, mi tetszik és mi nem, s hogyan viszonyulunk hozzá.
                Például haraggal, indulattal, kritikával, szeretettel, aggodalommal, féltéssel. Ezért a párkapcsolat, a
                családi élet lehet „harctér és békesziget".
              </p>

              <p className="text-gray-700">
                Ha közömbösek volnának szeretteink, akkor sohasem lenne konfliktusunk, viszont közünk sem lenne igazából
                egymáshoz. Amíg csatázni tudunk, addig van érzelmi tőkénk és addig van esély, hogy elromlott
                viszonyainkon változtatni tudjunk.
              </p>

              <p className="text-gray-700">
                A párkonzultáció és terápia éppen elmérgesedett viszonyaikba belépve tud segíteni. Megtanít arra, hogy
                kilépjenek vitáik rossz forgatókönyvéből, új módon tudjanak egymással kommunikálni, közös ügyeikben
                tudjanak közös célokat kitűzni és érzelmileg is kedvező változást érhessenek el egymáshoz való
                viszonyukban.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-700 rounded-lg transform translate-x-2 translate-y-2"></div>
                <Image
                  src="/parkapcsolati-nehezsegek.png"
                  alt="Párkapcsolati nehézségek - két arc szobor"
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Kezdje el a párkapcsolati problémák megoldását</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-700">
            Ha szeretné javítani párkapcsolatát és megoldani a felmerülő nehézségeket, vegye fel velem a kapcsolatot.
            Szakértő segítségemmel biztonságos környezetben dolgozhatnak a kapcsolat javításán és a kommunikáció
            fejlesztésén.
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
