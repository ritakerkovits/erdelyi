import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Phone, MapPin, Clock } from "lucide-react"

export default function Kapcsolat() {
  return (
    <main className="min-h-screen bg-[#FDF6F0]">
      <Navbar activePage="kapcsolat" />

      {/* Header Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Bejelentkezés</h1>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-700 mb-2">A jelentkezőket csendes, nyugodt környezetben várom.</p>
            <p className="text-gray-700 mb-2">Magánrendelésem Budapest 2. kerületében Pasaréten működik.</p>
            <p className="text-gray-700">Bejelentkezéshez kérem hívja az itt megadott telefonszámot.</p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-gray-100 rounded-xl p-5 shadow-sm">
                <div className="flex items-start">
                  <Phone className="text-indigo-700 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-indigo-700 text-lg mb-2">+36 30 400 6490</p>
                    <p className="text-gray-600 text-sm">
                      Időpontot egyeztethet hétköznapokon
                      <br />
                      8:00 - 10:00 valamint 20:00 - 22:00 között
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-gray-100 rounded-xl p-5 shadow-sm">
                <div className="flex items-start">
                  <MapPin className="text-indigo-700 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-indigo-700 text-lg mb-2">1026 Budapest, Gyergyó u. 8 Fsz. 3</p>
                    <p className="text-gray-600 text-sm">
                      Személygépkocsival és tömegközlekedési
                      <br />
                      eszközzzel egyaránt könnyen elérhető.
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gray-100 rounded-xl p-5 shadow-sm">
                <div className="flex items-start">
                  <Clock className="text-indigo-700 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-indigo-700 text-lg mb-3">Rendelési idő</p>
                    <div className="space-y-1 text-gray-600 text-sm">
                      <p>Hétfő: 17:00 - 20:00</p>
                      <p>Szerda: 08:00 - 11:00</p>
                      <p>Csütörtök: 16:00 - 20:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-xl overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.4046428537366!2d18.9647!3d47.5432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d9f4e4e0d62b%3A0x8d9caafd8a0e3a74!2sGyergy%C3%B3%20u.%208%2C%201026%20Budapest%2C%20Hungary!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
