import React, { useState } from "react";
import { IoMdPhotos } from "react-icons/io";
import { IconButton } from "@material-tailwind/react";
import storage from "../storage/storage";
import axios from "../api/axios";

const ModalPost = ({ isModalOpen, setIsModalOpen }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const user = storage.get("user");
  const [partido, setPartido] = useState(user.partido);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = storage.get("authUser");
    try {
      const { data } = await axios.post(
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
      console.log(error);
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0  bg-gray-700 bg-opacity-75 transition-opacity   flex justify-center  items-center">
          <div className="bg-white rounded-xl transition-all   flex justify-center flex-col w-px-500 px-12 py-11 items-center gap-10">
            <form onSubmit={handleSubmit}>
              <input
                className="p-4 border-2 border-gray-400 font-semibold rounded-lg"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Titulo"
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

                  <input
                    type="submit"
                    value={"Publicar Post"}
                    className=" bg-gray-900 text-white p-2 rounded-lg font-semibold"
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
