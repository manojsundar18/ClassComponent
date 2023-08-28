import React from "react";

class Updatesnapshot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "white" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "black" });
    }, 2000);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("hai", prevState.color);
  }
  componentDidUpdate() {
    console.log(this.state.color);
  }
  render() {
    return (
      <>
        <h1>getSnapshotBeforeUpdate</h1>
        <p>{this.state.color}</p>
        <p id="div1"></p>
        <p id="div2"></p>
      </>
    );
  }
}
export default Updatesnapshot;
