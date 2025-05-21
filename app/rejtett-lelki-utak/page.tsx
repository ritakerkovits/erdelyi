import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function RejtettLelkiUtak() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar activePage="modszereim" />

      {/* Header Section with Title and Quote */}
      <section className="bg-[#FDF6F0] py-16">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 md:mb-0">
              Rejtett lelki utak vizuális megjelenítése,
              <br />
              rajz-, szimbólumelemzés
            </h1>
            <div className="max-w-md">
              <blockquote className="italic text-gray-700">
                "Minden, ami látható, abból lett, ami láthatatlan."
                <footer className="text-right mt-2 text-gray-600">/József Attila/</footer>
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
                A tudattalan lelki tartalmak megismerésének egyik leghatékonyabb módja a vizuális megjelenítés. A
                rajzok, szimbólumok olyan mély tartalmakat hozhatnak felszínre, amelyek szavakkal nehezen vagy
                egyáltalán nem kifejezhetők. A rajzolás során olyan lelki tartalmak kerülhetnek a papírra, amelyek a
                tudatos gondolkodás számára rejtve maradnak, mégis jelentős hatással vannak mindennapi életünkre,
                döntéseinkre, érzelmeinkre.
              </p>

              <p className="text-gray-700">
                A rajz- és szimbólumelemzés során nem a művészi kivitelezés a lényeg, hanem az önkifejezés. Bárki képes
                arra, hogy egyszerű formákkal, vonalakkal, színekkel kifejezze belső világát. A terápiás folyamatban
                ezek a vizuális megnyilvánulások értékes információkat hordoznak, amelyek segítenek a rejtett lelki
                tartalmak feltárásában és feldolgozásában.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-700 rounded-lg transform translate-x-2 translate-y-2"></div>
                <Image
                  src="/rejtett-lelki-utak.png"
                  alt="Rejtett lelki utak vizuális megjelenítése - szimbolikus rajz"
                  width={500}
                  height={300}
                  className="rounded-lg relative z-10 object-cover max-h-[300px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <p className="text-gray-700">
              A szimbólumok egyetemes és személyes jelentésrétegekkel rendelkeznek. Vannak olyan archetipikus
              szimbólumok, amelyek az emberiség kollektív tudattalanjában gyökereznek, és kultúráktól függetlenül
              hasonló jelentéssel bírnak. Ugyanakkor minden ember egyedi módon kapcsolódik ezekhez a szimbólumokhoz,
              saját élettörténete, tapasztalatai alapján. A terápiás folyamatban mindkét jelentésréteget figyelembe
              vesszük.
            </p>

            <p className="text-gray-700">
              A rajz- és szimbólumelemzés különösen hatékony lehet olyan esetekben, amikor a verbális kifejezés
              nehézségekbe ütközik, például traumák feldolgozásánál, vagy amikor a tudattalan tartalmak erős
              ellenállással találkoznak. A vizuális megjelenítés megkerüli ezeket az akadályokat, és közvetlen utat nyit
              a tudattalan felé.
            </p>

            <p className="text-gray-700">
              A terápiás folyamatban különböző technikákat alkalmazunk, mint például a szabad rajzolás, irányított
              rajzfeladatok, mandala-készítés, vagy a homokjáték. Ezek a módszerek segítenek abban, hogy a belső képek,
              érzések, konfliktusok láthatóvá váljanak, és így feldolgozhatóvá, integrálhatóvá váljanak a személyiség
              egészébe.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-[1240px] text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Fedezze fel rejtett lelki útjait</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-700">
            Ha szeretné felfedezni tudattalanja rejtett tartalmait, és mélyebb önismeretre vágyik a vizuális kifejezés
            eszközeivel, vegye fel velem a kapcsolatot. Szakértő segítségemmel biztonságos környezetben fedezheti fel
            belső világát és indulhat el a személyes növekedés útján.
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
