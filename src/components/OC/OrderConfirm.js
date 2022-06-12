import React from "react";
import { useNavigate } from "react-router";
import Card from "../Layout/Card";
import OrderStatus from "../UI/OrderStatus";
import "./OrderConfirm.css";
const OrderConfirm = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div id="OCheader" className="w-screen my-6">
        <h1 className="flex text-xl lg:w-1/2 lg:text-3xl font-semibold lg:mt-6" id="OCH">
          Order Confirmation
        </h1>
        <p className="text-sm p-3 ml-3 lg:ml-32 md:ml-16 md:mt-2 font-normal">
          Your order have been received currently in processing . we will give
          you updates For order confirmation and after <br className=" hidden sm:hidden md:hidden lg:block" />
          shipping the order .<span classname> Having Issues ? </span>
        <a href="mailto:anandvbalagopalan@gmail.com" className="text-red-600 underline font-semibold font-sm" >Contact us</a>
        </p>
        
      </div>

      <div className="w-11/12 m-auto lg:ml-32 md:mt-4 md:ml-16">
        <Card class=" p-3 h-1/4 md:w-9/12 md:w-100 md:pr-32 md:h-/4 flex flex-col md:flex-row shadow-none  border-2 border-grey-600">
          <div className="md:hidden w-full mb-4 flex ">
          <h1 className=" text-sm w-full md:mt-3 mt-1 md:hidden"><strong>Order Number : </strong>  {props.od.bookid.S}</h1>
            </div>
          <div className=" flex md:inline-flex flex-col md:w-8/12 self-center md:justify-start  md:mb-8 ">
            <div className="justify-start self-start items-center ml-10 sm:ml-8 md:ml-5  mb-8  flex-initial">
              <h1 className="font-bold items-center mb-0 flex flex-col text-sm ">
              ഫാസിസ്റ്റുകൾ ഉറങ്ങാറില്ല
                <sub className="ml-16 mt-2 text-gray-600">Balagopalan Peroor</sub>
              </h1>
            </div>
            <div className=" w-4/12 m-auto min:w-2/6 md:w-6/12 md:pr-2">
              <img
                src="https://bookstallbucket.s3.amazonaws.com/Front+page.jpg"
                alt="Front "
              />
            </div>
          </div>
          <div className="flex flex-col md:w-10/12 justify-center items-center self-center md:justify-start md:self-start md:items-start   h-full">
            <h1 className=" md:flex md:text-lg md:items-start md:justify-start md:self-start md:mt-3 hidden"><b>Order Number :</b>  <p className="inline text-sm">{props.od.bookid.S}</p></h1>
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
      <div id="placeoreder" className=" text-center">
            <button
              className=" w-40 mb-5 text-sm self-center justify-end mt-6 lg:mt-10 border-2 border-solid bg-red-500  rounded-xl h-10 font-bold text-gray-100"
              onClick={() => {
                navigate("/");
              }}
            >
              Back to home
            </button>
          </div>
    </div>
  );
};

export default OrderConfirm;
