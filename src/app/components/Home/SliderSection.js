"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/slide-1.png";
import img2 from "../../assets/slide-2.png";
import SliderCard from "./SliderCard";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination } from "swiper/modules";

const data = [
  {
    id: 1,
    img: img1,
    title: "01 - Bed Room",
    desc: "Inner Peace",
  },
  {
    id: 2,
    img: img2,
    title: "02 - Dining Room",
    desc: "Stylish Chair",
  },
  {
    id: 3,
    img: img1,
    title: "03 - Dining Room",
    desc: "Stylish Chair",
  },
  {
    id: 4,
    img: img2,
    title: "04 - Dining Room",
    desc: "Stylish Chair",
  },
];

const SliderSection = () => {
  return (
    <div className="bg-[#FCF8F3] mt-8">
      <div className="max-w-[1440px] mx-auto pt-10 flex flex-col xl:flex-row items-center overflow-hidden gap-y-16">
        <div className="xl:w-[525px] px-6 md:pl-0 md:pr-0 xl:pl-10 2xl:pl-[100px]">
          <h2 className="font-bold text-[#3a3a3a] text-[28px] lg:text-[40px] mb-2">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="font-medium text-[#6161616] mb-6">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Link
            href="/"
            className="w-[176px] h-[48px] bg-[#B88E2F] text-white font-semibold flex items-center justify-center hover:text-[#B88E2F] hover:bg-white hover:rounded-xl transition-all duration-300 ease-linear"
          >
            Explore More
          </Link>
        </div>
        <div className="hidden md:block">
          <div
            className="w-[850px] mx-auto flex items-center justify-center gap-6 mb-20 relative p-5 lg:p-0"
            id="largeSlider"
          >
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <SliderCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <div id="arrowDiv">
            <div className="w-14 h-12 bg-[#B88E2F] flex items-center justify-center absolute bottom-6 left-[245px] z-10 cursor-pointer swiper-pagination-bullet swiper-pagination-horizontal">
              <Image src={arrow1} alt="arrow" width={24} height={24} />
            </div>
            <div
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center absolute right-0 z-10 cursor-pointer"
              style={{ boxShadow: "0px 4px 14px 1px #00000029" }}
            >
              <ChevronRight className="w-6 h-6 bg-white text-[#B88E2F]" />
            </div>
          </div> */}
          </div>
        </div>
        <div className="md:hidden w-11/12 mx-auto mb-16" id="mobileSlider">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <SliderCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
