import CommonBanner from "../../components/Shared/CommonBanner";
import AllProducts from "../../components/Shop/AllProducts";
import Service from "../../components/Shop/Service";

const Shop = () => {
  return (
    <div className="font-poppins">
      <CommonBanner title="Shop" route="Shop" />
      <AllProducts />
      <Service />
    </div>
  );
};

export default Shop;
