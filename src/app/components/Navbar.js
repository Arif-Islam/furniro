"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { AlignJustify, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../assets/Meubel House_Logos-05.png";
import fav from "../assets/akar-icons_heart.png";
import cart from "../assets/ant-design_shopping-cart-outlined.png";
import user from "../assets/mdi_account-alert-outline.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="max-w-[1400px] h-[80px] md:h-[100px] bg-white mx-auto flex items-center justify-between px-3 lg:px-10 2xl:px-[54px]">
      {/* logo */}
      <div className="flex items-center gap-x-1">
        <Image
          src={logo}
          width={50}
          height={32}
          alt="logo"
          className="w-7 h-7 md:w-[50px] md:h-[50px] "
        />
        <p className="font-montserrat font-bold text-xl md:text-[34px] text-black">
          Furniro
        </p>
      </div>
      {/* nav items */}
      <div className="font-poppins font-medium hidden lg:block">
        <Link
          href="/"
          className="pr-[35px] 2xl:pr-[75px] hover:text-[#B88E2F] transition-all duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          href="/"
          className="pr-[35px] 2xl:pr-[75px]  hover:text-[#B88E2F] transition-all duration-300 ease-in-out"
        >
          Shop
        </Link>
        <Link
          href="/"
          className="pr-[35px] 2xl:pr-[75px]  hover:text-[#B88E2F] transition-all duration-300 ease-in-out"
        >
          About
        </Link>
        <Link
          href="/"
          className=" hover:text-[#B88E2F] transition-all duration-300 ease-in-out"
        >
          Contact
        </Link>
      </div>
      {/* icons */}
      <div className="flex items-center gap-x-3 md:gap-x-[25px] 2xl:gap-x-[45px]">
        <Image
          src={user}
          width={28}
          height={28}
          alt="user"
          className="w-5 h-5 md:w-7 md:h-7"
        />
        <Search className="w-5 h-5 md:w-7 md:h-7" />
        <Image
          src={fav}
          width={28}
          height={28}
          alt="fav"
          className="hover:bg-red-500 rounded-full hover:text-red-500 w-5 h-5 md:w-7 md:h-7"
        />
        <Image
          src={cart}
          width={28}
          height={28}
          alt="cart"
          className="w-5 h-5 md:w-7 md:h-7"
        />
        <AlignJustify
          className="w-5 h-5 md:w-7 md:h-7 lg:hidden"
          onClick={() => setOpen(true)}
        />
      </div>
      {open && (
        <div
          data-aos="fade-left"
          className="lg:hidden absolute inset-y-0 right-0 z-10 w-full flex flex-col items-end"
        >
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black opacity-5"
          ></div>
          <div className="bg-white z-10 inset-y-0 right-0 w-4/5 flex flex-col items-end h-full">
            <X
              className="w-6 h-6 md:w-8 md:h-8 absolute top-9 right-4 "
              onClick={() => setOpen(false)}
            />
            <nav className="flex flex-col items-center justify-center h-full w-full text-2xl md:text-3xl gap-y-10 text-gray-800 hover:text-black font-poppins font-medium ">
              <Link
                href="/"
                className=" hover:text-[#B88E2F] transition-all duration-300 ease-in-out"
              >
                Home
              </Link>
              <Link
                href="/"
                className="  hover:text-[#B88E2F] transition-all duration-300 ease-in-out"
              >
                Shop
              </Link>
              <Link
                href="/"
                className=" hover:text-[#B88E2F] transition-all duration-300 ease-in-out"
              >
                About
              </Link>
              <Link
                href="/"
                className=" hover:text-[#B88E2F] transition-all duration-300 ease-in-out"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
