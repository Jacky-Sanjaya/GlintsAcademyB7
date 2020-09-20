import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import profile from "./image/MYSELF.jpeg";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={profile} alt="img" className="avatar-img" />

            <div className="banner-text">
              <h1>Welcome</h1>

              <p>This My first website using React-Mdl</p>

              <div className="social-links">
                {/* Github */}
                <a
                  href="https://github.com/Jacky-Sanjaya"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Gitlab */}
                <a
                  href="https://gitlab.com/kykho3"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-gitlab" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a
                  href="https://www.instagram.com/jackykho3/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
