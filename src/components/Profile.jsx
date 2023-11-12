
import {CiCircleRemove} from 'react-icons/ci'
export default function Profile({ ProfileOpen, setProfile }) {
  return (
    <>
      {ProfileOpen && (
        <div className="fixed inset-0  bg-gray-700 bg-opacity-75 transition-opacity   flex justify-center  items-center ">
          <div className="flex flex-col justify-center max-w-xs p-10 shadow-md rounded-xl sm:px-12 dark:bg-gray-800  dark:text-gray-100 mt-4 ml-4 relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5709/5709782.png"
              alt=""
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square object-cover"
            />
            <div className="space-y-4 text-center divide-y divide-gray-700">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  Mario Dartinez
                </h2>
                <p className="px-5 text-sm sm:text-base dark:text-gray-400 italic">
                  FISCAL
                </p>
                 {/* <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                  La Libertad Avanza
                </p>*/}
              </div>
            </div>
            <CiCircleRemove  onClick={() => setProfile(false)}  size={50} className='hover:scale-110 cursor-pointer absolute  top-3 right-2 '></CiCircleRemove>
          </div>
         
        </div>
      )}
    </>
  );
}
