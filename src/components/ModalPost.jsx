import React from "react";

const ModalPost = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0  bg-gray-700 bg-opacity-75 transition-opacity  flex justify-center items-center">
          <div className="bg-white rounded-xl   flex justify-center  h-2/5 w-2/5 items-center">
            <button
              onClick={() => {
                setIsModalOpen(false);
              }}
              className="py-3 px-4 bg-blue-500 rounded-lg text-white font-semibold"
            >
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPost;
