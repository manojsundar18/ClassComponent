import React from "react";

class Updaterender extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "black" };
  }
  changeColor = () => {
    this.setState({ color: "white" });
  };
  render() {
    return (
      <>
        <h1>Render()</h1>
        <p>{this.state.color}</p>
        <button type="button" onClick={this.changeColor}>
          Change new color
        </button>
      </>
    );
  }
}
export default Updaterender;
