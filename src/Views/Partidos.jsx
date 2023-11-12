export default function Partidos() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-28 w-auto"
            src="./imagenes/votarg.png.png"
            alt="Your Company"
          />
          <h2 className="mt-10  mb-8 text-center text-2xl font-bold leading-9 tracking-tight ">
            ¿Qué partido desea fiscalizar?
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-8" action="#" method="POST">
            <div className="mb-8">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm  group bg-gradient-to-r from-violet-950 via-purple-700 to-purple-950 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  "
              >
                <span class="flex w-full justify-center text-gray-900 px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-300 rounded-md group-hover:bg-opacity-0  hover:text-white">
                  La Libertad Avanza
                </span>
              </button>
            </div>


            <div>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-lg font-semibold leading-6  shadow-sm  group bg-gradient-to-r from-sky-400 via-amber-400 to-sky-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  "
              >
                <span class="flex w-full justify-center  text-gray-900  px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-300 rounded-md group-hover:bg-opacity-0 ">
                  Unión Por La Patria
                </span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
