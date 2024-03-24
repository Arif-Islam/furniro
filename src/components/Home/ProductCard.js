import Image from "next/image";
import share from "../../assets/products/share.png";
import compare from "../../assets/products/compare.png";
import heart from "../../assets/products/heart.png";

const ProductCard = ({ item }) => {
  const { img, title, desc, price } = item;
  return (
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-[446px] w-72 relative">
        <div class="">
          <Image
            class=" object-cover transition-transform duration-500 group-hover:scale-105"
            src={img}
            alt=""
            width={285}
            height={301}
          />
        </div>
        <div className="p-4 bg-[#F4F5F7]">
          <h3 class="font-semibold text-[#3a3a3a] text-xl md:text-2xl z-1 mb-2">
            {title}
          </h3>
          <p className="text-[#898989] font-medium mb-2">{desc}</p>
          <div className="flex items-center gap-x-4 pb-[10px]">
            <p className="text-[#3a3a3a] font-semibold text-lg md:text-xl">
              {price}
            </p>
            {item?.oldPrice && (
              <p className="text-[#b0b0b0] line-through">{item?.oldPrice}</p>
            )}
          </div>
        </div>
        {item?.tag && (
          <div
            className={`${
              item?.tag === "New" ? "bg-[#2EC1AC]" : "bg-[#E97171]"
            }  rounded-full w-12 h-12 text-center absolute top-6 right-6 flex items-center justify-center font-medium text-white`}
          >
            <p>{item?.tag}</p>
          </div>
        )}
      </div>
      <div class="absolute inset-0 group-hover:bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0 ">
        <button className="w-[202px] h-[48px] bg-white font-semibold text-[#B88E2F] hover:text-white hover:bg-[#B88E2F] transition-all duration-300 ease-linear mb-6">
          Add to Cart
        </button>
        <div className="flex items-center gap-x-5 font-semibold text-white">
          <div className="flex items-center gap-x-1">
            <Image src={share} alt="share" width={18} height={18} />{" "}
            <p>Share</p>
          </div>
          <div className="flex items-center gap-x-1">
            <Image src={compare} alt="share" width={18} height={18} />
            <p>Compare</p>
          </div>
          <div className="flex items-center gap-x-1">
            <Image src={heart} alt="share" width={18} height={18} />
            <p>Like</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
