import React from "react";
import { render} from "react-dom";
import PropTypes from "prop-types";

class Counter extends React.Component {
  static propTypes = {
    increaseBy: PropTypes.number,
    onIncrease: PropTypes.func.isRequired
  }
  static defaultProps = {
    increaseBy: 1
  }
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.onIncrease=this.onIncrease.bind(this);
  }
  onIncrease() {
    this.setState(state => ({
      count: state.count + this.props.increaseBy
    }));
    this.props.onIncrease();
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.onIncrease}>increase</button>
      </div>
    );
  }
}


export default Counter;
        
     
        