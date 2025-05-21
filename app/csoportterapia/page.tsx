import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Csoportterapia() {
  return (
    <main className="min-h-screen bg-[#FDF6F0]">
      <Navbar activePage="modszereim" />

      {/* Header Section with Title and Quote */}
      <section className="bg-[#FDF6F0] py-16">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 md:mb-0">Csoportterápia – csoportpszichoterápia</h1>
            <div className="max-w-md">
              <blockquote className="italic text-gray-700">
                "Szemem tavában magadat látod:
                <br />
                Mint tükröd, vagyok leghűbb barátod.
                <br />
                Mint tükröd, vagyok leghűbb barátod:
                <br />
                Szemem tavában magadat látod"
                <footer className="text-right mt-2 text-gray-600">
                  /Weöres Sándor: Ki minek gondol, az vagyok annak.../
                </footer>
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
                A pszichológia alaptétele, hogy az ember veleszületetten társas lény. Szükségünk van egymás figyelmére,
                közelségére, megértésére és az érzelmi kapcsolatok megélésére. Az együttes élmény elmélyíti a
                tapasztalást, felfokozza a megértési képességet és erősíti a közösségi érzéseket. A csoportterápia
                ezeket a csoportban rejlő erőket használja fel különböző témák vagy közös feladatok feldolgozásán
                keresztül.
              </p>

              <p className="text-gray-700">
                A csoportpszichoterápia pedig továbblép és a csoporttagok feltárják egymás előtt lelki problémáikat,
                amelyek a zárt és védett lélektani térben megbeszélésre, feldolgozásra kerülnek. A kölcsönös bizalom,
                megértés és támogatás légkörében olyan lelki erők szabadulnak fel és lépnek működésbe, amelyek az
                állapotrendeződést és a gyógyulást hatékonyabbá és eredményesebbé teszik.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-700 rounded-lg transform translate-x-2 translate-y-2"></div>
                <Image
                  src="/csoportterapia.png"
                  alt="Csoportterápia - figurák egy asztal körül ötletelnek"
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Kezdje el a csoportterápiát</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-700">
            Ha szeretné megtapasztalni a csoportterápia előnyeit és fejleszteni társas készségeit, vegye fel velem a
            kapcsolatot. Szakértő vezetésemmel biztonságos környezetben dolgozhat személyes fejlődésén és kapcsolatai
            javításán.
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
