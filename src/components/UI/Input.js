import { useState, useEffect } from "react";
import validators from "../Payment/validators";

const createValidator = function (validatorKeys) {
  return function (data) {
    return validatorKeys.every((key) => {
      const currentValidator =
        validators.hasOwnProperty(key) && validators[key];
      return currentValidator && currentValidator(data);
    });
  };
};

const Input = (props) => {
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [value, setValue] = useState("");
  const validatorForThisItem = createValidator(props.validate);
  useEffect(() => {
    console.log(validatorForThisItem(value));
  }, []);

  const inputIsInvalid = !isValid && isTouched;
  return (
    <div className="flex  gap-3 ">
      <div className=" w-32 self-end justify-self-end top-0 align-top justify-end text-right mb-1">
        <label for={props.name} className="text-right">
          {props.title}
        </label>
      </div>
      <div className="flex flex-col ">
        <input
          id={props.id}
          className="self-start justify-self-start border-gray-400 border-solid border rounded shadow"
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
        {inputIsInvalid ? <p> Error</p> : ""}
      </div>
    </div>
  );
};

export default Input;
