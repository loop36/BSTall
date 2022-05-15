import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Input from "../UI/Input";
import { AddressFields } from "./AddressFields";
import useRazorpayUtil from "../utils/useRazorpayUtil";
import { useNavigate } from "react-router-dom";

const AddressForm = (props) => {
  const [isLoaing, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const {displayRazorpay}=useRazorpayUtil();
  let isFormValid = false;
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const checkFormValid = () => {
    console.log("formDAta  ");
    let data = Object.values(formData); //creating array of object from nested formdata object
    if (data.length === AddressFields.length) isFormValid = true;
    console.log("data.length " + data.length); //checking all elements are updated
    for (var i = 0, l = data.length; i < l; i++) {
      isFormValid = isFormValid && data[i].isValid; //checking validity of each form field and setting form validity
    }
    return isFormValid;
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(checkFormValid());
    if (checkFormValid()) {
      setIsLoading(true);
      displayRazorpay(props.close,formData,setIsLoading,navigate);
    } else {
      alert("Address details are invalid or incomplete ");
    }
  };
  
  return (
    <div
      id="ShippingAddress"
      className="relative flex flex-col gap-1 md:w-96 lg:w-96 xl:w-96 sm:w-3/5 items-start justify-center"
    >
      {isLoaing ? (
        <div className="absolute bg-gray-100 bg-opacity-70 h-full transparent md:w-96 lg:w-96 xl:w-96 w-96 rounded-lg flex items-center justify-center">
          <ReactLoading
            type="bars"
            color="rgba(239, 68, 68,1)"
            height={"15%"}
            width={"15%"}
          />
        </div>
      ) : (
        ""
      )}
      <form action="submit" method="POST" onSubmit={submitForm}>
        <div className="flex justify-between mb-6 w-96">
          <h1 className="font-bold self-center items-center b- text-base m-auto ">
            {" "}
            Address Details{" "}
          </h1>
          <h3
            onClick={props.close}
            className="items-end mr-3 text-red-600 hover:underline transition-all cursor-pointer font-bold"
          >
            close
          </h3>
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
         
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
