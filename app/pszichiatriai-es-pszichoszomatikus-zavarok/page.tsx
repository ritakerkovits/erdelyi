import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PszichiatriaiEsPszichoszomatikusZavarok() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar activePage="modszereim" />

      {/* Header Section with Title and Quote */}
      <section className="bg-[#FDF6F0] py-16">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 md:mb-0">
              Pszichiátriai és pszichoszomatikus zavarok
              <br />
              komplex gyógyszeres és
              <br />
              pszichoterápiás kezelése
            </h1>
            <div className="max-w-md">
              <blockquote className="italic text-gray-700">
                "Szerencse énvelem is gyakorta mulat,
                <br />
                Mind édeset, keserűt egyaránt mutat."
                <footer className="text-right mt-2 text-gray-600">/Zrínyi Miklós: Szigeti veszedelem, 1651/</footer>
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
                A pszichiátriai és pszichoterápiás gyógyító tevékenység szorosan összefonódó területét képezik a
                pszichiátriai zavarok, amelyekben a terápiás támadáspont egyaránt irányul a tudásunk mai szintjén
                feltárt biológiai, biokémiai folyamatokra és a lelki valamint kapcsolati működészavarokra. Minden
                mentális rendellenességnek van pszichológiai és szociális vetülete, ezért a komplex gyógyítás az ember
                bio-pszicho-szociális egészére irányul.
              </p>

              <p className="text-gray-700">
                Hasonló a helyzet a stresszbetegségeknél, pszichoszomatikus zavaroknál is, amelyek kiváltásában,
                fenntartásában valamint kiújulásában a lelki tényezőknek meghatározó szerepük van, mégsem tisztán lelki
                eredetűek. Ugyanakkor gyakorta a szervi működések károsodásával járnak (pl.: gyomorfekély, vérző
                vastagbélgyulladás, ischaemiás szívbetegség).
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-700 rounded-lg transform translate-x-2 translate-y-2"></div>
                <Image
                  src="/pszichiatriai-es-pszichoszomatikus-zavarok.png"
                  alt="Pszichoszomatikus zavarok ábrázolása - emberi alak színes rajza"
                  width={500}
                  height={300}
                  className="rounded-lg relative z-10 object-cover max-h-[300px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <p className="text-gray-700">
              Ilyen esetekben a gyógyításnak minden szférára ki kell terjednie és szükséges a különböző kezelésmódok
              összehangolása.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-[1240px] text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Kezdje el a komplex kezelést</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-700">
            Ha Ön pszichiátriai vagy pszichoszomatikus problémákkal küzd, és átfogó, személyre szabott kezelésre van
            szüksége, vegye fel velem a kapcsolatot. Szakértő segítségemmel biztonságos környezetben kezdheti meg a
            gyógyulás útját, amely mind a testi, mind a lelki egészségét helyreállíthatja.
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
