import AllProducts from "../../components/Shop/AllProducts";
import Service from "../../components/Shop/Service";
import ShopBanner from "../../components/Shop/ShopBanner";

const Shop = () => {
  return (
    <div className="font-poppins">
      <ShopBanner />
      <AllProducts />
      <Service />
    </div>
  );
};

export default Shop;
