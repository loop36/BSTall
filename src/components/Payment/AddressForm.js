import Input from "../UI/Input";
import { AddressFields } from "./AddressFields";
const AddressForm = () => {
  return (
    <div id="ShippingAddress" className="flex flex-col gap-1">
      <h1 className="font-bold self-start mb-12"> Address Details</h1>
      {AddressFields.map((addr) => {
        return (
          <Input
            name={addr.name}
            id={addr.id}
            title={addr.title}
            type={addr.type}
          />
        );
      })}

      <div className="flex gap-3 justify-center mt-24">
        <button className=" w-32 self-center bg-green-500  text-center rounded-lg h-10 font-bold text-gray-100 capitalize">
          place order
        </button>
        <button  className=" w-32 self-center bg-red-700  text-center rounded-lg h-10 font-bold text-gray-100 capitalize" > Cancel</button>
      </div>
    </div>
  );
};

export default AddressForm;
