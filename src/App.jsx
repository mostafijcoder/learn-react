import React from "react";
import { render} from "react-dom";
import PropTypes from "prop-types";

class ChildComponent extends React.Component {
  static propTypes = {
    name: PropTypes.string
  };
  static defaultProps=(function(){
        console.log("ChildComponent: defaultProps");
        return {};
    }
  )();
  constructor(props) {
    super(props);
    console.log("ChildComponent: state");
    this.state = {
      name: "Mark"
    }
  }
  componentWillMount() {
    console.log("ChildComponent: componentWillMount");
  }
  componentDidMount() {
    console.log("ChildComponent: componentDidMount");
  }
    
  render() {
    if (this.state.oops){
        throw new Error("Something went wrong");
    }
    console.log("ChildComponent: render");
    return [<div key= "name">
      Name: {this.props.name}</div>
    ];
  }
};
class ParentComponent extends React.Component {
  static defaultProps=(function(){
        console.log("ParentComponent: defaultProps");
        return {
          true: false
        };
    }
  )();
  constructor(props) {
    super(props);
    console.log("ParentComponent: state");
    this.state = {
      name: ""
    }
    this.onInputchange=this.onInputchange.bind(this);
  }
  componentWillMount() {
    console.log("ParentComponent: componentWillMount");
  }
  componentDidMount() {
    console.log("ParentComponent: componentDidMount");
  }

  onInputchange(e){
    this.setState({name: e.target.value});
  }
  render() {
    console.log("ParentComponent: render");
    return (<div>
      <input key = "input" type="text" value={this.state.name} onChange={this.onInputchange}/>
      <ChildComponent key = "ChildComponent" name={this.state.name}/>
    </div>);
  }
}
export default ParentComponent;
  

  


