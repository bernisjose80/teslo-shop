import TopMenu from "@/components/ui/top-menu/Top-Menu";
import { Sidebar } from "@/components";
import { Footer } from "@/components";
import WhatsAppButton from "@/components/ui/whatsapp/Whatsapp";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <Sidebar />
      <div className="px-0 sm:px-10">{children}</div>
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
