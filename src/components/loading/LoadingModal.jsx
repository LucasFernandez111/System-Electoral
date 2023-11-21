import React from "react";

const LoadingModal = () => {
  return (
    <div className="fixed inset-0  bg-cyan-800 bg-opacity-75 transition-opacity   flex justify-center  items-center">
      <div
        class="inline-block h-20 w-20 text-cyan-100  animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default LoadingModal;
