import React from "react";
import CardPost from "../components/CardPost";
import { useEffect } from "react";
import { useState } from "react";

import massaPhoto from "../assets/fotos-UXP/massa2.jpg";
import useGet from "../hooks/useGet";
import LoadingPost from "./loading/LoadingPost";

const MenuPost = () => {
  const [listPost, setListPost] = useState();
  const LLA = "La libertad Avanza";

  const { data, error, loading } = useGet("/api/list-all-post");
  useEffect(() => {
    if (data) setListPost(data.data.reverse());
  }, [data]);

  return (
    <div className="mx-auto flex relative z-10 flex-col gap-y-10 max-w-7xl py-6 sm:px-6 lg:px-8">
      {listPost &&
        !loading &&
        listPost.map((post, index) => {
          if (post.partido === LLA) {
            return (
              <CardPost
                key={index}
                image={
                  "https://www.clarin.com/2023/06/26/nYamSgFv1_1256x620__1.jpg"
                }
                title={post.title}
                content={post.content}
                partido={post.partido}
                rol={post.rol}
                name={post.name}
              ></CardPost>
            );
          }

          return (
            <CardPost
              key={index}
              image={massaPhoto}
              title={post.title}
              content={post.content}
              partido={post.partido}
              rol={post.rol}
              name={post.name}
            ></CardPost>
          );
        })}
      {loading && <LoadingPost />}
    </div>
  );
};

export default MenuPost;
