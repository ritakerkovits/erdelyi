import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Pszichoterapia() {
  return (
    <main className="min-h-screen bg-[#FDF6F0]">
      <Navbar activePage="pszichoterapia" />

      {/* Header Section */}
      <section className="bg-[#FDF6F0] py-16">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <h1 className="text-3xl font-bold text-center text-[#333333] mb-12">Mire szolgál a pszichoterápia</h1>
        </div>
      </section>

      {/* When to see a psychotherapist */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-[#333333] mb-4">Mikor érdemes pszichoterapeutához fordulni</h2>
              <p className="text-[#444444] mb-6">
                Amikor aktuális lelki gondjai, tünetei megnehezítik az életvezetését és úgy érzi, hogy szüksége volna
                segítségre, akkor érdemes pszichoterapeutához fordulnia. A szakember nem hétköznapi módon foglalkozik az
                Ön problémáival, hanem azt a módszert választja, amivel az leginkább és leghamarabb megoldható.
              </p>
              <p className="text-gray-700 mb-6">
                A lelki problémák nyomásában tehetetlennek érzi magát. Jelen állapotát, de a jövőjét is kilátástalannak
                érezheti. Úgye ismerősek ezek a gondolatok: „Nem ismerek önmagamra...Mintha nem én lennék...Nem tudom mi
                lesz velem... Tehetetlen vagyok...Kihez forduljak ? Ki segíthetne rajtam?"
              </p>
            </div>
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">
                  "Mindig a holnapra mosolygok,
                  <br />
                  Elvágyom onnan, ahol bolygok.
                  <br />
                  Úgy vágytam ide s most már szállnék,
                  <br />
                  Ón, én bolond, bús, beteg árnyék."
                </p>
                <p className="text-gray-600 text-right text-sm">/Ady Endre: A kék tenger partján/</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to favorably change your condition */}
      <section className="py-12 bg-indigo-700 text-[#F5F5F5]">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <h2 className="text-xl font-bold mb-4">Hogyan lehet az állapotán kedvezően változtatni</h2>
          <p className="mb-4">
            Emberileg érthető az a kívánság, hogy egy-kettőre szűnjön meg a tünet és oldódjon meg a probléma. Csakhogy a
            tünetek olyan következmények, amelyeknek előtörténetük van. Látszólagos egyensúlyt teremtve védenek attól,
            hogy egy mélyebb, elfojtott, elfelejtett lelki problémával szembesüljön, pedig éppen ez az oka a tüneteknek.
            A tünetek lekötik gondolatait, felhasználják energiáit és az így okozott szenvedéssel kénytelen törődni, nem
            a mögötte meghúzódó okokkal. Előfordulhat, hogy friss traumatikus életesemény szakít fel régi lelki sebeket,
            nem ritkán pedig éveken át hordozza lelki sérüléseit anélkül, hogy tudná, miért kell így szenvednie.
          </p>
        </div>
      </section>

      {/* What is the goal of psychotherapy */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl font-bold text-[#333333] mb-4">Mi is tehát a pszichoterápia célja</h2>
              <p className="text-gray-700 mb-6">
                Kétségkívül segít a tünetek megszüntetésében is. Még inkább alkalmas azonban arra, hogy feltárja a
                mélyen fekvő okokat, összefüggéseket és a tudatosítás fényében uralmat és kontrollt szerezzen a
                tüneteket okozó erők felett.
              </p>
              <p className="text-gray-700 mb-4">Szükséges tehát, hogy:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
                <li>Ismerd meg Önmagad!</li>
                <li>Fogadd el Önmagad!</li>
                <li>Barátkozz meg Önmagaddal!</li>
                <li>Légy fontos Önmagadnak!</li>
                <li>Nyújts biztonságot Önmagadnak!</li>
                <li>Vezésd Önmagad!</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/psz-OreIDRO0cA0Ok1zHNtXPWI9v1OXX8Z.png"
                  alt="Peaceful beach scene with beautiful cloud patterns"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basic requirements for successful psychotherapy */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <h2 className="text-xl font-bold text-[#333333] mb-4">Mik a sikeres pszichoterápia alapfeltételei</h2>
          <p className="text-gray-700 mb-4">
            A kimondott és ki nem mondott érzéseknek, lélektani történéseknek súlya van és az eredményes terápiához a
            terapeuta önmagában nem elég. A sikeres pszichoterápia, lélektani segítségnyújtás alapja ugyanis a
            szenvedésnyomáson túl a motiváció és a bizalom. Az adott egyén és a terapeuta egy terápiás egységben közösen
            gondolkodik. Közösen egy célért. Az együttműködés, az ideális terápiás kapcsolat kiépítése az eredményes
            munka záloga.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
