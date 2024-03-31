import Image from "next/image";
import logo from "../../assets/Furniro-logo.png";
import banner from "../../assets/Shop/banner.jpeg";

const CommonBanner = ({ title, route }) => {
  return (
    <div className="w-full h-[315px] relative">
      <Image
        src={banner}
        alt="image banner"
        fill
        className="object-cover opacity-50 z-0 blur-[2px]"
      />
      <div className="h-full flex flex-col items-center justify-center z-10 relative">
        <Image src={logo} alt="" width={77} height={77} className="mb-1" />
        <h3 className="font-medium text-black text-3xl lg:text-5xl mb-2">
          {title}
        </h3>
        <p className="">
          <span className="font-medium ">Home &gt;</span>
          <span className="font-light"> {route}</span>
        </p>
      </div>
    </div>
  );
};

export default CommonBanner;
