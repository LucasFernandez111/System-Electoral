export default function Results() {
  return (
    <>
    <div className="inline-grid grid-cols-2 gap-4 space-x-14">
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-6 bg-violet-950 ml-4">
          <img
            className="w-full mt-10"
            src="https://s3-us-west-2.amazonaws.com/vixnetapi/estoesmedia/64db74dd84121_lalibertadavanza150823.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-2 text-center text-white">25,98%</div>
            <p className="text-white text-base font-bold text-center">
              10200 votos
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-6 bg-violet-950 ml-4">
          <img
            className="w-full mt-10"
            src="https://s3-us-west-2.amazonaws.com/vixnetapi/estoesmedia/64db74dd84121_lalibertadavanza150823.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-2 text-center text-white">25,98%</div>
            <p className="text-white text-base font-bold text-center">
              10200 votos
            </p>
          </div>
        </div>
        </div>      
    </>
  );
}
