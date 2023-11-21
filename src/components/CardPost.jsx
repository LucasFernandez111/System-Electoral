import React from "react";
import "animate.css";
const CardPost = ({ image, title, content, name, partido, rol }) => {
  return (
    <section className="animate__animated animate__fadeInDown  bg-white  dark:bg-gray-900 shadow rounded-2xl w-70">
      <div className="container px-6 py-10 mx-auto">
        <div className="mt-2 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            src={image}
            alt=""
          />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
            <p className="text-sm text-blue-500 uppercase">{partido}</p>

            <a
              href="#"
              className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
            >
              {title}
            </a>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              {content}
            </p>

            {/* <div className="flex items-center mt-6">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPost;
