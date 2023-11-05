import React from "react";
import CardPost from "../components/CardPost";

const MenuPost = () => {
  return (
    <div className="mx-auto flex  flex-col gap-y-10 max-w-7xl py-6 sm:px-6 lg:px-8">
      <CardPost
        image={"https://www.clarin.com/2023/06/26/nYamSgFv1_1256x620__1.jpg"}
      />
      <CardPost
        image={
          "https://www.lamañanaonline.com.ar/media/fotos/menu_20230617000254.jpg"
        }
      />
    </div>
  );
};

export default MenuPost;
