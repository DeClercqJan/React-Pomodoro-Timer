import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Timer from "../components/Timer";

// original time (in 1970) starts at 1 o clock so had to reset this
let time0 = new Date(0);
console.log(time0);
new Date(time0.setHours(0));
console.log(time0);

class App extends React.Component {
  constructor(props) {
    super(props);
    // 1000 = 1 second. 60 seconds in a minute. And it's 20 times a minute
    this.state = {
      // renderCounter: 0,
      // timeOriginal: time,
      // timePlusAmount: timePlusAmount,
      // timeNow: time,
      timeLeftNumber: 20 * 60 * 1000,
      timeZero: time0,
      timerRunning: false
      // timerEnded: false
    };
    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.addMinute = this.addMinute.bind(this);
    this.subtractMinute = this.subtractMinute.bind(this);
  }

  startTimer() {
    // question: why timer? To not overload browser?
    this.timerID = setInterval(() => this.tick(), 1000);
    this.setState({
      timerRunning: true
    });
  }

  resetTimer() {
    clearInterval(this.timerID);
    this.setState({
      timeLeftNumber: 20 * 60 * 1000,
      timerRunning: false
    });
  }

  tick() {
    this.setState({
      timeLeftNumber: this.state.timeLeftNumber - 1000
    });
    // CHECKS WHETHER TIMER HAS REACHED END
    if (this.state.timeLeftNumber <= 0) {
      console.log("great succes!");
      clearInterval(this.timerID);
      this.setState({
        timeLeftNumber: 0
      });
    }
  }

  addMinute() {
    this.setState({
      timeLeftNumber: this.state.timeLeftNumber + 60 * 1000
    });
  }

  subtractMinute() {
    this.setState({
      timeLeftNumber: this.state.timeLeftNumber - 60 * 1000
    });
  }

  render() {
    console.log(this.state.timerRunning);
    return (
      <div>
        <Header />
        <main>
          <Timer stateAll={this.state} />
        </main>
        {!this.state.timerRunning ? (
          <React.Fragment>
            <button onClick={this.startTimer}>Start timer</button>
            <button onClick={this.addMinute}>+1 minute</button>
            <button onClick={this.subtractMinute}>-1 minute</button>
          </React.Fragment>
        ) : (
          <button onClick={this.resetTimer}>Reset timer</button>
        )}
      </div>
    );
  }
}

let App_html = document.getElementById("app");

ReactDOM.render(<App />, App_html);
