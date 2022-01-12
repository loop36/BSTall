import { useState } from "react";
import validators from "../Payment/validators";

const createValidator = function( validatorKeys ){
    return function( data ){
      return validatorKeys.every( key => {
        const currentValidator = validators.hasOwnProperty( key ) && validators[ key ];
        return currentValidator && currentValidator( data );
      })
    }
  }
const Input = (props) => {
    const [isValid,setIsValid]=useState(true);
    const [ value, setValue ] = useState();
    const validatorForThisItem = createValidator(props.validate );
    return (
        <div className="flex  gap-3 ">
            <div className="w-1/2 self-end justify-self-end justify-end text-right">
            <label for={props.name} className="text-right">{props.title}</label>
            </div>
            <div>
            <input id={props.id} className="self-start justify-self-start" name={props.name} type={props.type} onBlur={ () => {
        setIsValid( validatorForThisItem( value ) );
      }}/>
            </div>
          
            
        </div>
    )
}

export default Input
