import Image from "next/image";
import rating from "../../assets/Shop/rating.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const ProductDetails = () => {
  return (
    <div className="max-w-[500px] xl:max-w-[606px] mx-auto">
      <h3 className="text-3xl lg:text-[42px] mb-3 mt-2">Asgaard sofa</h3>
      <p className="font-medium text-[#9f9f9f] text-xl lg:text-2xl mb-4">
        Rs. 250,000.00
      </p>
      <div className="flex items-center mb-4">
        <Image src={rating} alt="Rating" width={124} height={20} />
        <hr className="w-[30px] bg-[#9f9f9f] border border-[#9f9f9f] rotate-90" />
        <p className="text-sm text-[#9f9f9f]">5 Customer Review</p>
      </div>
      <p className="text-sm mb-5">
        Setting the bar as one of the loudest speakers in its class, the Kilburn
        is a compact, stout-hearted hero with a well-balanced audio which boasts
        a clear midrange and extended highs for a sound.
      </p>
      <p className="text-sm text-[#9f9f9f] mb-2">Size</p>
      <div className="flex items-center gap-x-4 mb-5">
        <button className="w-[30px] h-[30px] rounded-[5px] bg-[#B88E2F] text-sm text-white">
          L
        </button>
        <button className="w-[30px] h-[30px] rounded-[5px] bg-[#F9F1E7] text-sm">
          XL
        </button>
        <button className="w-[30px] h-[30px] rounded-[5px] bg-[#F9F1E7] text-sm">
          XS
        </button>
      </div>
      <p className="text-sm text-[#9f9f9f] mb-2">Color</p>
      <div className="flex items-center gap-x-4 mb-8">
        <button className="w-[30px] h-[30px] rounded-[50px] bg-[#816DFA]"></button>
        <button className="w-[30px] h-[30px] rounded-[50px] bg-[#000000]"></button>
        <button className="w-[30px] h-[30px] rounded-[50px] bg-[#B88E2F]"></button>
      </div>
      <div className="flex items-center gap-x-4 gap-y-4 mb-14 flex-wrap">
        <div className="flex items-center justify-between w-[85px] xl:w-[123px] h-12 md:h-16 rounded-[10px] border border-[#9f9f9f] px-3 xl:px-4">
          <button>-</button>
          <p className="font-medium">1</p>
          <button>+</button>
        </div>
        <button className="flex items-center justify-center w-[175px] xl:w-[215px] h-12 md:h-16 rounded-[15px] border border-black text-lg lg:text-xl">
          Add To Cart
        </button>
        <button className="flex items-center justify-center w-[175px] xl:w-[215px] h-12 md:h-16 rounded-[15px] border border-black text-lg lg:text-xl">
          <span className="mr-2">+</span>
          <p>Compare</p>
        </button>
      </div>
      <hr className="w-full border border-[#d9d9d9] mb-10" />
      <div className="text-[#9f9f9f] mb-3 flex">
        <p className="mr-[61px] ">SKU</p>
        <p className="mr-3 font-medium">:</p>
        <p>SS001</p>
      </div>
      <div className="text-[#9f9f9f] mb-3 flex">
        <p className="mr-[26px]">Category</p>
        <p className="mr-3 font-medium">:</p>
        <p>Sofas</p>
      </div>
      <div className="text-[#9f9f9f] mb-3 flex">
        <p className="mr-[60px] ">Tags</p>
        <p className="mr-3 font-medium">:</p>
        <p>Sofa, Chair, Home, Shop</p>
      </div>
      <div className="text-[#9f9f9f] mb-3 flex">
        <p className="mr-[52px] ">Share</p>
        <p className="mr-3 font-medium">:</p>
        <div className="flex items-center gap-x-6">
          <FaFacebook className="w-5 h-5 bg-white text-black rounded-full" />
          <FaLinkedin className="w-5 h-5 bg-white text-black" />
          <AiFillTwitterCircle className="w-[22px] h-[22px] bg-white text-black rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
