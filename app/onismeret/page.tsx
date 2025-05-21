import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Onismeret() {
  return (
    <main className="min-h-screen bg-[#FDF6F0]">
      <Navbar activePage="modszereim" />

      {/* Header Section with Title and Quote */}
      <section className="bg-[#FDF6F0] py-16">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-3xl font-bold text-[#333333] mb-6 md:mb-0">Önismeret</h1>
            <div className="max-w-md">
              <blockquote className="italic text-gray-700">
                "Jaj, be szép, hogy minden Való szép,
                <br />
                Jaj, be szép a Szép."
                <footer className="text-right mt-2 text-gray-600">/Ady Endre: Szép a Szép/</footer>
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
              <p className="text-[#444444]">
                Általános vélemény, hogy az önismeret arra a kérdésre válaszol, „milyen vagyok?". Ez azonban tévedés és
                leegyszerűsítés. Az emberi viselkedés hosszú tanulás eredménye és ezért az önismeret igazi kérdése:
                „hogyan váltam ilyenné?"
              </p>

              <p className="text-[#444444]">
                Általában "a másiktól" várjuk el, hogy változzon meg, pedig ezt mindig saját magunknál kell kezdenünk.
                Elhatározásra vagy parancsra azonban épp úgy nem változunk meg, mint ahogyan az újévi fogadalmainkat sem
                tudjuk teljesíteni. Az önismereti munka azt jelenti, hogy fokról fokra egyre jobban megismerjük
                viselkedésünk mozgatórugóit és azokat a gyengéinket, amelyek a nem kívánt viselkedést előidézik. A
                változás leheletfinoman, észrevétlenül történik, melyet környezetünk pozitív visszajelzéseiből is
                érezhetünk.
              </p>

              <p className="text-[#444444]">
                Azt pedig, hogy ezen az úton hogyan lehet végighaladni, megtudhatja, ha kipróbálja, milyen is egy ilyen
                folyamatban benne lenni.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-700 rounded-lg transform translate-x-2 translate-y-2"></div>
                <Image
                  src="/onismeret.jpeg"
                  alt="Spirális lépcső - az önismeret útja"
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
          <h2 className="text-2xl font-bold text-[#333333] mb-6">Kezdje el önismereti útját</h2>
          <p className="mb-8 max-w-2xl mx-auto text-[#444444]">
            Ha szeretné jobban megismerni önmagát és elindulni az önfelfedezés útján, vegye fel velem a kapcsolatot.
            Szakértő segítségemmel biztonságos környezetben fedezheti fel belső világát és indulhat el a személyes
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
