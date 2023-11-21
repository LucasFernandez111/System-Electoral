import React, { useState } from "react";
import { IoMdPhotos } from "react-icons/io";
import { IconButton } from "@material-tailwind/react";
import storage from "../storage/storage";
import axios from "../api/axios";

const ModalPost = ({ isModalOpen, setIsModalOpen }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [partido, setPartido] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = storage.get("authUser");
    const user = storage.get("user");

    setPartido(user.partido);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/create-post",
        {
          title: title,
          content: content,
          partido: partido,
        },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.location.reload();
    } catch (error) {
      console.log("Se excedio de limite de letras");
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-gray-700 bg-opacity-75 transition-opacity   flex justify-center  items-center">
          <div className="bg-white rounded-xl transition-all   flex justify-center flex-col w-px-500 px-12 py-11 items-center gap-10">
            <form onSubmit={handleSubmit}>
              <input
                className="p-4 border-2 border-gray-400 font-semibold rounded-lg justify-center flex mb-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Título"
              />

              <textarea
                placeholder="Descripción..."
                className="border-2 border-gray-400 font-semibold rounded-lg p-4"
                name=""
                value={content}
                onChange={(e) => setContent(e.target.value)}
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
                ></IconButton>
                <div className="flex justify-between gap-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="border border-gray rounded-lg p-2  font-semibold"
                  >
                    Cancelar
                  </button>

                  <input
                    type="submit"
                    value={"Publicar Post"}
                    className=" bg-gray-900 text-white p-2 rounded-lg font-semibold cursor-pointer hover:bg-gray-800"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPost;
