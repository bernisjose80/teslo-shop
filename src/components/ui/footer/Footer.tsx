import { titleFont } from "@/config/fonts";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
      <Link href="/">
        <span
          className={`${titleFont.className} antialiased font-bold text-blue-600`}
        >
          Tic 99
        </span>
        <span className="text-blue-600"> | Shop</span>
        <span className="text-blue-600">{new Date().getFullYear()}</span>
      </Link>
      <Link href="/" className="mx-3 text-blue-600">
        © Todos los derechos reservados
      </Link>
    </div>
  );
};
