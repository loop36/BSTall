import { useState,useEffect } from "react";
import Input from "../UI/Input";
import { AddressFields } from "./AddressFields";
import validators from "./validators";
const AddressForm = (props) => {
  const [formData,setFormData]=useState({});
  useEffect(()=>{
    console.log(formData)
  },[formData])
  return (
    <div id="ShippingAddress" className="flex flex-col gap-1">
      <h1 className="font-bold self-start mb-12"> Address Details</h1>
      {AddressFields.map((addr) => {
         const handleChange= (e,valid)=>{
          setFormData({...formData,[addr.name]:{value:e.target.value,isValid:valid }})
        }
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

      <div className="flex gap-3 justify-center mt-24">
        <button className=" w-32 self-center bg-green-500  text-center rounded-lg h-10 font-bold text-gray-100 capitalize">
          place order
        </button>
        <button  className=" w-32 self-center bg-red-700  text-center rounded-lg h-10 font-bold text-gray-100 capitalize" onClick={props.close} > Cancel</button>
      </div>
    </div>
  );
};

export default AddressForm;
