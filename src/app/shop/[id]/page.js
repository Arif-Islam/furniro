import Image from "next/image";
import sofa1 from "../../../assets/Shop/sofa-group.png";
import sofa2 from "../../../assets/Shop/sofa-group2.png";
import breadcrumbArrow from "../../../assets/breadcrumb-arrow.png";
import ProductCard from "../../../components/Home/ProductCard";
import ProductDetails from "../../../components/Shop/ProductDetails";
import ProductSlider from "../../../components/Shop/ProductSlider";
import products from "../../../products";
import Link from "next/link";
const Proudct = () => {
  return (
    <div className="font-poppins">
      <div className="bg-[#F9F1E7]">
        <div className="max-w-[1440px] mx-auto h-[70px] md:h-[100px] px-4 lg:px-12 2xl:px-[100px] flex items-center">
          <p className="text-[#9f9f9f] mr-2 md:mr-[14px]">Home</p>
          <Image
            src={breadcrumbArrow}
            alt="breadcrumbArrow"
            width={6}
            height={6}
            className="mt-1 mr-6"
          />
          <p className="text-[#9f9f9f] mr-2 md:mr-[14px]">Shop</p>
          <Image
            src={breadcrumbArrow}
            alt="breadcrumbArrow"
            width={6}
            height={6}
            className="mt-1 mr-6"
          />
          <hr className="bg-[#9f9f9f] rotate-90 w-9 border border-[#9f9f9f] mr-5 md:mr-9" />
          <h4 className="">Asgaard Sofa</h4>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-[1240px] mx-auto my-9 flex flex-col lg:flex-row items-center lg:items-start px-5 xl:px-0 gap-y-10 lg:gap-x-10 xl:gap-x-16">
          <ProductSlider />
          <ProductDetails />
        </div>
        <hr className="border border-[#d9d9d9] mb-12" />
        <div className="max-w-[1240px] mx-auto px-5 xl:px-0">
          <div className="flex items-center justify-center gap-x-4 md:gap-x-12 md:text-2xl mb-9">
            <p className="font-medium w-1/3 mx-auto md:hidden">Description</p>
            <p className="text-[#9f9f9f] w-1/3 mx-auto md:hidden">
              Additional Information
            </p>
            <p className="text-[#9f9f9f] w-1/3 mx-auto md:hidden">
              Reviews [5]
            </p>
            <p className="font-medium hidden md:block">Description</p>
            <p className="text-[#9f9f9f] hidden md:block">
              Additional Information
            </p>
            <p className="text-[#9f9f9f] hidden md:block">Reviews [5]</p>
          </div>
          <p className="mb-7 max-w-[1026px] mx-auto text-[#9f9f9f] text-justify text-sm md:text-base">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="mb-9 max-w-[1026px] mx-auto text-[#9f9f9f] text-justify text-sm md:text-base">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-y-7 gap-x-7 mb-16">
            <Image src={sofa1} alt="" width={605} height={348} />
            <Image src={sofa2} alt="" width={605} height={348} />
          </div>
        </div>
        <hr className="border border-[#d9d9d9] mb-12" />
        <div>
          <p className="text-center font-medium text-[#3a3a3a] text-[28px] md:text-[36px] mb-8">
            Related Products
          </p>
          <div className="max-w-[1250px] mx-auto flex items-center justify-center gap-3 md:gap-[32px] mb-14 px-3 md:px-5 xl:px-0 flex-wrap">
            {products.slice(0, 4).map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
          <div className="flex items-center justify-center mb-20">
            <Link
              href="/shop"
              className="w-[245px] h-[48px] bg-white font-semibold text-[#B88E2F] border border-[#B88E2F] flex items-center justify-center hover:text-white hover:bg-[#B88E2F] transition-all duration-300 ease-linear"
            >
              Show More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proudct;
