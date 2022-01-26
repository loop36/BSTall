import validators from "./validators";


const createValidator = function (validatorKeys) {
    return function (data) {
      return validatorKeys.every((key) => {
        const currentValidator =
          validators.hasOwnProperty(key) && validators[key];
        return currentValidator && currentValidator(data);
      });
    };
  };
  export default createValidator;