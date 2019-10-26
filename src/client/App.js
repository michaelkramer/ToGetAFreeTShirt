// @flow
import React, { Component } from "react";
import _ from "lodash";
import "./app.css";
import ReactImage from "./fries.svg";

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    this.setState({ username: "Cool" });
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? (
          <div>
            <h1>{username}</h1>
          </div>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
