import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [initialValue, setInitialValue] = useState("");
  const [initialValidValue, setInitialValidValue] = useState(true);
  const [formValid, setFormValid] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [specChar, setSpecChar] = useState(false);
  const [minLength, setMinLength] = useState(false);

  useEffect(() => {
    if (initialValue) {
      setFormValid(true);
    } else setFormValid(false);
  }, [initialValue]);

  const inputHandler = (event) => {
    setInitialValue(event.target.value);
    const { value } = event.target;
    // const checkChar = event.target.value;
    // setUpperCase(event.target.value);
    // console.log(value);
    setUpperCase(checkUpperCase(value));
    setSpecChar(specialChar(value));
    setMinLength(value.length > 8 ? true : false);
    // if (upperCase !== "ALI") {
    //   setUpperCase(true);
    // } else {
    //   setUpperCase("no change");
    // }
  };

  function checkUpperCase(value) {
    let valueArray = value.split("");
    let upperCaseCount = 0;
    valueArray.forEach((val) => {
      if (val == val.toUpperCase()) upperCaseCount += 1;
    });
    if (upperCaseCount > 1) return true;
    else return false;
  }

  function specialChar(checkChar) {
    // let charArray = checkChar.split("");
    // let charCount = 0;
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    // charArray.forEach((char) => {
    if (format.test(checkChar)) return true;
    else return false;
    // })
  }

  (function () {
    var animal = ["cow", "horse"];
    animal.push("cat");
    animal.push("dog", "rat", "goat");
    console.log(animal.length);
  })();

  const formHandler = (event) => {
    event.preventDefault();
    if (initialValue.trim() === "") {
      setInitialValidValue(false);
      return;
    }
    console.log(initialValue);
    setInitialValue("");
    setInitialValidValue(true);
  };

  return (
    <form onSubmit={formHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          value={initialValue}
          type="text"
          id="name"
          onChange={inputHandler}
        />
        {!initialValidValue && (
          <p className="error-text">Please Enter Valid Value</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
      <div>
        <p className={upperCase ? "success" : "para"}>Atleast 2 upper case</p>
        <p className={specChar ? "success" : "para"}>Atleast 1 special char</p>
        <p className={minLength ? "success" : "para"}>Minimum length 8 char</p>
      </div>
    </form>
  );
};

export default SimpleInput;
