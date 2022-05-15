import React from "react";
import Card from "../Layout/Card";
import OrderStatus from "../UI/OrderStatus";
import "./OrderConfirm.css";
const OrderConfirm = (props) => {
  return (
    <div>
      <div id="OCheader" className="w-screen my-6">
        <h1 className="flex  w-1/2 text-3xl font-semibold mt-6" id="OCH">
          Order Confirmation
        </h1>
        <p className="lg:ml-32 md:ml-16 md:mt-5 lg:mt-10 font-normal">
          Your order have been received currently in processing . we will give
          you updates For order confirmation and after <br className="sm:hidden md:hidden lg:block" />
          shipping the order .<span> Having Issues ? </span>
        <a href="mailto:anandvb2013@gmail.com" className="text-red-600 underline font-semibold font-sm" >Contact us</a>
        </p>
        
      </div>

      <div className="lg:ml-32 lg:mt-12 md:ml-16">
        <Card class="lg:w-9/12 md:w-100 pr-32 h-3/4 flex  shadow-none  border-2 border-grey-600">
          <div className=" inline-flex flex-col w-8/12 self-center justify-start  mb-8 ">
            <div className="justify-start self-start items-center  mb-8  flex-initial">
              <h1 className="font-bold items-center mb-0 flex flex-col">
                Alchemist
                <sub className="ml-16 text-gray-600">Balagopalan Peroor</sub>
              </h1>
            </div>
            <div className=" ml-6 min:w-2/6 md:w-8/12 lg:w-6/12 lg:pr-2">
              <img
                src="https://bookstallbucket.s3.amazonaws.com/Front+page.jpg"
                alt="Front "
              />
            </div>
          </div>
          <div className="flex flex-col w-10/12  h-full">
            <h1 className=" text-lg items-start justify-start self-start mt-3"><b>Order Number :</b>  <p className="inline text-sm">{props.od.bookid.S}</p></h1>
            <p className="text-sm text-left ml-3 mt-10">
              {props.od.address.M.firstname.S} {" "} {props.od.address.M.lastName.S} <br/>
              {props.od.address.M.Email.S} <br/>
              {props.od.address.M.Phone.S} <br/>
              {props.od.address.M.AddressLine1.S} <br/>
              {props.od.address.M.AddressLine2.S} <br/>
              {props.od.address.M.City.S}  {props.od.address.M.Pin.S} <br/>
              {props.od.address.M.State.S} <br/>
            </p>
            <OrderStatus/>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OrderConfirm;
