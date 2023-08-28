import React from "react";

class Updating extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  static getDerivedStateFromProps(props, state) {
    console.log(props.favcolor);
    return { color: props.favcolor };
  }
  changeColor = () => {
    this.setState({ color: "brown" });
  };
  render() {
    return (
      <>
        <h1>getDerivedStateFromProps</h1>
        <p>{this.state.color}</p>
        <button type="button" onClick={this.changeColor}>
          change color
        </button>
      </>
    );
  }
}
export default Updating;
