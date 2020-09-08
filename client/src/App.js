import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: {},
      riddle: {},
    };
  }

  componentDidMount() {
    axios
      .get("/facts/")
      .then((res) => this.setState({ fact: res.data }))
      .catch(alert);
    axios
      .get("/riddles/")
      .then((res) => this.setState({ riddle: res.data }))
      .catch(alert);
  }

  render() {
    const { fact, riddle } = this.state;

    return (
      <div className="App">
        <div className="container top">
          <div className="title">Quote</div>
          <div className="content">“{fact.name}”</div>
          <div className="subline">–{fact.author}</div>
          <div className="button" onClick={this.refreshQuote.bind(this)}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="refresh w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
        </div>
        <div className="container bottom">
          <div className="title">Riddle</div>
          <div className="content">{riddle.question}</div>
          <div className="subline">
            Answer: <span className="answer">&nbsp;{riddle.answer}&nbsp;</span>
          </div>
          <div className="button" onClick={this.refreshRiddle.bind(this)}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="refresh w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
        </div>
        <div className="footer">Made with ❤ by Snehil</div>
      </div>
    );
  }

  refreshQuote() {
    axios
      .get("/facts/")
      .then((res) => this.setState({ fact: res.data }))
      .catch(alert);
  }

  refreshRiddle() {
    axios
      .get("/riddles/")
      .then((res) => this.setState({ riddle: res.data }))
      .catch(alert);
  }
}

export default App;
