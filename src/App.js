import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      category: "",
    };
  }
  updateValue = (value) => {
    this.setState({ category: value });
  };
  render() {
    return (
      <>
        <Navbar updateValue={this.updateValue} />
        <News category={this.state.category} />
      </>
    );
  }
}

export default App;
