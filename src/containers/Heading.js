import React from "react";
// import Calculate from "./Calculate";

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: ""
    };
    this.SelectedValue = this.SelectedValue.bind(this);
    this.ChildMethodValue1 = this.ChildMethodValue1.bind(this);
    this.ChildMethodValue2 = this.ChildMethodValue2.bind(this);
    this.ChildMethodValue3 = this.ChildMethodValue3.bind(this);
  }

  SelectedValue(e) {
    console.log(e.target.value);
    this.setState({ selectedValue: e.target.value });
  }
  ChildMethodValue1() {
    this.props.onClick(this.props.value1, this.props.name);
    // console.log("this.props.value1 : ", this.props.value1);
  }
  ChildMethodValue2() {
    this.props.onClick(this.props.value2, this.props.name);
    // console.log("this.props.value1 : ", this.props.value1);
  }
  ChildMethodValue3() {
    this.props.onClick(this.props.value3, this.props.name);
    // console.log("this.props.value1 : ", this.props.value1);
  }
  render() {
    return (
      <div>
        <div className="panel panel-info">
          <div className="panel-heading"> {this.props.headingName}</div>
          <div className="radio-grp">
            <span>
              <input
                type="radio"
                name={this.props.name}
                value={this.props.value1}
                onClick={this.ChildMethodValue1}
              />
              <b>{this.props.value1}</b>
            </span>
            <span>
              <input
                type="radio"
                name={this.props.name}
                value={this.props.value2}
                onClick={this.ChildMethodValue2}
              />
              <b>{this.props.value2}</b>
            </span>
            <span>
              <input
                type="radio"
                name={this.props.name}
                value={this.props.value3}
                onClick={this.ChildMethodValue3}
              />
              <b>{this.props.value3}</b>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Heading;
