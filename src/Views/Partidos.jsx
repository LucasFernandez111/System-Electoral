export default function Partidos({ setData, handleRegister }) {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10  mb-8 text-center text-2xl font-bold leading-9 tracking-tight ">
            ¿Qué partido desea fiscalizar?
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mb-8">
            <button
              value={"La libertad Avanza"}
              onClick={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  partido: e.target.value,
                }));
              }}
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm  group bg-gradient-to-r from-violet-950 via-purple-700 to-purple-950 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  "
            >
              La Libertad Avanza
            </button>
          </div>

          <div>
            <button
              value={"Unión Por La Patria"}
              onClick={(e) => {
                setData((prevData) => ({
                  ...prevData,
                  partido: e.target.value,
                }));
              }}
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-lg font-semibold leading-6  shadow-sm  group bg-gradient-to-r from-sky-400 via-amber-400 to-sky-300 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  "
            >
              Unión Por La Patria
            </button>
          </div>

          <button onClick={handleRegister}>Confirmar</button>
        </div>
      </div>
    </>
  );
}
