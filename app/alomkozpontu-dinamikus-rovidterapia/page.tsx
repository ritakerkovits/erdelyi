import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AlomkozpontuDinamikusRovidterapia() {
  return (
    <main className="min-h-screen bg-[#FDF6F0]">
      <Navbar activePage="modszereim" />

      {/* Header Section with Title and Quote */}
      <section className="bg-[#FDF6F0] py-16">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 md:mb-0">Álomközpontú dinamikus rövidterápia</h1>
            <div className="max-w-md">
              <blockquote className="italic text-gray-700">
                "Akkor tűn el igaz világunk,
                <br />
                ha reggelenként ébredünk,
                <br />s akkor igaz valónkba látunk,
                <br />
                ha álmokat néz hunyt szemünk?"
                <footer className="text-right mt-2 text-gray-600">/Kosztolányi Dezső: Plato olvasása közben/</footer>
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
                Petőfi jól ismert verse („Jövendölés") pontosan fogalmazza meg azt az igazságot, amit a szakemberek
                régóta tudnak és a tudományos kutatások is bizonyítanak: Álmaink képi nyelven fogalmazzák meg és fejezik
                ki rejtett vágyainkat és magunkban hordozott feszültségeinket.
              </p>

              <p className="text-gray-700">
                Az álombeszéd nyelve a kép, amely szimbolikusan jeleníti meg érzelmi tudatunk üzenetét. Ez a nyelv
                sűrítetten hordozza mondanivalóját és sajátos törvényszerűségeket fedezhetünk fel benne. Ezeket az
                álomelemzés során megismerjük és megtanuljuk használni.
              </p>

              <p className="text-gray-700">
                Az álom bölcs üzeneteket tud kifejezni és megjeleníteni szervezetünk egészségéről vagy betegségéről,
                lelki problémáinkról és kapcsolati zavarainkról. Új rálátásokhoz és megoldásokhoz segít bennünket.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-700 rounded-lg transform translate-x-2 translate-y-2"></div>
                <Image
                  src="/alomkozpontu-terapia.png"
                  alt="Álomközpontú terápia - szimbolikus rajz"
                  width={500}
                  height={300}
                  className="rounded-lg relative z-10 object-cover max-h-[300px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <p className="text-gray-700">
              Az álomelemzés módszerét ebben a különleges terápiás folyamatban magunk is megtanuljuk, ugyanakkor ezzel a
              módszerrel megértjük a legrejtettebb lelki feszültségeinket is. Ennek a terápiának az a haszna, hogy a
              képek „rejtjeles üzeneteit" megtanuljuk megfejteni és ezt a tudást a továbbiakban magunk is
              felhasználhatjuk.
            </p>

            <p className="text-gray-700">
              Az álomelemző rövidterápia kizárólag álmokkal dolgozik, ezért intenzív és koncentrált lelki munkát kíván
              és a tapasztalat szerint segít rövid idő alatt feltárni és „kibogozni" a lelki problémákat.
            </p>
          </div>
        </div>
      </section>

    
      {/* Call to Action Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-[1240px] text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Kezdje el az álomközpontú terápiát</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-700">
            Ha szeretné megérteni álmai üzenetét és mélyebb önismeretre vágyik, vegye fel velem a kapcsolatot. Szakértő
            segítségemmel biztonságos környezetben fedezheti fel tudatalattija üzeneteit és indulhat el a személyes
            növekedés útján.
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
