import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import MenuPost from "../components/MenuPost";
import { useState } from "react";
import ModalPost from "../components/ModalPost";
import Votar from "../components/Votation";
import Results from "../components/Results";
import Profile from "../components/Profile";
import Register from "./Register";
import { useNavigate } from "react-router-dom";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://cdn-icons-png.flaticon.com/512/5709/5709782.png",
};
const navigation = [
  { name: "Inicio", contValue: "Post", title: "Publicaciones", current: true },
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
  const navigator = useNavigate();

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
        return <MenuPost></MenuPost>;
    }
  };
  return (
    <>
      <Profile
        ProfileOpen={isProfileOpen}
        setProfile={setIsProfileOpen}
      ></Profile>
      <ModalPost
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      ></ModalPost>
      <div className="min-h-full lg:h-screen">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            onClick={() => {
                              if (item.leave) {
                                return navigator("/register");
                              }
                              setSection(item.title);
                              setContent(item.contValue);
                            }}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white cursor-pointer"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex gap-7 items-center md:ml-6">
                      <button
                        onClick={() => {
                          setIsModalOpen(true);
                        }}
                        className=" bg-sky-600 hover:bg-sky-500 px-4 py-2 bg-opacity-75 rounded-md cursor-pointer text-white text-sm font-semibold"
                      >
                        Crear Post
                      </button>
                      <h1 className="bg-gradient-to-r text-transparent text-xl font-bold  from-cyan-500 to-blue-500 bg-clip-text">
                        FISCAL
                      </h1>

                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    onClick={() => {
                                      if (item.leave) {
                                        return navigator("/register");
                                      }

                                      setIsProfileOpen(true);
                                    }}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      className={classNames(
                        "page",
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow-xl ">
          <div className="justify-center flex  px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="bg-gradient-to-r text-transparent text-3xl font-bold  from-cyan-500 to-blue-500 bg-clip-text">
              {section}
            </h1>
          </div>
        </header>
        <main className="bg-gray-100 ">{contentRender(content)}</main>
      </div>
    </>
  );
};

export default DashBoard;
