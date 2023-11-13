import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Partidos from "./Partidos";
import logoARG from "../assets/logoARG.png";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  const [ShowSelectPartido, setShowSelectPartido] = useState(false);

  const handleSwitchChange = () => {
    setRol((prevRol) => (prevRol === "fiscal" ? "votante" : "fiscal"));
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    rol: "",
    partido: "",
  });
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        data,
        { withCredentials: true }
      );
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSelectPartido(true);

    setData((prevData) => ({
      ...prevData,
      name: name,
      email: email,
      password: password,
      rol: rol,
    }));
  };

  return (
    <>
      {!ShowSelectPartido && (
        <div className="flex min-h-full flex-1 flex-col justify-center px-5 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm -mt-16">
            <img
              className="mx-auto h-40 w-36 object-cover"
              src={logoARG}
              alt="Your Company"
            />
            <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight ">
              Registre su cuenta
            </h2>
          </div>
          <div className="flex justify-center mt-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                required
                value=""
                className="sr-only peer"
                onChange={handleSwitchChange}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
              <span className="ms-3 text-sm font-medium text-black dark:text-black">
                {rol}
              </span>
            </label>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Nombre de usuario */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nombre de Usuario
                </label>
                <div className="mt-2">
                  <input
                    id="user"
                    name="user"
                    type="user"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="user"
                    required
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    autoComplete="email"
                    required
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Contraseña */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contraseña
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Registrar
                </button>
              </div>

              <div>
                <p className="text-center text-xl font-medium leading-6 text-gray-900">
                  ó
                </p>
              </div>

              <div></div>
            </form>

            <button
              onClick={() => navigate("/login")}
              className="flex w-full justify-center rounded-md bg-gray-300 border-2 border-indigo-600  px-3 py-1.5 text-sm font-semibold leading-6 text-gray-800 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      )}

      {ShowSelectPartido && (
        <Partidos handleRegister={handleRegister} setData={setData}></Partidos>
      )}
    </>
  );
}
