import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <h1 className="tugas">
            <a
              href="https://github.com/Jacky-Sanjaya/GlintsAcademyB7/tree/develop/Week3/Asynchronous"
              rel="noopener noreferrer"
              target="_blank"
            >
              ASYNCHRONOUS
            </a>
          </h1>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1 className="tugas">
            <a
              href="https://github.com/Jacky-Sanjaya/GlintsAcademyB7/blob/develop/Week3/calculate.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              CALCULATOR
            </a>
          </h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1 className="tugas">
            <a
              href="https://github.com/Jacky-Sanjaya/GlintsAcademyB7/blob/develop/Week3/class.js"
              rel="noopener noreferrer"
              target="_blank"
            >
              CLASS
            </a>
          </h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Asynchronous</Tab>
          <Tab>Calculator</Tab>
          <Tab>Class</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
