import logARG from "../assets/logoARG.png";
export default function Partidos({ setData, handleRegister }) {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto object-cover h-40 w-36"
            src={logARG}
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
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm  bg-gradient-to-r from-violet-950 via-purple-700 to-purple-950  dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 hover:scale-110 duration-200 "
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
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-lg font-semibold leading-6  shadow-sm  bg-gradient-to-r from-sky-400 via-amber-400 to-sky-300 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 hover:scale-110  duration-200"
            >
              Unión Por La Patria
            </button>
          </div>
          <div className="justify-center flex mt-9">
            <button
              onClick={handleRegister}
              className="px-6  py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
