import Footer from "./components/Footer";
import FurnitureGrid from "./components/Home/FurnitureGrid/FurnitureGrid";
import FurnitureType from "./components/Home/FurnitureType";
import Hero from "./components/Home/Hero";
import Products from "./components/Home/Products";
import SliderSection from "./components/Home/SliderSection";

export default function Home() {
  return (
    <div className="font-poppins ">
      <Hero />
      <FurnitureType />
      <Products />
      <SliderSection />
      <FurnitureGrid />
      {/* <Footer /> */}
    </div>
  );
}
