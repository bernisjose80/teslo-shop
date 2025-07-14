import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";

const productsIncart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}

export default async function ({ params }: Props) {
  const { id } = await params;

  // Todo Verificar
  // si no es, redirect

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden ${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/*Carrito */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex-items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-500": true,
                }
              )}
            >
              <IoCardOutline size={30} />
              {/*<span className="mx-2">Pendiente</span> */}
              <span className="mx-2">Pagada</span>
            </div>

            {/*Items */}
            {productsIncart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                  alt={product.title}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{product.title}</p>
                  <p>{product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          {/*Checkout - Resumen de Orden*/}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2 font-bold">Dirección de Entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Bernis Cárdenas</p>
              <p>Av 26 con calle 31 CC los angeles local 3</p>
              <p>Acarigua</p>
              <p>Portuguesa</p>
              <p>Venezuela</p>
              <p>CP 3301</p>
              <p>(+58)02556227196</p>
            </div>

            {/*Divider*/}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2 font-bold">Resumen Orden</h2>
            <div className="grid grid-cols-2">
              <span>No. de productos</span>
              <span className="text-right">3 Articulos</span>

              <span>Sub-Total</span>
              <span className="text-right">$100</span>

              <span>Impuestos(16%)</span>
              <span className="text-right">$16</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$116</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              {/*Divider*/}

              <div
                className={clsx(
                  "flex-items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  {
                    "bg-red-500": false,
                    "bg-green-500": true,
                  }
                )}
              >
                <IoCardOutline size={30} />
                {/*<span className="mx-2">Pendiente</span> */}
                <span className="mx-2">Pagada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
