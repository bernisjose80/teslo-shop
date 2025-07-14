"use client";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import Link from "next/link";
import { useUIStore } from "@/store";
import clsx from "clsx";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.CloseSideMenu);

  return (
    <div>
      {/*efecto background black */}

      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
      )}

      {/*efecto blur*/}
      {isSideMenuOpen && (
        <div
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          onClick={closeMenu}
        ></div>
      )}

      {/*SideMenu*/}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[400px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          { "translate-x-full": !isSideMenuOpen }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer text-blue-600"
          onClick={closeMenu}
        />

        {/*Input*/}
        <div className="relative mt-14"></div>
        <IoSearchOutline
          size={20}
          className="absolute top-20 left-7 text-blue-600"
        />
        <input
          type="text"
          placeholder="Buscar"
          className="w-full bg-gray-50 rounded pl-10 py-0 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
        />

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPersonOutline size={30} />
          <span className="ml-3 text-xl text-blue-600">Perfil</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-xl text-blue-600">Ordenes</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogInOutline size={30} />
          <span className="ml-3 text-xl text-blue-600">Ingresar</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogOutOutline size={30} />
          <span className="ml-3 text-xl text-blue-600 ">Salir</span>
        </Link>

        {/*Line Separator*/}
        <div className="w-full h-px bg-gray-300 my-10" />

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoShirtOutline size={30} />
          <span className="ml-3 text-xl text-blue-600 ">Productos</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-xl text-blue-600">Ordenes</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPeopleOutline size={30} />
          <span className="ml-3 text-xl text-blue-600">Usuarios</span>
        </Link>
      </nav>
    </div>
  );
};
