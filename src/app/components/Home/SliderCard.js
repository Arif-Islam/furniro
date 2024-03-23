import Image from "next/image";
import "./styles.css";

const SliderCard = ({ item }) => {
  const { img, title, desc } = item;
  return (
    <div className="w-full h-full relative">
      <Image src={img} alt="img" fill={true} />
      <div className="bg-white opacity-[72%] w-[220px] h-[130px] absolute bottom-6 left-6 z-2 hidden-div">
        <div className="flex flex-col h-full w-full items-start justify-center pl-6">
          <p className="mb-2 font-medium text-[#616161]">{title}</p>
          <p className="font-semibold text-black text-[22px] lg:text-[28px]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
