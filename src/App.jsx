import React, {useState, useEffect} from "react";
import { render} from "react-dom";
import PropTypes from "prop-types";

function MyComponent (props) {
  const [outputValue, setOutputValue] = React.useState('Placeholder');
  function UpdateText() {
    setOutputValue(document.getElementById('inputTextBox').value);
  }
  useEffect(() => {
    alert('Component has been updated');
    return () => {
      alert('Component is being removed');
    };
  }
  );
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
  

  


