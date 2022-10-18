class Validator {
  static isEmailAddress = (txt) => {
    if (!txt) { 
      return false;
    }

    return txt.includes("@") ? true : false;
  };

  static isPassword = (txt) => {
    if (!txt) { 
      return false;
    }

    return txt.length >= 4 ? true : false;
  };
}

export default Validator;
