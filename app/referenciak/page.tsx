"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

interface TestimonialProps {
  name: string
  title: string
  achievements: string[]
  testimonial: string
  imagePosition: "left" | "right"
  imageSrc?: string
}

const Testimonial = ({
  name,
  title,
  achievements,
  testimonial,
  imagePosition,
  imageSrc,
}: TestimonialProps & { imageSrc?: string }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  // Show only first 150 characters when collapsed
  const previewText = testimonial.substring(0, 150) + (testimonial.length > 150 ? "..." : "")

  return (
    <div className="bg-white rounded-xl p-5 shadow-md mb-8 w-full max-w-[1240px] mx-auto">
      <div className={`grid md:grid-cols-3 gap-6 ${imagePosition === "left" ? "" : "md:grid-flow-dense"}`}>
        <div className={`md:col-span-1 ${imagePosition === "right" ? "md:col-start-3" : ""}`}>
          {imageSrc ? (
            <div className="w-full h-[200px] overflow-hidden rounded-lg">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={`${name} portrait`}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="border border-gray-200 rounded-lg w-full h-[200px] flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>
        <div className={`md:col-span-2 ${imagePosition === "right" ? "md:col-start-1" : ""}`}>
          <h2 className="text-xl font-medium text-gray-800 mb-1">{name}</h2>
          <p className="text-gray-600 text-sm mb-3">{title}</p>

          {achievements.length > 0 && (
            <ul className="list-disc pl-5 text-sm text-gray-700 mb-4">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          )}

          <div className="text-sm text-gray-700 mb-4">
            <p>{expanded ? `"${testimonial}"` : `"${previewText}"`}</p>
          </div>

          <button className="text-indigo-700 text-sm hover:underline flex items-center" onClick={toggleExpanded}>
            <span>{expanded ? "Mutass kevesebbet" : "Mutass többet"}</span>
            <span className="ml-1">{expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Referenciak() {
  const testimonials = [
    {
      name: "Muhari Eszter",
      title: "Párbajtőr válogatott",
      achievements: [
        "Párizs 2024 Olimpia 3. hely, női párbajtőr egyéni", 
        "2x Felnőtt Európa-bajnoki ezüstérem, női párbajtőr csapat", 
        "Felnőtt Világkupa 2025 Barcelona 1. hely; Marrakesh 1. hely, női párbajtőr egyéni", 
        "4x Felnőtt Országos Bajnokság 1. hely, női párbajtőr egyéni",
      ],
      testimonial:
        "Dr. Erdélyi Kálmán munkájában különösen kiemelkedő a vizualizációs technikák alkalmazása, amelyek hatékonyan segítettek a céljaim elérésében. Pár hónap közös munka során megtapasztalhattam, milyen jelentős hatása van annak, ha a mentális felkészülést strukturáltan, tudatosan végezzük. Ez a megközelítés nemcsak az önismeret fejlesztésében segített, hanem hozzájárult egy olyan belső erőforrás mozgósításához, amely közvetlenül is támogatta a teljesítményemet. Az elért eredmények közé tartozik például az olimpiai bronzérem megszerzése. Kiemelném profi hozzáállását, amelyben a pontosság, az alkalmazkodóképesség és a fókuszált figyelem találkozik. Minden helyzethez az adott pillanat igényei szerint igazodott, miközben a hosszú távú célokat is szem előtt tartotta. Az általa alkalmazott módszerek nemcsak a sportban, hanem az élet más területein is jól hasznosíthatók, és biztos alapot nyújtanak a fejlődéshez.",
      imagePosition: "left",
      imageSrc: "/muhari-eszter.jpg",
    },
    {
      name: "Guzi Blanka",
      title: "Öttusa válogatott",
      achievements: [
        "- Olimpiai Játékok 2024, 4. hely", 
        "Felnőtt Világbajnokság 2024, egyéni 2. hely, csapat 1. hely", 
        "Felnőtt Európa-bajnokság 2021, egyéni 2. hely, csapat 1. hely", 
        "Felnőtt Világkupa 2023; 2024, 1.hely", 
        "Junior Európa-bajnokság 2018; 2019, 2., 3.hely", 
        "Felnőtt Országos Bajnokság 2., 3.hely"
      ],
      testimonial:
        "Kálmánnal 2022 vége óta dolgozunk együtt rendszeresen. Talán jogosan mondhatjuk, hogy a legjobb tempóban érkezett az életembe, hiszen 2023-ban kezdődött az olimpiai kvalifikációs időszak, mely telis-tele volt magasságokkal és mélységekkel. Kálmán segítségével sikerült a mélységek során is észrevenni a tanulságokat, ezáltal egyre jobban kezeltem a stresszt és kiegyensúlyozottabbá is váltam. Nem csak a magánéletemben, hanem az eredményeimen is kezdett ez folyamatosan meglátszódni! Nagy szerepe volt abban, hogy egyáltalán sikerült kijutnom az Olimpiára, illetve hogy ott tisztességesen helyt álltam, előtte pedig világbajnoki ezüstérmet, világkupákat nyertem. Hálás vagyok, hogy a felkészítő gárdámat erősíti, remek csapatember, akiben az ember tiszta szívvel megbízhat.",
      imagePosition: "right",
      imageSrc: "/guzi-blanka.jpg",
    },
    {
      name: "Máramarosi Rita",
      title: "Tájfutó válogatott",
      achievements: [
        "3x Ifjúsági Európa bajnok (2021, 2022, 2023)", 
        "3x Junior Világbajnok (2023)", 
        "2x Felnőtt 6. helyezett váltó tag (2024)", 
        "és sokszoros magyar bajnok tájfutó", 
        "12x magyar bajnok középtávfutó",
      ],
      testimonial:
        "A zöldfülű álmodozó már felnőtt szárnyait bontogatja, de nem akárhogyan. Sok-sok akadályt leküzdve juthattam el a jelenlegi csúcsra, de ez idő alatt a személyiségem és a fizikumom is hatalmas lépésekben haladt felfelé. Megszűnni nem akaró, a már-már telhetetlenségre hajazó győzni akarást kellett az oldalunkra állítani. Az út meglehetősen kanyargós volt, de Doktor Úrral, aki 2021 nyara óta foglalkozik velem, sikeresen kiiktattuk azokat a bökdöső gátakat, amelyek leküzdése végül erősebbé tett. Mindenekelőtt a szorongás, a sérülés és a megfelelési kényszer drasztikus tüneteit kellett megcéloznunk, és most már a teljesítmény tökéletesítésére és a célok felé menetelésre fókuszálunk. A lélektani munka hatására lényegesen összeszedettebbnek érzem magam, a stresszhelyzeteket már tudom kezelni és egészséges önbizalommal várom a tétversenyeket, előre felkészülve azok minden rezdülésére. Elért eredményeim is igazolják, hogy jó úton haladunk. A mentális felkészülés felső határait sose lehet megsimogatni, úgy érzem, mindig van min csiszolnunk, hogy a NAGY napon a legélesebb lehessek.",
      imagePosition: "left",
      imageSrc: "/maramarosi-rita.jpg",
    },
    {
      name: "J. Ivett",
      title: "Szervátültetett világbajnok teniszező",
      achievements: [],
      testimonial:
        "2022 óta dolgozunk együtt Kálmánnal. A megtartó, elfogadó terápiás tér nagyon sokat segített a sportolói és sporton kívüli életemben is, többek között hozzájárult ahhoz is, hogy 2023-ban az Ausztráliában megrendezett Szervátültetettek Világjátékán sok-sok év után végre a dobogó tetejére állhattam. Kálmán a mentális felkészülésemben vállalt nagy szerepet.",
      imagePosition: "right",
      imageSrc: "/j-ivett.jpg",
    },
    {
      name: "Szabó Fanni",
      title: "3x3-as kosárlabda válogatott",
      achievements: [
        "2x Magyar Bajnok (2011, 2013)", 
        "3x Magyar Kupa Győztes (2011, 2012, 2013)", 
        "Európa kupa 3. hely (2021)",
      ],
      testimonial:
        "Amióta Kálmánnal dolgozom, jelentős mértékben javult a teljesítményem. Az ő szakértői támogatásával megtanultam hogyan kezeljem a versenyhelyzetekben felmerülő stresszt, és hogyan maradjak összeszedett és fókuszált. Ami számomra különösen értékes, hogy Kálmán nem csupán a sportteljesítményemre összpontosít, hanem arra is, hogy jobban megértsem és elfogadjam önmagam, ezáltal holisztikusan, mind a sportban, mind a személyes életemben segít a fejlődésben.",
      imagePosition: "left",
      imageSrc: "/szabo-fanni.jpg",
    },
    {
      name: "Andrejszki Dóra",
      title: "Padel válogatott",
      achievements: [
        "8x magyar bajnok", 
        "Európa Játékok résztvevő", 
        "Év Padelezője Díj nyertese 2022, 2023, 2024", 
        "Magyar ranglistavezető",
      ],
      testimonial:
        "Kezdetben azért szántam rá magam a pszichoterápiára, hogy kifejezetten a sportpályán való teljesítményemen tudjak javítani. Hamar szembesültem olyan dolgokkal, amik a pályán kívül történtek, illetve történnek velem és hatással vannak a játékomra. A terápia segít, hogy ezeket a tényezőket a magánéletben vagy elengedjem, vagy jobban kezeljem és ezáltal a pályára se vigyem őket magammal. Rengeteget fejlődtem saját magam elfogadásában, hogy tudjam magamat szeretni és valós értékeim mentén kezelni. Annak a megértésében is fejlődtem, hogy egy meccset nem fogok hibátlanul lejátszani, viszont csak a következő pontra fókuszálva a hibáimmal együtt is tudok jól teljesíteni.",
      imagePosition: "right",
      imageSrc: "/andrejszki-dora.jpg",
    },
    {
      name: "Péter Sára",
      title: "Felnőtt női válogatott tagja (szertorna)",
      achievements: [
        "Európa játékok ugrás bronzérmes", 
        "Európa Bajnoki 7.-8. helyezés (ugrás)", 
        "2x Mesterfokú bajnok (talaj, ugrás)"
      ],
      testimonial:
        "Pszichoterápiás kezelések segítségével már képes vagyok kezelni a verseny okozta stresszhelyzeteket, ami terápiás kapcsolatunkig rendszeresen okozott problémákat. Fontosak számomra ezek a jellegű beszélgetések, egyéni pszichoterápiás foglalkozások, hiszen sokat kell dolgozni a célom eléréséhez vezető úton kialakuló fejben okozta nehézségeken.",
      imagePosition: "left",
      imageSrc: "/peter-sara.jpg",
    },
    {
      name: "Horányi Dóra",
      title: "Válogatott kenu versenyző",
      achievements: [
        "Felnőtt Európa-bajnokság 2021, C1 5000 1. hely", 
        "Világbajnokság U23 2021, C4 500 1. hely",
      ],
      testimonial:
        "2024 februárban kezdtem el együtt dolgozni Doktor Úrral, egy mentálisan megterhelő időszak alatt. A közös munka már az elején nagyon jól haladt, a májusi versenyeimen már nem is éreztem a korábbi problémáim hatásait. Hatalmas segítség volt ez az együttműködés az idei szezonomban, rendkívül hálás vagyok ezért!",
      imagePosition: "right",
      imageSrc: "/horvath-dora.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-[#FDF6F0]">
      <Navbar activePage="referenciak" />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12 max-w-[1240px] mx-auto">
          Sportolói referenciák az OSEI keretében végzett szakmai tevékenységemről
        </h1>

        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            title={testimonial.title}
            achievements={testimonial.achievements}
            testimonial={testimonial.testimonial}
            imagePosition={testimonial.imagePosition}
            imageSrc={testimonial.imageSrc}
          />
        ))}
      </div>

      <Footer />
    </main>
  )
}
