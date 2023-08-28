import React from "react";

class Updating1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "yellow" };
  }
  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    this.setState({ color: "brown" });
  };
  render() {
    return (
      <>
        <h1>shouldComponentUpdate</h1>
        <p>{this.state.color}</p>
        <button type="button" onClick={this.changeColor}>
          new change color
        </button>
      </>
    );
  }
}
export default Updating1;
