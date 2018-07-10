import React, { Component } from "react";
import Heading from "./containers/Heading";
import Calculate from "./containers/Calculate";

// <button name="calculateLoan" className="btn btn-success">
//   <b>Calculate</b>
// </button>
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValu: "",
      selectedValue2: "",
      selectedValue3: ""
    };
    this.backToParent = this.backToParent.bind(this);
  }
  backToParent(value, type) {
    // console.log("before value : ", value);
    if (type === "loanType") {
      this.setState({
        selectedValu: value
      });
    } else if (type === "loanTenure") {
      this.setState({
        selectedValue2: value
      });
    } else if (type === "loanAmount") {
      this.setState({
        selectedValue3: value
      });
    }
    // console.log("after value : ", this.state.selectedValu);
  }
  render() {
    // console.log("this.state.selectedVlue : ", this.state.selectedValu);
    // const calculate = {this.state.selectedValu ? <Calculate value4={this.state.selectedValu} />: ""};
    var sendValue = "";
    if (this.state.selectedValu) {
      // console.log("if : ", this.state.selectedValu);
      sendValue = this.state.selectedValu;
      // console.log("if  sendValue: ", sendValue);
    } // } else {
    //   console.log("else : ", this.state.selectedValu);
    // }

    return (
      <div>
        <p className="heading">Loan Calculator</p>
        <div>
          <Heading
            name="loanType"
            value1="Home Loan"
            value2="Education Loan"
            value3="Car Loan"
            onClick={this.backToParent}
          />
          <Heading
            name="loanTenure"
            value1="1 year"
            value2="2 years"
            value3="3 years"
            onClick={this.backToParent}
          />
          <Heading
            name="loanAmount"
            value1="5 Lakhs"
            value2="10 Lakhs"
            value3="15 Lakhs"
            onClick={this.backToParent}
          />
        </div>

        <Calculate
          value={sendValue}
          selectedValu={this.state.selectedValu}
          selectedValue2={this.state.selectedValue2}
          selectedValue3={this.state.selectedValue3}
        />
      </div>
    );
  }
}
export default HomePage;
