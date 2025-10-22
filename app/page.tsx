import OrderSection from "../components/OrderSection";
import CafeNavbar from "../components/CafeNavbar";
import CafeFooter from "@/components/CafeFooter";
import CafeHero from "@/components/CafeHero";
import Menu from "@/components/Menu";
import Location from "@/components/Location";

export default function Page() {
  return (
    <>
      <CafeNavbar />
      <main className="pt-20">
        <section id="home">
          <CafeHero />
        </section>
        <section id="order">
          <OrderSection />
        </section>
        <section id="menu">
          <Menu />
        </section>
        <section id="location">
          <Location />
        </section>
      </main>
      <CafeFooter />
    </>
  );
}
