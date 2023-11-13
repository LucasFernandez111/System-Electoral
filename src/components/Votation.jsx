import axios from "axios";
import React, { useEffect, useState } from "react";
import storage from "../storage/storage";

export default function Votar() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectPartido, setSelectPartido] = useState({ partido: "" });
  const [verifyVoto, setVerifyVoto] = useState(false);
  const [select, setSelect] = useState(false);

  useEffect(() => {
    const user = storage.get("user");

    if (user.voto) {
      return setVerifyVoto(true);
    }

    return;
  }, []);

  //PARTIDOS
  const UPP = "Union Por La Patria";
  const LLA = "La Libertad Avanza";

  const handleImageClick = (index) => {
    if (selectedImage === index) {
      setSelectedImage(null);
    } else {
      setSelectedImage(index);
    }
  };

  const handleSubmit = async () => {
    const token = storage.get("authUser");
    try {
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/create-voto",
        selectPartido,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const user = await axios.get("http://127.0.0.1:8000/api/user-profile", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      storage.set("user", user.data.data);
      window.location.reaload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {verifyVoto && (
        <div>
          {/* CREA EL COMPONENTE Y LO METES ACA --------------------------- */}
          <h1>Usted ya voto!</h1>
        </div>
      )}

      {!verifyVoto && (
        <div className="container mx-auto p-4 lg:h-screen static items-center justify-center">
          <p className="mb-8">
            Seleccione el candidato que desee votar, luego haga click en el
            botón "Emitir Voto".
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-40 space-x-4 ">
            {/* La libertad Avanza */}
            <div
              className={`max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer ${
                selectedImage === 0 ? "border-4 border-blue-800" : ""
              }`}
              onClick={() => {
                if (!select) {
                  setSelect(true);
                  setSelectPartido({ partido: LLA });
                  handleImageClick(0);
                }
                handleImageClick(0);
                return;
              }}
            >
              <img
                src="https://www.infobae.com/new-resizer/a6nyxy5sjWEiH6jT-ZbOxk4hCoY=/992x1488/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/MWLCHTTJERC4LOSZGNHXXWZSXE.jpg"
                alt="Milei"
                className="w-full h-auto object-cover rounded-lg   transition duration-300 ease-in-out hover:scale-105 hover:border-4 border-blue-700 "
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                <h1 className="text-2xl font-semibold text-center">
                  JAVIER MILEI
                </h1>
                <p className="mt-2 text-center">VICTORIA VILLARUEL</p>
                <p className="mt-2  text-sm text-center">La Libertad Avanza</p>
              </div>
            </div>
            {/* Unión por la Patria */}
            <div
              className={`max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer ${
                selectedImage === 1 ? "border-4 border-blue-800" : ""
              }`}
              onClick={() => {
                if (!select) {
                  setSelect(true);

                  setSelectPartido({ partido: UPP });
                  handleImageClick(1);
                }
                handleImageClick(1);
              }}
            >
              <img
                src="https://barilochedigital.com/wp-content/uploads/2023/10/Massa-Sergio.jpg"
                alt="Massa"
                className="w-full h-full object-cover rounded-lg  transition duration-300 ease-in-out hover:scale-105 hover:border-4 border-blue-700"
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                <h1 className="text-2xl font-semibold text-center">
                  SERGIO MASSA
                </h1>
                <p className="mt-2 text-center">AGUSTIN ROSSI</p>
                <p className="mt-2  text-sm text-center">Unión Por La Patria</p>
              </div>
            </div>
          </div>
          <div className="absolute top-40 right-4 ">
            <button
              onClick={() => {
                if (!select) return;

                handleSubmit();
              }}
              className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Emitir Voto
            </button>
          </div>
        </div>
      )}
    </>
  );
}
