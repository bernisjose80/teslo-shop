//import { titleFont } from "@/config/fonts";
import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products; // como si fuera el fetching de datos

export default function Home() {
  return (
    <>
      <Title
        title="E-Commerce"
        subtitle="todos los productos"
        className="mb-2"
      />

      <ProductGrid products={products} />
    </>
  );
}
