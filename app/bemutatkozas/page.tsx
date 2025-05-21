import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Bemutatkozas() {
  return (
    <main className="min-h-screen bg-[#FDF6F0]">
      <Navbar activePage="bemutatkozas" />

      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <h1 className="text-2xl font-bold text-[#333333] mb-6">Bemutatkozás</h1>

          {/* Introduction and Photo */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <p className="text-[#444444] mb-4">
                1993-ban végeztem a Semmelweis Egyetem Általános Orvostudományi Karán. Kezdettől fogva pszichiátriai és
                pszichoterápiás területen dolgozom. 2020 óta vezetem az Országos Sportegészségügyi Intézet (Sportkórház)
                Sportmentálhigiénés (Sportpszichiátriai, Sportpszichológiai) Centrumát. 2001 óta folytatok
                magánrendelést. Szakképesítéseim: pszichiátria (1999), pszichoterápia (2003), pszichiátriai orvosi
                rehabilitáció (2005).
              </p>
              <p className="text-[#444444] mb-4">
                Sokéves szakmai tapasztalattal rendelkezem az életvezetési nehézségek, (pár)kapcsolati konfliktusok,
                szorongás, depresszió, pánikzavar, stresszkezelési nehézségek, önértékelési zavarok terén. A tünetek
                hátterében meghúzódó lélektani történések feltárásában és átdolgozásában felajánlom szakmai
                segítségemet. Önismereti célból is fordulhatnak hozzám.
              </p>
              <p className="text-[#444444] mb-4">
                Volt sportolóként a sportolói lét, közeg nem idegen számomra, így át tudom élni és érezni a megélt
                csodákat ugyanúgy, mint a kísérő nehézségeket, bizonytalanságokat, elakadást, sebezhetőséget. A
                valójában elérhető teljesítmény lelki egyensúly nélkül nem valósítható meg, így a sportolói teljesítmény
                alapja a mentális jóllét. A lelki egyensúly elérése és a megteremtett harmónia fenntartása
                megkerülhetetlen. Igény esetén ebben tudok segítséget nyújtani sportolóknak / élsportolóknak.
              </p>
              <p className="text-[#444444] mb-4">
                Terápiás módszereim: feltáró valamint probléma fókuszú egyéni pszichoterápia, álomközpontú rövid
                dinamikus terápia, önismeret, mentális tréning, relaxáció, autogén tréning. Igény esetén terápiás
                kiscsoport foglalkozás (verbális szabad interakciós kiscsoport), melynek célja az önreflexiós készség
                növelése, az elakadások feltárása, az erőforrások erősítése, a személyközi kapcsolatok minőségének
                javítása, ezzel a (csapat)kohézió megteremtése, megerősítése.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-700 transform translate-x-4 translate-y-4"></div>
                <Image
                  src="/dr-erdelyi-kalman-new.png"
                  alt="Dr. Erdélyi Kálmán"
                  width={300}
                  height={400}
                  className="relative z-10 object-cover"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-gray-800">Dr. Erdélyi Kálmán</h3>
                  <p className="text-sm text-gray-600">Pszichiáter</p>
                  <p className="text-sm text-gray-600">Pszichoterapeuta</p>
                  <p className="text-sm text-gray-600">Pszichiátriai rehabilitációs szakorvos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-[#333333] mb-6">Szakmai Tapasztalat</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <tbody>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-3 px-4 text-[#444444] w-1/4">1994 - 1995</td>
                    <td className="py-3 px-4 text-[#444444]">Országos Pszichiátriai és Neurológiai Intézet</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-[#444444]">1996 - 1997</td>
                    <td className="py-3 px-4 text-[#444444]">Massillon Psychiatric Center, Ohio, USA</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-3 px-4 text-[#444444] ">1997 - 2000</td>
                    <td className="py-3 px-4 text-[#444444]">
                      Petz Aladár Megyei Kórház III. sz. Pszichiátriai oszt., Győr
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-[#444444]">2000 - 2009</td>
                    <td className="py-3 px-4 text-[#444444]">
                      OPNI (OORI) Tündérhegyi Pszichoszomatikus és Pszichoterápiás Rehabilitációs Osztály
                      <br />
                      2005-től részlegvezető helyettes, 2007-től adjunktus
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-3 px-4 text-[#444444]">2009 - 2010</td>
                    <td className="py-3 px-4 text-[#444444]">
                      Egyesített Szent István és Szent László Kórház- Rendelőintézet Merényi Gusztáv Kórház,
                      <br />
                      Pszichiátriai és Addiktológiai Rehabilitációs Osztály, Részlegvezető.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-[#444444]">2010 - 2020</td>
                    <td className="py-3 px-4 text-[#444444]">
                      Újpesti Egészségügyi Nonprofit Kft Mentálhigiénés Gondozóintézet.
                      <br />
                      Gondozóvezető főorvos
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-3 px-4 text-[#444444]">2020 -</td>
                    <td className="py-3 px-4 text-[#444444]">
                      Országos Sportegészségügyi Intézet (OSEI) Klinikai Szakpszichológiai és Pszichiátriai
                      Szakrendelés.
                      <br />
                      Vezető főorvos.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-[#444444]">2001 -</td>
                    <td className="py-3 px-4 text-[#444444]">
                      Szakambulans ellátás valamint pszichiátriai-pszichoterápiás magánorvosi tevékenység
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Qualifications and Memberships */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-100 rounded-[10px] p-5">
              <h2 className="text-xl font-bold text-[#333333] mb-6">Végzettségek</h2>
              <ul className="space-y-2">
                <li className="text-[#444444]">1993: Semmelweis Egyetem ÁOK</li>
                <li className="text-[#444444]">1999: pszichiátria szakvizsga</li>
                <li className="text-[#444444]">2003: pszichoterápia szakvizsga</li>
                <li className="text-[#444444]">2005: pszichiátriai orvosi rehabilitáció szakvizsga</li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-[10px] p-5">
              <h2 className="text-xl font-bold text-[#333333] mb-6">Tudományos társasági tagság</h2>
              <ul className="space-y-2">
                <li className="text-[#444444]">Magyar Pszichiátriai Társaság</li>
                <li className="text-[#444444]">Dinamikus Rövidterápiás Egyesület és Alkotó Műhely (DREAM)</li>
                <li className="text-[#444444]">Magyar Pszichiátriai Társaság - Sportlélektani Szekció</li>
              </ul>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xl font-bold text-[#333333] mb-6">Ellátás nyelve</h2>
            <ul className="space-y-2">
              <li className="text-[#444444]">Magyar</li>
              <li className="text-[#444444]">Angol</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
