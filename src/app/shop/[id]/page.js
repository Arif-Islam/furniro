import Image from "next/image";
import breadcrumbArrow from "../../../assets/breadcrumb-arrow.png";
import ProductSlider from "../../../components/Shop/ProductSlider";
import ProductDetails from "../../../components/Shop/ProductDetails";
const Proudct = () => {
  return (
    <div>
      <div className="bg-[#F9F1E7]">
        <div className="max-w-[1440px] mx-auto h-[70px] md:h-[100px] px-4 lg:px-12 2xl:px-[100px] flex items-center">
          <p className="text-[#9f9f9f] mr-2 md:mr-[14px]">Home</p>
          <Image
            src={breadcrumbArrow}
            alt="breadcrumbArrow"
            width={6}
            height={6}
            className="mt-1 mr-6"
          />
          <p className="text-[#9f9f9f] mr-2 md:mr-[14px]">Shop</p>
          <Image
            src={breadcrumbArrow}
            alt="breadcrumbArrow"
            width={6}
            height={6}
            className="mt-1 mr-6"
          />
          <hr className="bg-[#9f9f9f] rotate-90 w-9 border border-[#9f9f9f] mr-5 md:mr-9" />
          <h4 className="">Asgaard Sofa</h4>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-[1240px] mx-auto my-9 flex flex-col lg:flex-row items-center lg:items-start px-5 xl:px-0 gap-y-10 lg:gap-x-10 xl:gap-x-16">
          <ProductSlider />
          <ProductDetails />
        </div>
      </div>
    </div>
  );
};

export default Proudct;
