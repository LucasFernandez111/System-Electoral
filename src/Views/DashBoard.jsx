import { Suspense, useState } from "react";
import Votar from "../components/Votation";
import Results from "../components/Results";
import Profile from "../components/Profile";
import Register from "./Register";
import LoadingModal from "../components/loading/loadingModal";
import useGet from "../hooks/useGet";
import { lazy } from "react";
import delayForDemo from "../functions/delayForDemo";
import storage from "../storage/storage";
import { useEffect } from "react";
import MenuPost from "../components/MenuPost";

const ContentDashBoard = lazy(() =>
  delayForDemo(import("../components/dashboard/ContentDashBoard"))
);
const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "https://cdn-icons-png.flaticon.com/512/5709/5709782.png",
};
const navigation = [
  { name: "Inicio", contValue: "Post", title: "Publicaciones", current: false },
  {
    name: "Votar",
    contValue: "Votar",
    title: "Elecciones Presidenciales",
    current: false,
  },
  {
    name: "Seguimiento y Resultado",
    contValue: "Seguimiento",
    title: "Resultados de Votaciones",
    current: false,
  },
];
const userNavigation = [
  { name: "Tú Perfil", contValue: "Perfil", current: false },
  { name: "Cerrar Sesion", contValue: "Register", leave: true, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DashBoard = () => {
  const [content, setContent] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [section, setSection] = useState("Publicaciones");
  const [partido, setPartido] = useState("");
  const [buttonPost, setButtonPost] = useState(true);

  const { data, error, loading } = useGet("/api/user-profile");
  useEffect(() => {
    if (data) {
      storage.set("user", data.data);
      if (data.data.rol === "Votante") {
        setButtonPost(false);
      }
    }
  }, [data]);

  const contentRender = (value) => {
    switch (value) {
      case "Post":
        return <MenuPost></MenuPost>;

      case "Register":
        return <Register></Register>;

      case "Perfil":
        return <Profile></Profile>;

      case "Votar":
        return <Votar></Votar>;

      case "Seguimiento":
        return <Results></Results>;
      default:
        return <MenuPost />;
    }
  };
  return (
    <>
      <Suspense fallback={<LoadingModal></LoadingModal>}>
        <ContentDashBoard
          section={section}
          contentRender={contentRender}
          content={content}
          setSection={setSection}
          setPartido={setPartido}
          setIsModalOpen={setIsModalOpen}
          setButtonPost={setButtonPost}
          setIsProfileOpen={setIsProfileOpen}
          setContent={setContent}
          buttonPost={buttonPost}
          isProfileOpen={isProfileOpen}
          isModalOpen={isModalOpen}
        ></ContentDashBoard>
      </Suspense>
    </>
  );
};

export default DashBoard;
