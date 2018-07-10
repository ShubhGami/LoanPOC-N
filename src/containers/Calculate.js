import React from "react";

class CalculateLoan extends React.Component {
  render() {
    return (
      <div>
        <p>
          {this.props.selectedValu}
          <br />
          {this.props.selectedValue2}
          <br />
          {this.props.selectedValue3}
          <br />
        </p>
        <button type="button" className="btn btn-success">
          Calculate
        </button>
      </div>
    );
  }
}

export default CalculateLoan;
