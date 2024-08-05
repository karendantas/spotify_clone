import { House, MagnifyingGlass } from "phosphor-react"

function App() {


  return (
    <main className="flex flex-col w-full h-screen space-y-2 p-2">

      <div className="flex h-full space-x-2">
        <section className="flex flex-col gap-2 w-1/3 h-full">
            <div className="bg-spotify-gray-800 w-full h-[13%] rounded-md flex flex-col gap-5 justify-center pl-5">
              <div className="flex items-center gap-4 text-spotify-gray-300">
                <House className="size-7 " />
                <span className="font-bold">Início</span>
              </div>

              <div className="flex items-center gap-4 text-spotify-gray-300">
                <MagnifyingGlass className="size-7 " />
                <span className="font-bold">Buscar</span>
              </div>

            </div>

            <div className="bg-spotify-gray-800 w-full h-[87%] rounded-md">

            </div>
        </section>
        <section className="bg-gradient-to-t from-spotify-gray-800 to-spotify-gray-500 w-full h-full rounded-md"> </section>

      </div>
      <section className="bg-black w-full h-24"> </section>
    </main>
  )
}

export default App
