import { useState } from "react";

const BasicForm = (props) => {
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [passWordValue, setPasswordValue] = useState(false);

  const firstNameHandler = (event) => {
    const firstNameValue = event.target.value;
    setIsFirstNameValid(firstNameValue.length > 8 ? true : false);
  };
  const lastNameHandler = (event) => {
    const lastNameValue = event.target.value;
    setIsLastNameValid(lastNameValue.length > 8 ? true : false);
  };
  const userNameHandler = (event) => {
    const userNameValue = event.target.value;
    if (userNameValue === userNameValue.toUpperCase()) {
      setIsUserNameValid(true);
    } else {
      setIsUserNameValid(false);
    }
  };
  const emailHandler = (event) => {
    const emailValue = event.target.value;
    if (emailValue.indexOf("@") > 0) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const passwordHandler = (event) => {
    const passwordValue = event.target.value;
    let passValueArray = passwordValue.split("");
    let upperCaseCount = 0;
    passValueArray.forEach((val) => {
      if (val == val.toUpperCase()) upperCaseCount += 1;
    });
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (
      passwordValue.length > 8 &&
      format.test(passwordValue) &&
      upperCaseCount > 2
    ) {
      setIsPasswordValid(true);
      setPasswordValue(passwordValue);
    } else setIsPasswordValid(false);
  };
  const passwordConfirmHandler = (event) => {
    const passConfirmValue = event.target.value;
    if (passConfirmValue === passWordValue) {
      setIsPasswordConfirm(true);
    } else {
      setIsPasswordConfirm(false);
    }
  };
  useEffect(() => {
    if (initialValue) {
      setFormValid(true);
    } else setFormValid(false);
  }, [initialValue]);

  const inputHandler = (event) => {
    setInitialValue(event.target.value);
    const { value } = event.target;
    setUpperCase(checkUpperCase(value));
    setSpecChar(specialChar(value));
    setMinLength(value.length > 8 ? true : false);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label
            className={isFirstNameValid ? "success" : "para"}
            htmlFor="name"
          >
            First Name
          </label>
          <input type="text" id="name" onChange={firstNameHandler} />
        </div>
        <div className="form-control">
          <label
            className={isLastNameValid ? "success" : "para"}
            htmlFor="name"
          >
            Last Name
          </label>
          <input type="text" id="name" onChange={lastNameHandler} />
        </div>
      </div>
      <div className="control-group">
        <div className="form-control">
          <label
            className={isUserNameValid ? "success" : "para"}
            htmlFor="name"
          >
            User Name
          </label>
          <input type="text" id="name" onChange={userNameHandler} />
        </div>

        <div className="form-control">
          <label className={isEmailValid ? "success" : "para"} htmlFor="name">
            E-Mail Address
          </label>
          <input type="text" id="name" onChange={emailHandler} />
        </div>
      </div>
      <div className="control-group">
        <div className="form-control">
          <label
            className={isPasswordValid ? "success" : "para"}
            htmlFor="name"
          >
            Password
          </label>
          <input type="password" id="name" onChange={passwordHandler} />
        </div>
        <div className="form-control">
          <label
            className={isPasswordConfirm ? "success" : "para"}
            htmlFor="name"
          >
            Confirm Password
          </label>
          <input type="password" id="name" onChange={passwordConfirmHandler} />
        </div>
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
