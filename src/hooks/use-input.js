import {useState} from 'react'

const useInput=(ValidationMethod)=> {

const [enteredValue, setEnteredValue]= useState('')
const [inputTouched, setInputTouched] = useState(false)

  
const InputValid = ValidationMethod(enteredValue) && inputTouched

let hasError = false

if(inputTouched && !ValidationMethod(enteredValue)) {
  
    hasError = true

}

const onInputValueHandler =(event)=> {
    setEnteredValue(event.target.value)
}

const onInputTouchedHandler =()=> {
    setInputTouched(true)
}

const resetHandler =()=> {
    setEnteredValue('')
    setInputTouched(false)
}

return {
    Value: enteredValue,
    InputValid: InputValid,
    setValue: onInputValueHandler,
    setTouched: onInputTouchedHandler,
    hasError: hasError,
    reset: resetHandler
}

}

export default useInput