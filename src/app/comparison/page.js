"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import img1 from "../../assets/Comparison/img1.png";
import img2 from "../../assets/Comparison/img2.png";
import ratingImage from "../../assets/Shop/rating.png";
import CommonBanner from "../../components/Shared/CommonBanner";
import "../../styles/select.css";

const ProductCard = ({ img, name, price, rating, review }) => {
  return (
    <div>
      <Image src={img} alt="" width={280} height={177} className="mb-4" />
      <div className="pl-1">
        <p className="font-medium text-xl lg:text-2xl mb-[6px]">{name}</p>
        <p className="lg:text-lg font-medium mb-[7px]">{price}</p>
        <div className="flex items-center flex-wrap">
          <p className="font-medium lg:text-lg mr-2">{rating}</p>
          <Image src={ratingImage} alt="" width={124} height={20} />
          <hr className="rotate-90 w-[30px] border border-[#9f9f9f]" />
          <p className="text-sm text-[#9f9f9f]">{review}</p>
        </div>
      </div>
    </div>
  );
};

const Compare = () => {
  const [select, setSelect] = useState(false);
  const [selectValue, setSelectValue] = useState("Choose a product");
  return (
    <div className="font-poppins">
      <CommonBanner title="Product Comparison" route="Comparison" />
      <div className="max-w-[1332px] mx-auto mb-10 lg:px-6 2xl:px-6">
        <div className="flex items-center justify-center xl:justify-start xl:items-start md:gap-5 xl:gap-10 flex-wrap xl:flex-nowrap">
          <div className="md:w-1/3 xl:w-1/4 mt-12">
            <p className="font-medium text-xl lg:text-[28px] mb-5 w-[260px] xl:w-auto lg:leading-[32px]">
              Go to Product page for more Products
            </p>
            <Link
              href="/shop"
              className="font-medium text-base lg:text-xl border-b-2 border-b-[#727272] text-[#727272]"
            >
              View More
            </Link>
          </div>
          <div className="md:w-1/3 xl:w-1/4 mt-8 md:mt-[20px] xl:mt-[34px]">
            <ProductCard
              img={img1}
              name="Asgaard Sofa"
              price="Rs. 250,000.00"
              rating="4.7"
              review="204 Review"
            />
          </div>
          <div className="md:w-1/3 xl:w-1/4 mt-4 md:mt-0">
            <ProductCard
              img={img2}
              name="Outdoor Sofa Set"
              price="Rs. 224,000.00"
              rating="4.2"
              review="145 review"
            />
          </div>
          <div className="md:w-1/3 xl:w-1/4 mt-12 md:mt-0 xl:mt-[83px]">
            <p className="font-semibold text-xl lg:text-2xl mb-[14px]">
              Add A Product
            </p>
            <div
              onClick={() => setSelect(!select)}
              className="w-[242px] h-[39px] rounded-md bg-[#B88E2F] text-white text-sm font-semibold pl-4 pr-3 cursor-pointer flex items-center justify-between mb-1"
            >
              <p>{selectValue}</p>
              <ChevronDown className="cursor-pointer text-white" />
            </div>
            {select && (
              <div className="w-[242px] gap-y-1 rounded-md bg-[#B88E2F] text-white text-sm font-semibold pl-4 pr-3 cursor-pointer flex flex-col items-start justify-start">
                <p
                  onClick={() => {
                    setSelectValue("Asgaard Sofa");
                    setSelect(false);
                  }}
                  className="pt-2 hover:font-bold"
                >
                  Asgaard Sofa
                </p>
                <p
                  onClick={() => {
                    setSelectValue("Outdoor Sofa Set");
                    setSelect(false);
                  }}
                  className="pt-1 pb-1 hover:font-bold"
                >
                  Outdoor Sofa Set
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
