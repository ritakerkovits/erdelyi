export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-[#F5F5F5] py-8">
      <div className="container mx-auto px-4 max-w-[1240px] text-center">
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          <div>
            <h3 className="font-medium mb-2">Elérhetőség</h3>
            <p className="text-sm text-indigo-200">+36 30 400 6400</p>
            <p className="text-sm text-indigo-200">1028 Budapest, Gyarmat u. 8 Fsz. 3</p>
          </div>
         <div>
            <h3 className="font-medium mb-2">Rendelési idő</h3>
            <p className="text-sm text-indigo-200">Hétfő: 17:00 - 20:00</p>
            <p className="text-sm text-indigo-200">Szerda: 08:00 - 11:00</p>
            <p className="text-sm text-indigo-200">Csütörtök: 16:00 - 20:00</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Gyors linkek</h3>
            <p className="text-sm text-indigo-200">Bemutatkozás</p>
            <p className="text-sm text-indigo-200">Terápiás módszereim</p>
            <p className="text-sm text-indigo-200">Kapcsolat</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-indigo-800 text-sm text-indigo-300 text-center">
          © 2025 Dr. Erdély Kálmán. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  )
}
