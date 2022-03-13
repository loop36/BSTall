import { useState, useEffect } from "react";
import createValidator from '../utils/CreateValidator'

const Input = (props) => {
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [value, setValue] = useState("");
  const validatorForThisItem = createValidator(props.validate);
  useEffect(() => {
    console.log(validatorForThisItem);
  }, [isValid]);

  const inputIsInvalid = !isValid && isTouched;
  let classElement =''
  inputIsInvalid ? classElement = "border-red-400 border-solid border-2" : classElement=""
  return (
    <div className="flex  gap-3 ">
      <div className=" w-32 self-end justify-self-end top-0 align-top justify-end text-right mb-1" >
        <label for={props.name} className="text-right">
          {props.title}
        </label>
      </div>
      <div className="flex gap-1 ">
        <input
          id={props.id}
          className={"self-start justify-self-start   rounded shadow mt-1 "+classElement }
          name={props.name}
          type={props.type}
          onBlur={(e) => {
            setIsTouched(true);
            console.log("i have triggered" +props.name)
          }}
          onChange={(e) => {
            setIsTouched(true);
            let valid = validatorForThisItem(e.target.value);
            setIsValid(valid);
            props.handleChange(e, valid);
          }}
        />
        {inputIsInvalid ?
        <span className=" inline text-red-600 capitalize"> Invalid</span>:""}
      </div>
    </div>
  );
};

export default Input;
