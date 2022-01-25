const validators = {
  //test validator
  isNaN: (data) => {
    console.log("am i running?");
    return !isNaN(data);
  },
  //emailbox validator
  isEmailValid: (data) => {
    return String(data)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  },
  //firstname and lastname validator
  isNameValid: (name) => {
    if (typeof name !== "string" || /[0-9]+/g.test(name) ||name==='') {
      return false;
    }
    return true;
  },
};
// ... more additional validators;
export default validators;
