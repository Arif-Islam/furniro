// import "./style.css";
import Image from "next/image";
import img1 from "../../../assets/furniture/furniture-1.png";
import img2 from "../../../assets/furniture/furniture-2.png";
import img3 from "../../../assets/furniture/furniture-3.png";
import img4 from "../../../assets/furniture/furniture-4.png";
import img5 from "../../../assets/furniture/furniture-5.png";
import img6 from "../../../assets/furniture/furniture-6.png";
import img7 from "../../../assets/furniture/furniture-7.png";
import img8 from "../../../assets/furniture/furniture-8.png";
import img9 from "../../../assets/furniture/furniture-9.png";

const FurnitureGrid = () => {
  return (
    <div className="max-w-[1440px] mx-auto mt-16 ">
      <p className="text-center font-semibold text-lg lg:text-xl text-[#616161] mb-2">
        Share your setup with
      </p>
      <h3 className="font-bold text-center text-[#3a3a3a] text-[30px] lg:text-[40px]">
        #FuniroFurniture
      </h3>
      <div
        class="grid gap-4 h-auto md:h-screen lg:h-[60vh] xl:h-[90vh] 2xl:h-[75vh] mb-20 md:mb-40 mt-14 grid-flow-dense"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))" }}
      >
        <div class="col-span-1 row-span-12">
          <div className="w-full h-full relative">
            <Image
              src={img1}
              alt="img"
              fill
              className="object-cover hover:scale-105 transition-all duration-300 ease-linear"
            />
          </div>
        </div>
        <div class="col-span-4 row-span-12">
          <div className="w-full h-full relative">
            <Image
              src={img2}
              alt="img"
              fill
              className="object-cover hover:scale-105 transition-all duration-300 ease-linear"
            />
          </div>
        </div>
        <div class="col-span-3 row-span-12">
          <div className="w-full h-full relative">
            <Image
              src={img3}
              alt="img"
              fill
              className="object-cover hover:scale-105 transition-all duration-300 ease-linear"
            />
          </div>
        </div>
        <div class="col-span-2 row-span-12">
          <div className="w-full h-full relative">
            <Image
              src={img4}
              alt="img"
              fill
              className="object-cover hover:scale-105 transition-all duration-300 ease-linear"
            />
          </div>
        </div>
        <div class="col-span-2 row-span-12">
          <div className="w-full h-full relative">
            <Image
              src={img5}
              alt="img"
              fill
              className="object-cover hover:scale-105 transition-all duration-300 ease-linear"
            />
          </div>
        </div>
        <div class="col-span-2 row-span-12">
          <div className="w-full h-full relative">
            <Image
              src={img6}
              alt="img"
              fill
              className="object-cover hover:scale-105 transition-all duration-300 ease-linear"
            />
          </div>
        </div>
        <div class="col-span-4 row-span-12">
          <div className="w-full h-full relative">
            <Image
              src={img7}
              alt="img"
              fill
              className="object-cover hover:scale-105 transition-all duration-300 ease-linear"
            />
          </div>
        </div>
        <div class="col-span-3 row-span-12">
          <div className="w-full h-full relative">
            <Image
              src={img8}
              alt="img"
              fill
              className="object-cover hover:scale-105 transition-all duration-300 ease-linear"
            />
          </div>
        </div>
        <div class="col-span-2 row-span-12">
          <div className="w-full h-full relative">
            <Image
              src={img9}
              alt="img"
              fill
              className="object-cover hover:scale-105 transition-all duration-300 ease-linear"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureGrid;
