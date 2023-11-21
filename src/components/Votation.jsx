import axios from "axios";
import React, { useEffect, useState } from "react";
import storage from "../storage/storage";
import Voted from "./Voted";
import ConfirmedVote from "./VotoConfirmado";
import { FaCheckCircle } from "react-icons/fa";
import { Alert } from "@material-tailwind/react";
import useGet from "../hooks/useGet";

export default function Votar() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectPartido, setSelectPartido] = useState({ partido: "" });
  const [verifyVoto, setVerifyVoto] = useState(false);
  const [alertVoto, setAlertVoto] = useState(false);
  const [select, setSelect] = useState(false);
  const [updateData, setUpdateData] = useState(false);
  const [reload, setReload] = useState(false);

  const { data } = useGet("/api/user-profile");

  useEffect(() => {
    const user = storage.get("user");
    console.log(user);
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

  useEffect(() => {
    if (data) {
      storage.set("user", data.data);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, [updateData]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/create-voto", selectPartido);
      setUpdateData(true);
      setAlertVoto(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {alertVoto && (
        <Alert
          variant="filled"
          animate={Animation}
          icon={<FaCheckCircle size={20} />}
          className="w-1/3 bg-green-600 font-semibold z-50 flex fixed right-3 "
        >
          Su voto se ha emitido correctamente...
        </Alert>
      )}
      {verifyVoto && (
        <div>
          <Voted text={"Usted ya registró un voto."} />
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
                  setSelectPartido({ partido: LLA });
                  handleImageClick(0);
                  setSelect(true);
                  return;
                }
                setSelect(false);
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
                  setSelectPartido({ partido: UPP });
                  handleImageClick(1);
                  setSelect(true);
                  return;
                }
                setSelect(false);

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
              className={`px-4 py-3 transition-all bg-gradient-to-tr  ${
                selectedImage === 1
                  ? "from-cyan-500 to-blue-500"
                  : "from-violet-800 to-yellow-200"
              } font-semibold text-white  rounded-xl`}
            >
              EMITIR VOTO
            </button>
          </div>
        </div>
      )}
    </>
  );
}
