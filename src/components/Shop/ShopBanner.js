import Image from "next/image";
import banner1 from "../../assets/Shop/banner.jpeg";

const ShopBanner = () => {
  return (
    <div className="w-full h-[315px] relative">
      <Image
        src={banner1}
        alt="image banner"
        fill
        className="object-cover opacity-50 z-0"
      />
      <div className="h-full flex flex-col items-center justify-center z-10 relative">
        <h3 className="font-medium text-black text-3xl lg:text-5xl mb-2">
          Shop
        </h3>
        <p className="">
          <span className="font-medium ">Home &gt;</span>{" "}
          <span className="font-light"> Shop</span>
        </p>
      </div>
    </div>
  );
};

export default ShopBanner;
