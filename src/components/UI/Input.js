import { useState, useEffect } from "react";
import createValidator from '../utils/CreateValidator'

const Input = (props) => {
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [value, setValue] = useState("");
  const validatorForThisItem = createValidator(props.validate);
  useEffect(() => {
    console.log(validatorForThisItem);
  }, []);

  const inputIsInvalid = !isValid && isTouched;
  let classElement =''
  inputIsInvalid ? classElement = "border-red-400 border-2" : classElement = "border-gray-400 border"
  return (
    <div className="flex  gap-3 ">
      <div className=" w-32 self-end justify-self-end top-0 align-top justify-end text-right mb-1" >
        <label for={props.name} className="text-right">
          {props.title}
        </label>
      </div>
      <div className="flex flex-col ">
        <input
          id={props.id}
          className={"self-start justify-self-start border-solid  rounded shadow mt-1 "+classElement }
          name={props.name}
          type={props.type}
          onBlur={() => {
            setIsTouched(true);
          }}
          onChange={(e) => {
            let valid = validatorForThisItem(e.target.value);
            setIsValid(valid);
            props.handleChange(e, valid);
          }}
        />
        
      </div>
    </div>
  );
};

export default Input;
