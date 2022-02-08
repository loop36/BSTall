import { useState, useEffect } from "react";
import Card from "../Layout/Card";
import Modal from "../Layout/Modal";
import Input from "../UI/Input";
import { AddressFields } from "./AddressFields";
import axios from "axios";
const AddressForm = (props) => {
  const [formData, setFormData] = useState({});
  let isFormValid = false;
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  /* Code to Check form validity based on the each input validity
  @loop36
*/
  const checkFormValid = () => {
    let data = Object.values(formData); //creating array of object from nested formdata object
    if (data.length === AddressFields.length) isFormValid = true;
    console.log("data.length " + data.length); //checking all elements are updated
    for (var i = 0, l = data.length; i < l; i++) {
      isFormValid = isFormValid && data[i].isValid; //checking validity of each form field and setting form validity
    }
    return isFormValid;
  };
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const result = await axios.post(
      "http://localhost:3001/payment/orders",
      formData
    );

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_vQozQsFPHKwdCk", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Soumya Corp.",
      description: "Book Test Order",
      image: "https://bookstallbucket.s3.amazonaws.com/Image+8.png",
      order_id: order_id,
      handler: async function (response) {
        console.log(typeof order_id + " " + order_id);
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        console.log(data);
        const result = await axios.post(
          "http://localhost:3001/payment/success",
          data
        );

        if (result.data.msg === "success") props.close();
      },
      prefill: {
        name: "Example Name",
        email: "email@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Authors Address",
      },
      theme: {
        color: "#000000",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  const submitForm = (e) => {
    e.preventDefault();
    console.log(checkFormValid());
    if (checkFormValid()) {
      // let data
      displayRazorpay();
    }
    else {
      alert("Address details are invalid or incomplete ")
    }
  };
  return (
    <div
      id="ShippingAddress"
      className="flex flex-col gap-1 md:w-96 lg:w-96 xl:w-96 sm:w-3/5 items-start justify-center"
    >
      <form action="submit" method="POST" onSubmit={submitForm}>
        <div className="flex justify-between mb-6 w-96">
        
        <h1 className="font-bold self-center items-center b- text-base m-auto "> Address Details </h1>
        <h3 onClick={props.close} className="items-end mr-3 text-red-600 hover:underline transition-all cursor-pointer font-bold">close</h3>
        </div>

        {AddressFields.map((addr) => {
          const handleChange = (e, valid) => {
            setFormData({
              ...formData,
              [addr.name]: { value: e.target.value, isValid: valid },
            });
          };
          return (
            <Input
              name={addr.name}
              id={addr.id}
              title={addr.title}
              type={addr.type}
              handleChange={handleChange}
              validate={addr.validate}
            />
          );
        })}

        <div className="flex flex-col gap-0 justify-center mt-5 z-50 ">
          <button
            className=" w-5/12 p-2 self-center ml-20   bg-green-900 text-sm hover:bg-green-500 disabled text-center rounded-lg  text-white capitalize"
            type="submit"
          >
            place order
          </button>
          {/* <button
            className=" w-24 p-2 self-center bg-red-600 text-sm text-center rounded-lg  text-gray-100 capitalize"
            onClick={props.close}
          >
            {" "}
            Cancel
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
