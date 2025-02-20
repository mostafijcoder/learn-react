import React from "react";
import { render} from "react-dom";

class Dutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "mark"
    }
    this.onButtonClick=this.onButtonClick.bind(this);
  }
  onButtonClick() {
    this.setState({
      name: "john"
    });
  }
  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        <button onClick={this.onButtonClick}>reveal</button>
      </div>
    );
  }
}
export default Dutton;
        
     
        