import { useState } from "react";

const SimpleInput = (props) => {
  const [initialValue, setInitialValue] = useState("");
  const [initialValidValue, setInitialValidValue] = useState(true);

  const inputHandler = (event) => {
    setInitialValue(event.target.value);
  };

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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
