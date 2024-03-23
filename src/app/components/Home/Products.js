import Link from "next/link";
import img1 from "../../assets/products/image-1.png";
import img2 from "../../assets/products/image-2.png";
import img3 from "../../assets/products/image-3.png";
import img4 from "../../assets/products/image-4.png";
import img5 from "../../assets/products/image-5.png";
// import {
//   default as img4,
//   default as img5,
// } from "../../assets/products/image-4.png";
import img6 from "../../assets/products/image-6.png";
import img7 from "../../assets/products/image-7.png";
import img8 from "../../assets/products/image-8.png";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    img: img1,
    title: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    tag: "-30%",
  },
  {
    id: 2,
    img: img2,
    title: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 3.500.000",
  },
  {
    id: 3,
    img: img3,
    title: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    tag: "-50%",
  },
  {
    id: 4,
    img: img4,
    title: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
  },
  {
    id: 5,
    img: img5,
    title: "Grifo",
    desc: "Night lamp",
    price: "Rp 1.500.000",
  },
  {
    id: 6,
    img: img6,
    title: "Muggo",
    desc: "Small mug",
    price: "Rp 150.000",
    tag: "New",
  },
  {
    id: 7,
    img: img7,
    title: "Pingky",
    desc: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    tag: "-50%",
  },
  {
    id: 8,
    img: img8,
    title: "Potty",
    desc: "Minimalist flower pot",
    price: "Rp 500.000",
    tag: "New",
  },
];
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
          href="/"
          className="w-[245px] h-[48px] bg-white font-semibold text-[#B88E2F] border border-[#B88E2F] flex items-center justify-center hover:text-white hover:bg-[#B88E2F] transition-all duration-300 ease-linear mb-6"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Products;
