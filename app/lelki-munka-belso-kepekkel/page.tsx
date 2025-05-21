import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LelkiMunkaBelsoKepekkel() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar activePage="modszereim" />

      {/* Header Section with Title and Quote */}
      <section className="bg-[#FDF6F0] py-16">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 md:mb-0">
              Lelki munka belső képekkel
              <br />
              Imagináció
              <br />
              és álomelemzés
            </h1>
            <div className="max-w-md">
              <blockquote className="italic text-gray-700">
                "A hullámok, a hullámok, tenger-habból hegy meg árok,
                <br />
                fodrosulnak a hullámok, a hullámok, mint az álmok,
                <br />
                part-szegélyről visszahullnak a hullámok, a hullámok"
                <footer className="text-right mt-2 text-gray-600">/Weöres Sándor: Tengermozgás/</footer>
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
                Kétfajta gondolkodásra vagyunk képesek. Az egyik az éber tudati racionális gondolkodás, amely képes az
                absztrakcióra és alá van rendelve a valóságtörvényeknek. A másik gondolkodási lehetőségünk a konkrét,
                szemléletes, érzékletes, élményvezérelt úgynevezett szimbolikus gondolkodás. Ez túlnyomóan képekkel
                történik és az érzékszervek erőteljesen bevonódnak a képi-képzeleti gondolkodás folyamatába. Ehhez
                azonban belső koncentrációra, erőteljes befelé figyelésre, azaz tudatállapot módosításra van szükségünk.
              </p>

              <p className="text-gray-700">
                A természet is gondoskodik olyan tudatállapot módosításról, amelyben a racionális éber tudati
                gondolkodás ki van kapcsolva. Ilyenkor alszunk és álomképekkel gondolkodunk.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-700 rounded-lg transform translate-x-2 translate-y-2"></div>
                <Image
                  src="/lelki-munka-belso-kepekkel.png"
                  alt="Lelki munka belső képekkel - szimbolikus rajz"
                  width={500}
                  height={300}
                  className="rounded-lg relative z-10 object-cover max-h-[300px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <p className="text-gray-700">
              „Elmerülési" állapotnak szoktuk nevezni azt a folyamatot, amelyben a figyelmet belső képekre irányítva
              elmélyülünk az imaginációban és az úgynevezett éber álom folyamatokban. Maga az imagináció az imago „="
              belső kép jelentéséből ered. Tudományosan kidolgozott módszerek állnak a rendelkezésünkre olyan képek
              sorozatából, amelyek lelki életünkre megnyugtatólag, gyógyítólag hatnak és amelyek megidézésével tudatunk
              mélyén jelentős változásokat tudunk elindítani.
            </p>

            <p className="text-gray-700">
              A lelki élet spontán imaginatív terméke az álom, amely képekben beszéli el mindazt, amit szavakban nem
              tudunk közölni. Tudattalan világunkhoz vezető „királyi út" (álom) megfejtése az álomelemzés, melyről a
              későbbiekben még szólok (lsd. Kiemelt terület).
            </p>

            <p className="text-gray-700">
              Az érzelmi élet különböző súlyossági fokú zavaraiban megnyilvánuló neurózisok a belső képekkel,
              szimbólumokkal végzett munkára igen jól reagálnak. Olyan érzelmi változásokat tudnak előidézni, amelyek
              nem pusztán a testi tünetek csitulását eredményezik, hanem szemléletünk és életfilozófiánk kedvező
              változásában is segítenek.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-[1240px] text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Kezdje el a belső képekkel való munkát</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-700">
            Ha szeretné felfedezni a belső képek és álmok világát, és megtanulni, hogyan használhatja ezeket lelki
            egészsége és személyes fejlődése érdekében, vegye fel velem a kapcsolatot. Szakértő segítségemmel
            biztonságos környezetben fedezheti fel tudatalattijának üzeneteit.
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
