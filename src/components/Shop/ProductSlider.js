"use client";

import Image from "next/image";
import { useState } from "react";
import img1 from "../../assets/Shop/sofa1.png";
import img2 from "../../assets/Shop/sofa2.png";
import img3 from "../../assets/Shop/sofa3.png";
import img4 from "../../assets/Shop/sofa4.png";
import img5 from "../../assets/Shop/sofa5.png";

const ProductSlider = () => {
  const [currentImage, setCurrentImage] = useState(img1);

  return (
    <div className="max-w-[400px] md:max-w-[455px] xl:max-w-[555px] mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start gap-y-8 lg:gap-x-8">
      <div className="flex flex-row flex-wrap md:flex-nowrap lg:flex-col items-center justify-center md:justify-start md:items-start gap-x-4 md:gap-x-6 gap-y-4 lg:gap-y-8">
        <div
          onClick={() => setCurrentImage(img1)}
          className="w-[76px] h-[80px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center cursor-pointer"
        >
          <Image src={img1} alt="" width={83} height={55} />
        </div>
        <div
          onClick={() => setCurrentImage(img2)}
          className="w-[76px] h-[80px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center cursor-pointer"
        >
          <Image src={img2} alt="" width={83} height={55} />
        </div>
        <div
          onClick={() => setCurrentImage(img3)}
          className="w-[76px] h-[80px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center cursor-pointer"
        >
          <Image src={img3} alt="" width={83} height={55} />
        </div>
        <div
          onClick={() => setCurrentImage(img4)}
          className="w-[76px] h-[80px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center cursor-pointer"
        >
          <Image src={img4} alt="" width={83} height={55} />
        </div>
        <div
          onClick={() => setCurrentImage(img5)}
          className="w-[76px] h-[80px] bg-[#F9F1E7] rounded-[10px] flex items-center justify-center cursor-pointer"
        >
          <Image src={img5} alt="" width={83} height={55} />
        </div>
      </div>
      <div className="md:w-[350px] xl:w-[423px] h-[300px] md:h-[475px] xl:h-[525px] rounded-[10px] bg-[#F9F1E7] flex items-center justify-center ">
        <Image src={currentImage} alt="" width={555} height={555} />
      </div>
    </div>
  );
};

export default ProductSlider;
