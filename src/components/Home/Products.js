import Link from "next/link";
// import img5 from "../../assets/products/image-5.png";
// import {
//   default as img4,
//   default as img5,
// } from "../../assets/products/image-4.png";
import products from "@/products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div>
      <p className="text-center font-bold text-[#3a3a3a] text-3xl md:text-[40px] pt-16 mb-8">
        Our Products
      </p>
      <div className="max-w-[1250px] mx-auto flex items-center justify-center gap-3 md:gap-[32px] mb-14 px-3 md:px-5 xl:px-0 flex-wrap">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          href="/shop"
          className="w-[245px] h-[48px] bg-white font-semibold text-[#B88E2F] border border-[#B88E2F] flex items-center justify-center hover:text-white hover:bg-[#B88E2F] transition-all duration-300 ease-linear mb-6"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Products;
