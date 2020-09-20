import React, { Component } from "react";
import "../App.css";

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    //create new unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    //copy of current list of item
    const list = [...this.state.list];
    //add new item to list
    list.push(newItem);

    //update state
    this.setState({
      list,
      newItem: "",
    });
  }
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="container">
        <input
          className="inputan"
          type="text"
          placeholder="add todo"
          value={this.state.newItem}
          onChange={(e) => this.updateInput("newItem", e.target.value)}
        />
        <br />
        <div>
          <button className="btn-1" onClick={() => this.addItem()}>
            Add
          </button>
        </div>
        <br />
        <ul>
          {this.state.list.map((item) => {
            return (
              <li key={item.id}>
                {item.value}
                <button
                  className="btn-x"
                  onClick={() => this.deleteItem(item.id)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
