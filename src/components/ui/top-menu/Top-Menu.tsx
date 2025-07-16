"use client";
import Link from "next/link";
import { titleFont } from "@/config/fonts";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { useUIStore } from "@/store";
import Image from "next/image";

export default function TopMenu() {
  const openMenu = useUIStore((state) => state.OpenSideMenu);

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/*Logo */}
      <div className="flex items-center">
        <Image
          className="mr-2"
          src="/imgs/62x42 logo nube tic.jpg"
          alt="Logo de la empresa"
          width={70}
          height={50}
        ></Image>

        <Link href="/">
          <span
            className={`${titleFont.className} antialiased font-bold text-blue-600`}
          >
            Tic 99
          </span>
          <span className="text-blue-600">| App Shop</span>
        </Link>
      </div>
      {/*Center Menu */}

      <div className="hidden sm:block">
        <Link
          className="text-blue-600 m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/desktop"
        >
          Desktop
        </Link>
        <Link
          className="text-blue-600 m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/laptop"
        >
          Laptops
        </Link>
        <Link
          className="text-blue-600 m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/all_in_one"
        >
          All-in-One
        </Link>
        <Link
          className="text-blue-600 m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/impresora"
        >
          Impresoras
        </Link>
      </div>

      {/*Search, Cart, Menu */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5 text-blue-600" />
        </Link>

        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5 text-blue-600" />
          </div>
        </Link>

        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 text-blue-600"
          onClick={openMenu}
        >
          Menú
        </button>
      </div>
    </nav>
  );
}
