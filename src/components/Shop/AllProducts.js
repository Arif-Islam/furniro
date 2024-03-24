import products from "@/products";
import Image from "next/image";
import filter from "../../assets/Shop/filter.png";
import icon1 from "../../assets/Shop/rectangle.png";
import icon2 from "../../assets/Shop/vector.png";
import ProductCard from "../Home/ProductCard";

const AllProducts = () => {
  // console.log("products", products);
  return (
    <div>
      <div className="md:h-[100px] bg-[#F9F1E7] py-8 md:py-0">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10 2xl:px-24 h-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-y-6">
          <div className="flex items-center gap-x-8 md:gap-x-6">
            <div className="flex items-center gap-x-2">
              <Image src={filter} alt="" width={22} height={22} />
              <p className="lg:text-xl">Filter</p>
            </div>
            <Image src={icon1} alt="" width={22} height={22} />
            <Image src={icon2} alt="" width={22} height={22} />
            <hr className="w-9 rotate-90 border border-[#9f9f9f] hidden md:block" />
            <p className="text-sm lg:text-base hidden md:block">
              Showing 1-16 of 32 results
            </p>
          </div>
          <div className="md:hidden">
            <p className="text-sm lg:text-base">Showing 1-16 of 32 results</p>
          </div>
          <div className="flex items-center gap-x-3 lg:gap-x-6">
            <p className="lg:text-xl">Show</p>

            <input
              type="text"
              className="w-[40px] lg:w-[55px] h-[40px] lg:h-[55px] flex items-center justify-center lg:text-xl bg-white text-[#9f9f9f] text-center"
              placeholder="16"
            />
            <p className="lg:text-xl">Sort By</p>
            <input
              type="text"
              className="w-[100px] lg:w-[188px] h-[40px] lg:h-[55px] flex items-center justify-center lg:text-xl bg-white text-[#9f9f9f] text-center"
              placeholder="Default"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-[1250px] mx-auto flex items-center justify-center gap-3 md:gap-[32px] my-14 px-3 md:px-5 xl:px-0 flex-wrap">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <div className="flex items-center justify-center gap-x-4 md:gap-x-9 mb-20">
          <button className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] flex items-center justify-center bg-[#B88E2F] rounded-[10px] text-white text-lg xl:text-xl">
            1
          </button>
          <button className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] flex items-center justify-center bg-[#F9F1E7] hover:bg-[#B88E2F] rounded-[10px] text-black hover:text-white transition-all duration-200 ease-linear text-lg xl:text-xl">
            2
          </button>
          <button className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] flex items-center justify-center bg-[#F9F1E7] hover:bg-[#B88E2F] rounded-[10px] text-black hover:text-white transition-all duration-200 ease-linear text-lg xl:text-xl">
            3
          </button>
          <button className="w-[68px] md:w-[98px] h-[40px] md:h-[60px] flex items-center justify-center bg-[#F9F1E7] hover:bg-[#B88E2F] rounded-[10px] text-black hover:text-white transition-all duration-200 ease-linear text-lg xl:text-xl">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
