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
  }
  render() {
    console.log("ChildComponent: render");
    return (<div>
      Name: {this.props.name}</div>
    );
  }
};
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
    this.onInputchange=this.onInputchange.bind(this);
  }
  onInputchange(e){
    this.setState({name: e.target.value});
  }
  render() {
    console.log("ParentComponent: render");
    return (<div>
      <input type="text" value={this.state.name} onChange={this.onInputchange}/>
      <ChildComponent name={this.state.name}/>
    </div>);
  }
}
export default ParentComponent;
  

  


