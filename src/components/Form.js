import React from "react";
import "./stylesheets/Form.css";

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="create-button" onClick={onCreate}>
        Add
      </div>
    </div>
  );
};

export default Form;

/*
This Form Component Receive 4 props in total
1. value = value of input
2. onCreate = function when buttons is clicked
3. onChange = function when input value change
4. onKeyPress = function when key is pressed in the input. This function is
added to the same job with onCreate when Enter is pressed



        

*/
