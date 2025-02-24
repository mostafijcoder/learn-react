import React, {useState, useEffect} from "react";
import { render} from "react-dom";
import PropTypes from "prop-types";
import { useChangeAlert } from "./userChange.jsx";

function MyComponent (props) {
  const [outputValue, setOutputValue] = React.useState('Placeholder');
  function UpdateText() {
    setOutputValue(document.getElementById('inputTextBox').value);
  }
  useChangeAlert(`The value is ${outputValue}`);
  return (
    <div>
      <input id="inputTextBox" type="text"/>
      <button type='button' onClick={UpdateText}>update</button>
      <br/>
      <label>{outputValue}</label>
    </div>
  );
}

export default MyComponent;
  

  


