const Footer = () => {
  return (
    <div>
      <div className="w-full border border-[#0000002B] mb-12"></div>
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-start mb-12 gap-y-12 px-6 lg:px-4 xl:px-0">
        <div className="w-[285px] mr-[80px] xl:mr-[136px]">
          <h3 className="font-extrabold text-xl lg:text-2xl mb-8 md:mb-12">
            Funiro.
          </h3>
          <p className="text-[#9f9f9f] ">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div className="w-[200px] xl:w-[285px] font-semibold">
          <p className="font-medium text-[#9f9f9f] mb-8 lg:mb-14">Links</p>
          <p className="text-black mb-5 lg:mb-12">Home</p>
          <p className="text-black mb-5 lg:mb-12">Shop</p>
          <p className="text-black mb-5 lg:mb-12">About</p>
          <p className="text-black">Contact</p>
        </div>
        <div className="w-[200px] xl:w-[285px] font-semibold">
          <p className=" text-[#9f9f9f] mb-8 lg:mb-14">Help</p>
          <p className="text-black mb-5 lg:mb-12">Payment Options</p>
          <p className="text-black mb-5 lg:mb-12">Returns</p>
          <p className="text-black">Privacy Policies</p>
        </div>

        <div className="">
          <p className="text-[#9f9f9f] mb-6 lg:mb-11">Newsletter</p>
          <div className="flex items-center gap-x-3">
            <input
              type="text"
              name=""
              id=""
              className="border border-transparent border-b-black text-sm w-[200px] p-2"
              placeholder="Enter Your Email Address"
            />
            <button className="text-black font-semibold h-9 text-sm border border-transparent border-b-black">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="border border-[#0000002B] mb-9 max-w-[1240px] mx-auto"></div>
      <p className="max-w-[1240px] mx-auto mb-10 px-6 lg:px-4 xl:px-0">
        2023 funiro. All rights reverved
      </p>
    </div>
  );
};

export default Footer;
