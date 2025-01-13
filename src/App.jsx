import React from "react";
function App() {
  //let counter=0;
  //console.log ("counter", counter);
  const [counter, setCounter]=React.useState(0);
  const handleClick = () => {
    setCounter(counter+1);
    console.log("Counter value", counter);
  };
  return (
    <div>
      <p>{ counter } </p>
      <button onClick={handleClick}> Add one</button>
    </div>
    );
}
export default App;