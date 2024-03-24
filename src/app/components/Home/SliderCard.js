import Image from "next/image";
import Link from "next/link";
import arrow1 from "../../assets/Right-arrow.png";
import "./styles.css";

const SliderCard = ({ item }) => {
  const { img, title, desc, link } = item;
  return (
    <div className="w-full h-full relative">
      <Image src={img} alt="img" fill={true} />
      <div className="bg-white opacity-[72%] w-[220px] h-[130px] absolute bottom-10 md:bottom-6 left-6 z-2 hidden-div">
        <div className="flex flex-col h-full w-full items-start justify-center pl-6">
          <p className="mb-2 font-medium text-[#616161]">{title}</p>
          <p className="font-semibold text-black text-[22px] lg:text-[28px]">
            {desc}
          </p>
        </div>
      </div>
      <div className="hidden-div">
        <Link
          href={link}
          className="w-14 h-12 bg-[#B88E2F] flex items-center justify-center absolute bottom-10 md:bottom-6 left-[245px] z-10 cursor-pointer group"
        >
          <Image
            src={arrow1}
            alt="arrow"
            width={24}
            height={24}
            className="group-hover:translate-x-1 transition-all duration-300 ease-linear"
          />
        </Link>
      </div>
    </div>
  );
};

export default SliderCard;
