import React, { Component } from "react";
import Header from "./component/header";
import Input from "./component/input";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Input />
      </div>
    );
  }
}
