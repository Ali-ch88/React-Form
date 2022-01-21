import { useState } from "react";

const SimpleInput = (props) => {
  const [initialValue, setInitialValue] = useState("");

  const inputHandler = (event) => {
    setInitialValue(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    console.log(initialValue);
    setInitialValue("");
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
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
