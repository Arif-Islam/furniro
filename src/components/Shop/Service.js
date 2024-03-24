import Image from "next/image";
import shipping from "../../assets/Shop/free-shipping.png";
import warranty from "../../assets/Shop/protection.png";
import support from "../../assets/Shop/support.png";
import trophy from "../../assets/Shop/trophy.png";

const Service = () => {
  return (
    <div className="bg-[#FAF3EA]">
      <div className="max-w-[1440px] mx-auto py-12 xl:py-[100px] px-4 lg:px-14 flex flex-col md:flex-row md:flex-wrap items-center gap-x-6 xl:gap-x-0 gap-y-6 md:gap-y-10 justify-center xl:justify-between">
        <div className="flex items-center gap-x-2 w-[300px] lg:w-[400px] xl:w-auto">
          <Image
            src={trophy}
            alt="trophy"
            width={60}
            height={60}
            className="w-8 h-8 md:w-12 md:h-12"
          />
          <div>
            <h3 className="font-semibold text-[#242424] text-xl lg:text-[25px]">
              High Quality
            </h3>
            <p className="text-[#898989] font-medium lg:text-xl">
              crafted from top materials
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-2 w-[300px] lg:w-[400px] xl:w-auto">
          <Image
            src={warranty}
            alt="trophy"
            width={60}
            height={60}
            className="w-8 h-8 md:w-12 md:h-12"
          />
          <div>
            <h3 className="font-semibold text-[#242424] text-xl lg:text-[25px]">
              Warranty Protection
            </h3>
            <p className="text-[#898989] font-medium lg:text-xl">
              Over 2 years
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-2 w-[300px] lg:w-[400px] xl:w-auto">
          <Image
            src={shipping}
            alt="trophy"
            width={60}
            height={60}
            className="w-8 h-8 md:w-12 md:h-12"
          />
          <div>
            <h3 className="font-semibold text-[#242424] text-xl lg:text-[25px]">
              Free Shipping
            </h3>
            <p className="text-[#898989] font-medium lg:text-xl">
              Order over 150 $
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-2 w-[300px] lg:w-[400px] xl:w-auto">
          <Image
            src={support}
            alt="trophy"
            width={60}
            height={60}
            className="w-8 h-8 md:w-12 md:h-12"
          />
          <div>
            <h3 className="font-semibold text-[#242424] text-xl lg:text-[25px]">
              24 / 7 Support
            </h3>
            <p className="text-[#898989] font-medium lg:text-xl">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
