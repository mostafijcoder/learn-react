import React, { useEffect } from "react";
// function to fetch data from the API
function App() {
  // usage of useState for data manipulation
  const [data, setData]=React.useState(null);
  // usage of useEffect for side effects
  useEffect(() => {fetch("https://jsonplaceholder.typicode.com/todos?_limit=5"). then((response)=>response.json()).then((data)=>setData(data))}, []);
  
  
  return (
    <div>
      {/*<pre> {JSON.stringify(data, null,5)} </pre> */}
      // map fetching data to display in the browser
      {data && data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.completed ? "Completed" : "Not Completed"}</p>
        </div>
      ))}
    </div>  
    );
}
export default App;