import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Card from "../../components/Layout/Card";
import OrderConfirm from "../../components/OC/OrderConfirm";
import axios from "axios";
import ReactLoading from "react-loading";
const OC = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [oDetails, setODetails] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3001/orderdetails/" + params.oid)
      .then((res) => {
        console.log(res.data);
        setODetails(res.data.Item);
      });
  }, [params.oid]);

  return (
    <div className="container">
      {!oDetails ? (
        <div className="h-screen w-screen  my-auto flex items-center justify-center">
          <ReactLoading
            type="bars"
            color="rgba(239, 68, 68,1)"
            height={"100px"}
            width={"100px"}
          />
        </div>
      ) : (

        <OrderConfirm od={oDetails}/>
        // <Card class="w-1/2 m-auto mt-20 justify-center item-center text-center border-gray-700 border-2">
        //   <div className="flex flex-col ">
        //     <h3 className="text-left font-bold mb-4  text-xl">
        //       Thank You for your Order .
        //     </h3>
        //     <h1>Your Order Placed Succefully </h1>
        //     <div className="flex flex-row justify-around">
        //       <strong> Order id:</strong>
        //       <h3> {oDetails.bookid.S}</h3>
        //     </div>
        //     <div className="flex flex-row justify-around ">
        //       <strong > Status:</strong>
        //       <h3 className="text-center "> {oDetails.status.S}</h3>
        //     </div>
        //     <button
        //       onClick={() => {
        //         navigate("/");
        //       }}
        //       className=" w-5/12 p-2 self-center mt-10   bg-green-900 text-sm hover:bg-green-500 disabled text-center rounded-lg  text-white capitalize"
        //       type="submit"
        //     >
        //       Go Back
        //     </button>
        //   </div>
        // </Card>

      )}
    </div>
  );
};

export default OC;
