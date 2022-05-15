import { Element } from "react-scroll";
import { Suspense, useState } from "react";

import OrderSearchModal from "./OrderSearchModal";

const OrderSearch = () => {
  const [OSToggle, setOSToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
 
  return (
    <Element name="OS" className="flex w-100 mb-0  mt-12 bg-blue-50 py-5 pb-8">
      <div className="flex self-center m-auto items-center flex-col gap-3 ">
        <h1 className=" text-base font-semibold flex">
          Search your Orders here
        </h1>
        <form className="flex flex-col gap-2 mt-8" onSubmit={(e)=>{
          e.preventDefault();
          setOSToggle(true);
        }}>
          <div className="flex gap-3">
            <label for="email" className="w-32">
              Email ID
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter your Email ID"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex gap-3">
            <label for="phone" className=" w-32">
              Phone Number
            </label>
            <input
              className="ml-1"
              type="text"
              name="phone"
              placeholder="Enter your Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button className="mt-6 bg-green-600 w-36 self-end text-white capitalize text-sm text-center p-1 shadow-md rounded-lg font-semibold">
            Search your order
          </button>
        </form>
        {OSToggle ?
         <OrderSearchModal email={email} phone={phone}></OrderSearchModal>: ""}
        <div className="flex gap-3 mt-10">
          <span className="text-gray-700 "> Having Issues ? </span>
          <a
            href="mailto:anandvb2013@gmail.com"
            className="text-red-600 underline font-semibold font-sm"
          >
            Contact us
          </a>
        </div>
      </div>
    </Element>
  );
};

export default OrderSearch;
