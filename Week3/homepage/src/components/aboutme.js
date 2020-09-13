import React, { Component } from "react";
import profile from "./image/MYSELF.jpeg";
class About extends Component {
  render() {
    return (
      <div>
        <img className="profile" src={profile} />

        <h1 className="aboutme">
          Hello,my name is Jacky Sanjaya and you can call me Jacky.
          <br /> I was born at Dumai 16 of November 2002. I love to play
          basketball and games.
          <br />
          Now im majoring Informatics Engineering at UVERS University.
        </h1>
      </div>
    );
  }
}

export default About;
