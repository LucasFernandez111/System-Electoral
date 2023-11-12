import React from "react";
import CardPost from "../components/CardPost";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const MenuPost = () => {
  const [listPost, setListPost] = useState();
  const getPost = async () => {
    try {
      const { data } = await axios.get(
        "http://127.0.0.1:8000/api/list-all-post"
      );

      setListPost(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="mx-auto flex  flex-col gap-y-10 max-w-7xl py-6 sm:px-6 lg:px-8">
      {listPost &&
        listPost.map((post, index) => (
          <CardPost
            key={index}
            title={post.title}
            partido={post.partido}
            content={post.content}
            image={
              "https://www.clarin.com/2023/06/26/nYamSgFv1_1256x620__1.jpg"
            }
          />
        ))}
    </div>
  );
};

export default MenuPost;
