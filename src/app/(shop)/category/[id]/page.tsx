import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { ProductGrid, Title } from "@/components";
import { ValidCategory } from "@/interfaces";

interface Props {
  params: Promise<{ id: ValidCategory }>;
}

export default async function Categorypage({ params }: Props) {
  const { id } = await params;
  const array = ["desktop", "laptop", "all_in_one", "impresora"];

  const labels: Record<ValidCategory, string> = {
    desktop: "Escritorio",
    laptop: "Portatiles",
    all_in_one: "Todo en Uno",
    impresora: "Impresoras",
  };
  const products = initialData.products.filter(
    (product) => product.gender === id
  );

  if (!array.includes(id)) {
    notFound();
  }

  //else if (id == "kid") {
  // } else if (id == "women") {
  //} else if (id == "men") {
  //}

  return (
    <div>
      <Title
        title={`Articulos: ${labels[id]} `}
        subtitle={`todos los productos que buscas`}
        className="mb-2"
      />
      <ProductGrid products={products} />
    </div>
  );
}
