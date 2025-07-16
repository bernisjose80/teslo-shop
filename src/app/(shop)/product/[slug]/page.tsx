import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import {
  QuantitySelector,
  SizeSelector,
  ProductSlideshow,
  ProductMobileSlideshow,
} from "@/components";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Pageslug({ params }: Props) {
  const { slug } = await params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* slide show */}

      <div className="col-span-1 md:col-span-2">
        {/* Pantalla Mobile slide show */}
        <ProductMobileSlideshow
          images={product.images}
          title={product.title}
          className="block md:hidden"
        />

        {/* Destokp slide show */}
        <ProductSlideshow
          images={product.images}
          title={product.title}
          className="hidden md:block"
        />
      </div>

      {/* detalles del product */}
      <div className="col-span-1 px-5">
        <h1 className={` ${titleFont.className} antialiased font-bold text-xl`}>
          ${product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>
        {/* selector de talla */}
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSize={product.sizes}
        />

        {/* selector de cantidad */}
        <QuantitySelector quantity={1} />
        {/* button */}
        <button className="btn-primary my-5">Agrega al carrito</button>
        {/* descripcion */}
        <h3 className="font-bold text-sm">Descripcion</h3>
        <p className="font-light">${product.description}</p>
      </div>
    </div>
  );
}
