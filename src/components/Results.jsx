import axios from "axios";
import { useEffect, useState } from "react";
import percentageVotes from "../functions/functions";

export default function Results() {
  const [votosLLA, setvotosLLA] = useState(0);
  const [votosUPP, setvotosUPP] = useState(0);
  const [votosTotal, setvotosTotal] = useState(0);
  const [percentage, setPercentage] = useState({
    LLA: 0,
    UPP: 0,
  });

  const getListVotos = async () => {
    const { data } = await axios.get("http://127.0.0.1:8000/api/list-voto", {
      withCredentials: true,
    });

    setvotosLLA(data.data.LLA);
    setvotosUPP(data.data.UPP);
    setvotosTotal(data.data.total);

    const { percentageOne, percentageTwo } = percentageVotes(
      data.data.LLA,
      data.data.UPP,
      data.data.total
    );

    setPercentage((prev) => ({
      ...prev,
      LLA: percentageOne,
      UPP: percentageTwo,
    }));
  };
  useEffect(() => {
    getListVotos();
  }, []);
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-5">
        <div className="max-w-sm rounded  overflow-hidden shadow-lg mt-6 bg-violet-950 ml-4 mr-4">
          <img
            className="  object-cover mt-10 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8_fFV-oqm2OaIzzEFCWcQlr5m-qefWv2Ww&usqp=CAU"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-2 text-center text-white">
              {percentage.LLA}%
            </div>

            <p className="text-white text-lg font-bold text-center">
              {votosLLA}
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-6 bg-sky-400 ml-4 mr-4qq">
          <img
            className=" object-cover mt-10 "
            src="data:image/png;base64,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"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-2 text-center text-white">
              {percentage.UPP}%
            </div>
            <p className="text-white  text-lg font-bold text-center">
              {votosUPP}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
