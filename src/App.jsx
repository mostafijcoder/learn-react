import React from "react";
function App() {
  //let counter=0;
  //console.log ("counter", counter);
  const [counter, setCounter]=React.useState(0);
  const [text, setText]=React.useState("First text");
  const handleClick = () => {
    setCounter(counter+1);
    console.log("Counter value", counter);
  };
  const handleChange = (event) => {
    setText(event.target.value)
  };
  
  return (
    <div>
      <div>
        <p>{ counter } </p>
        <button onClick={handleClick}> Add one</button>
      </div>

      <div>
      // input text form to input text and display it
      <p>{text}</p>
      <input type="text" value={text} onChange={handleChange} />
      </div> 
    </div>  
    );
}
export default App;