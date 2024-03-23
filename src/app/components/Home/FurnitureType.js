import Image from "next/image";
import img1 from "../../assets/type_1.png";
import img2 from "../../assets/type_2.png";
import img3 from "../../assets/type_3.png";

const data = [
  {
    id: 1,
    img: img1,
    title: "Dining",
  },
  {
    id: 2,
    img: img2,
    title: "Living",
  },
  {
    id: 3,
    img: img3,
    title: "Bedroom",
  },
];

const FurnitureType = () => {
  return (
    <div className="font-poppins">
      <div className="text-center py-10 md:py-14">
        <p className="text-2xl lg:text-[32px] text-[#333333] font-bold mb-2">
          Browse The Range
        </p>
        <p className="lg:text-xl text-[#666666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-3 md:gap-5 mb-14 px-3 md:px-5 xl:px-0">
        {data.map((item) => (
          <div key={item.id}>
            <Image
              src={item.img}
              alt="Items"
              width={380}
              height={480}
              className="hover:scale-105 transition-all duration-300 ease-in-out rounded-[10px] "
            />
            <p className="text-center font-semibold text-[#333333] mt-2 md:mt-[30px] md:text-xl lg:text-2xl">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurnitureType;
