import React, { useState } from "react";
function Child({ onInputChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Type..."
        onChange={(e) => onInputChange(e.target.value)}//value to parent
      />
    </div>
  );
}
function Parent() {
  const [inputValue, setInputValue] = useState("");//store input value
  const [submitValue, setSubmitValue] = useState(""); //store submit value

  const handleInputChange = (value) => {
    setInputValue(value); //update value
  };

  const handleSubmit = () => {
    setSubmitValue(inputValue);
  };
  return (
    <div>
      <h1>Parent</h1>
      <p>Child: {inputValue}</p> //update value
      <Child onInputChange={handleInputChange} /><br />
      <button onClick={handleSubmit}>Submit</button>
      {submitValue && (
        <p>
          <strong> Value:</strong> {submitValue} //last submit value
        </p>
      )}
    </div>
  );
}

export default Parent;
