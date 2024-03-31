import Image from "next/image";
import Link from "next/link";
import img1 from "../../assets/Cart/image1.png";
import img2 from "../../assets/Cart/image2.png";
import removeItems from "../../assets/Cart/remove-cart-item.png";
import remove from "../../assets/Cart/remove.png";

const cartItems = [
  {
    id: 1,
    name: "Asgaard Sofa",
    img: img1,
    quantity: 1,
    price: "Rs. 250,000.00",
  },
  {
    id: 2,
    name: "Casaliving Wood",
    img: img2,
    quantity: 1,
    price: "Rs. 270,000.00",
  },
];

const Cart = ({ setCart }) => {
  return (
    <div className="py-7 ">
      <div className="px-5 md:px-7">
        <div className="flex justify-between items-center mb-6">
          <p className="font-semibold text-xl lg:text-2xl">Shopping Cart</p>
          <Image
            src={removeItems}
            alt=""
            width={20}
            height={20}
            className="w-[17px] h-[19px] cursor-pointer"
            onClick={() => setCart(false)}
          />
        </div>
        <hr className="border border-[#d9d9d9] w-3/4 md:w-[300px] mb-10" />
        <div className="flex flex-col items-between gap-y-5 h-[calc(100vh-300px)] overflow-y-auto mb-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center gap-x-5 md:gap-x-8">
                <Image
                  src={item.img}
                  alt=""
                  width={108}
                  height={105}
                  className="w-[80px] h-[77px] md:w-[108px] md:h-[105px]"
                />
                <div>
                  <p className="mb-[10px]">{item.name}</p>
                  <p>
                    <span className="mr-2">{item.quantity}</span>
                    <span className="text-sm mr-2"> X </span>
                    <span className="text-sm text-[#B88E2F] font-medium">
                      {item.price}
                    </span>
                  </p>
                </div>
              </div>
              <Image
                src={remove}
                alt=""
                width={20}
                height={20}
                className="w-[20px] h-[20px] cursor-pointer"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <p>Subtotal</p>
          <p className="text-[#B88E2F] font-semibold">Rs. 520,000.00</p>
        </div>

        {/* <Image src={img2} alt="" width={17} height={19} /> */}
      </div>
      <hr className="border border-[#d9d9d9] mb-7" />
      <div className="flex items-center justify-center gap-x-[14px]">
        <Link
          href="/shop"
          className="text-xs w-[67px] md:w-[87px] h-[30px] rounded-[50px] border border-black flex items-center justify-center"
        >
          Cart
        </Link>
        <Link
          href="/"
          className="text-xs w-[98px] md:w-[118px] h-[30px] rounded-[50px] border border-black flex items-center justify-center"
        >
          Checkout
        </Link>
        <Link
          href="/comparison"
          className="text-xs w-[115px] md:w-[135px] h-[30px] rounded-[50px] border border-black flex items-center justify-center"
        >
          Comparison
        </Link>
      </div>
    </div>
  );
};

export default Cart;
