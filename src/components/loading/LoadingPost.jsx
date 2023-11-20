import React from "react";
import { SkeletonText, SkeletonImage } from "@skeleton-elements/react";
import "@skeleton-elements/react/skeleton-elements.css";

const LoadingPost = () => {
  return (
    <section className="bg-white dark:bg-gray-900 shadow rounded-2xl  opacity-70 w-70">
      <div className="container px-6 py-10 mx-auto flex">
        <div className="flex">
          <SkeletonImage
            className=" w-full lg:mx-6 opacity-20 lg:w-1/2 rounded-xl h-72 lg:h-96"
            effect="blink"
          ></SkeletonImage>

          <div className="lg:w-1/2 lg:mt-0 lg:mx-6 flex justify-end items-center">
            <SkeletonText
              tag="div"
              className="rounded-xl opacity-20"
              effect="blink"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum dicta dolores explicabo expedita, quibusdam praesentium
              quisquam, eum, debitis assumenda quod magni ipsa maiores Quos
              mollitia fugit aperiam atque, assumenda modi. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Voluptatum dicta dolores
              explicabo expedita, quibusdam praesentium quisquam, eum, debitis
              assumenda quod magni ipsa maiores Quos mollitia fugit aperiam
              atque, assumenda modi.
            </SkeletonText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingPost;
