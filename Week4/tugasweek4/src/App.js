import React, { Component } from "react";
import axios from "axios";
import { Table } from "reactstrap";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [],
    };
  }
  componentDidMount() {
    axios.get("https://btm-rn.herokuapp.com/api/v1/users/").then((res) => {
      this.setState({
        persons: res.data.results,
      });
    });
  }

  render() {
    let userData = this.state.persons.map((person, index) => {
      return (
        <tr key={index}>
          <th scope="row">{person._id}</th>
          <th>{person.name}</th>
          <th>{person.age ? person.age : "-"}</th>
        </tr>
      );
    });
    return (
      <div>
        <h1>Table Data API</h1>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>{userData}</tbody>
        </Table>
      </div>
    );
  }
}

export default App;
