import axios from "axios";

const useRazorpayUtil = () => {

  const utilFunctions = {
    displayRazorpay,
    db
  };
  return utilFunctions;
};
const db=()=>{
return "loading";
}
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
async function displayRazorpay(close, formData, setIsLoading, history) {
  setIsLoading(true);
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    setIsLoading(false);
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }
  // creating a new order
  const result = await axios.post(
    "http://192.168.18.7:3001/payment/orders",
    formData
  );

  if (!result) {
    setIsLoading(false);
    alert("Server error. Are you online?");

    return;
  }
  // Getting the order details back
  const { amount, id: order_id, currency } = result.data;

  const options = {
    key: "rzp_test_vQozQsFPHKwdCk", // Enter the Key ID generated from the Dashboard
    amount: amount.toString(),
    currency: currency,
    name: "Balagopalan Peroor",
    description: "ഫാസിസ്റ്റുകൾ ഉറങ്ങാറില്ല",
    image: "https://bookstallbucket.s3.amazonaws.com/Front+page.jpg",
    order_id: order_id,
    modal: {
      escape: false,
      ondismiss: function () {
        setIsLoading(false);
        close();
      },
    },
    handler: async function (response) {
      console.log(typeof order_id + " " + order_id);
      const data = {
        orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
        addr: formData,
      };
      const result = await axios.post(
        "http://192.168.18.7:3001/payment/success",
        data
      );

      if (result.data.msg === "success") {
        setIsLoading(false);
        close();
        history("/oc/" + order_id);
      }
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
export default useRazorpayUtil;
