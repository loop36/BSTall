import React from 'react'
import classes from './AddressForm.module.css'
import useInput from '../../hooks/use-input'

const AddressForm = (props) => {
    let formValid = false
  const {    Value: enteredNameValue,
    InputValid: NameValid,
    setValue: onNameValueHandler,
    setTouched: onNameTouchedHandler,
    hasError: NamehasError,
    reset: NameresetHandler} = useInput(value=> value.trim() !== '')

  const {    Value: enteredAddressValue,
    InputValid: AddressValid,
    setValue: onAddressValueHandler,
    setTouched: onAddressTouchedHandler,
    hasError: AddresshasError,
    reset: AddressresetHandler} = useInput(value=> value.trim() !== '')

  const {    Value: enteredPostalValue,
      InputValid: PostalValid,
      setValue: onPostalValueHandler,
      setTouched: onPostalTouchedHandler,
      hasError: PostalhasError,
      reset: PostalresetHandler} = useInput(value=> value.trim() !== '')  

  const {    Value: enteredMobValue,
      InputValid: MobValid,
      setValue: onMobValueHandler,
      setTouched: onMobTouchedHandler,
      hasError: MobhasError,
      reset: MobresetHandler} = useInput(value=> value.length === 10) 


      if(NameValid && AddressValid && PostalValid && MobValid) {
         formValid = true

      }

const formSubmitHandler =(event)=> {
  event.preventDefault()
 if(formValid)
 {
  const submittedData = {
    name: enteredNameValue,
    address: enteredAddressValue,
    postal: enteredPostalValue,
    mob: enteredMobValue
  }
  NameresetHandler()
  AddressresetHandler()
  PostalresetHandler()
  MobresetHandler()
  console.log("Submitted")


  props.onSubmitUserData(submittedData)
 }
 else{
   return
 }
}


    return (
<form onSubmit={formSubmitHandler}>
    <div className={classes.control}>
    <label>Name</label>
    <input type="text" value={enteredNameValue} onChange={onNameValueHandler} onBlur={onNameTouchedHandler}/>
    {NamehasError && <p>Please enter a valid name</p>}
    </div>
    <div className={classes.control}>
    <label>Address</label>
    <input type="text" value={enteredAddressValue} onChange={onAddressValueHandler} onBlur={onAddressTouchedHandler} />
    {AddresshasError && <p>Please enter a valid address</p>}
    </div>
    <div className={classes.control}>
    <label>Postal</label>
    <input type="number" value={enteredPostalValue} onChange={onPostalValueHandler} onBlur={onPostalTouchedHandler} />
    {PostalhasError && <p>Please enter a valid postal code</p>}
    </div>
    <div className={classes.control}>
    <label>MobileNumber</label>
    <input type="number" value={enteredMobValue} onChange={onMobValueHandler} onBlur={onMobTouchedHandler} />
    {MobhasError && <p>Please enter a valid mobile number</p>}
    </div>
    <div className={classes.actions}>
    <button disabled= {!formValid} type="submit" className={classes.submit}>Confirm</button>
    <button type="button" onClick={props.onCancel} >Cancel</button>
    </div>

 </form>
    )
}

export default AddressForm