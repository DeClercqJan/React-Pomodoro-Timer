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
      // timerRunning: false
      // timerEnded: false
    };
    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.addMinute = this.addMinute.bind(this);
    this.subtractMinute = this.subtractMinute.bind(this);
  }

  // will fire on 1st build
  componentDidMount() {}

  startTimer() {
    // question: why timer? To not overload browser?
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  resetTimer() {
    clearInterval(this.timerID);
    this.setState({
      timeLeftNumber: 60 * 1000,
    });
  }

  stopTimer() {
    clearInterval(this.timerID);
  }

  // will fire on 2nd build and after
  // PROBLEM: fires too many times and takes too much memory space if I add . Crashes thing sometimes
  // https://reactjs.org/docs/state-and-lifecycle.html:
  // You may call setState() immediately in componentDidUpdate() but note that it must be wrapped in a condition like in the example above, or you’ll cause an infinite loop. It would also cause an extra re-rendering which, while not visible to the user, can affect the component performance.
  componentDidUpdate() {}

  // needs to called as I understand it
  componentWillUnmount() {}

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
      timeLeftNumber: this.state.timeLeftNumber + (60 * 1000)
    });
  }

  subtractMinute() {
    this.setState({
      timeLeftNumber: this.state.timeLeftNumber - (60 * 1000)
    });
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <Timer stateAll={this.state} />
        </main>
        <button onClick={this.startTimer}>Start timer</button>
        <button onClick={this.resetTimer}>Reset timer</button>
        <button onClick={this.stopTimer}>Stop timer</button>
        <button onClick={this.addMinute}>+1 minute</button>
        <button onClick={this.subtractMinute}>-1 minute</button>
      </div>
    );
  }
}

let App_html = document.getElementById("app");

ReactDOM.render(<App />, App_html);
