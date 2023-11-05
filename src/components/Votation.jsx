export default function Votar() {
  return (
    <>
      <div className="container mx-auto p-4 lg:h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-40">
          {/* La libertad Avanza */}
          <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
            <img
              src="https://www.infobae.com/new-resizer/a6nyxy5sjWEiH6jT-ZbOxk4hCoY=/992x1488/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/MWLCHTTJERC4LOSZGNHXXWZSXE.jpg"
              alt="Milei"
              className="w-full h-auto object-cover rounded-lg   transition duration-300 ease-in-out hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
              <h1 className="text-2xl font-semibold text-center">JAVIER MILEI</h1>
              <p className="mt-2 text-center">
                VICTORIA VILLARUEL
              </p>
              <p className="mt-2  text-sm text-center">
                La Libertad Avanza
              </p>
            </div>
          </div>
          {/* Unión por la Patria */}
          <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
            <img
              src="https://barilochedigital.com/wp-content/uploads/2023/10/Massa-Sergio.jpg"
              alt="Massa"
              className="w-full h-full object-cover rounded-lg  transition duration-300 ease-in-out hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
            <h1 className="text-2xl font-semibold text-center">SERGIO MASSA</h1>
              <p className="mt-2 text-center">
                AGUSTIN ROSSI
              </p>
              <p className="mt-2  text-sm text-center">
                Unión Por La Patria
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}
