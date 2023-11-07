import React from "react";
import { IoMdPhotos } from "react-icons/io";
import { IconButton } from "@material-tailwind/react";

const ModalPost = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0  bg-gray-700 bg-opacity-75 transition-opacity   flex justify-center  items-center">
          <div className="bg-white rounded-xl transition-all   flex justify-center flex-col w-px-500 px-12 py-11 items-center gap-10">
            <textarea
              placeholder="Escriba su post..."
              className="border-2 border-gray-400 font-semibold rounded-lg p-4"
              name=""
              id=""
              cols="90"
              rows="8"
            ></textarea>

            <div className="flex flex-row  justify-between items-center gap-96 ">
              <IconButton
                variant="text"
                className="items-center flex justify-center"
                color="blue-gray"
                size="sm"
              >
                <IoMdPhotos size={30}></IoMdPhotos>
              </IconButton>
              <div className="flex justify-between gap-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="border border-gray rounded-lg p-2  font-semibold"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className=" bg-gray-900 text-white p-2 rounded-lg font-semibold"
                >
                  Publicar Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPost;
