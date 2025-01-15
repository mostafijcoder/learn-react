import React, { useEffect } from "react";
// function to fetch data from the API
function App() {
  // usage of useState for data manipulation
  const [data, setData]=React.useState(null);
  // usage of useEffect for side effects
  useEffect(() => {fetch("https://jsonplaceholder.typicode.com/todos?_limit=5"). then((response)=>response.json()).then((data)=>setData(data))}, []);
  
  
  return (
    <div>
      // data to display in the string format
      <pre> {JSON.stringify(data, null,5)} </pre> 
    </div>  
    );
}
export default App;