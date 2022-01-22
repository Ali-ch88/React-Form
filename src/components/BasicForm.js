import { useState } from "react";

const BasicForm = (props) => {
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

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

  return (
    <form>
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
          <label htmlFor="name">Password</label>
          <input type="password" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="name">Confirm Password</label>
          <input type="password" id="name" />
        </div>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
