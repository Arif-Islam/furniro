import Image from "next/image";
import heroImage from "../../assets/hero.png";
const Hero = () => {
  return (
    <div className="h-[calc(100svh-80px)] md:h-[60vh] lg:h-[50vh] xl:h-[calc(100vh-100px)] w-full pb-0 xl:pt-20 xl:pb-32 relative overflow-hidden font-poppins">
      <Image
        src={heroImage}
        alt="image here"
        layout="fill"
        priority={true}
        className="object-cover md:object-cover z-0"
      />
      <div className="max-w-[1400px] h-full px-3 lg:px-6 xl:px-14 mx-auto z-1 relative flex flex-row items-center justify-center xl:items-end xl:justify-end">
        <div className="md:w-[45%] xl:w-1/2 hidden md:block"></div>
        <div className="md:w-[55%] xl:w-1/2 flex flex-col items-end justify-end">
          <div className="w-full bg-[#FFF3E3] rounded-[10px] px-7 lg:px-10 py-7 md:py-12">
            <p className="font-semibold tracking-[3px] text-[#333333]">
              New Arrival
            </p>
            <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[52px] text-[#B88E2F] ">
              Discover Our New Collection
            </h2>
            <p className="pt-4 font-medium text-sm lg:text-lg text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="mt-6 md:mt-10 tracking-wide bg-[#B88E2F] py-4 md:py-6 px-10 md:px-[72px] text-white font-bold hover:text-[#B88E2F] hover:rounded-xl transition-all duration-300 ease-in-out hover:bg-white">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
