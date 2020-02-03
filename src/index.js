import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Timer from "../components/Timer";
import ModalBox from "../components/ModalBox";
import "../css/index.css";

// original time (in 1970) starts at 1 o clock so had to reset this
let time0 = new Date(0);
// console.log(time0);
new Date(time0.setHours(0));
// console.log(time0);

class App extends React.Component {
  constructor(props) {
    super(props);
    // 1000 = 1 second. 60 seconds in a minute. And it's 20 times a minute
    this.state = {
      timeLeftNumber: 20 * 60 * 1000,
      timeZero: time0,
      timerRunning: false,
      timerEnded: false,
      valueChangingButton: "start"
    };
    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.addMinute = this.addMinute.bind(this);
    this.subtractMinute = this.subtractMinute.bind(this);
    this.changingButton = this.changingButton.bind(this);
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
      timerRunning: false,
      timerEnded: false
    });
  }

  changingButton(event) {
    console.log(event.target.value);
    if (event.target.value === "start") {
      this.setState({
        valueChangingButton: "reset",
      })
      this.startTimer();
    }
    else if (event.target.value === "reset") {
      this.setState({
        valueChangingButton: "start",
      })
      this.resetTimer();
    }
  }

  tick() {
    this.setState({
      timeLeftNumber: this.state.timeLeftNumber - 1000
    });
    // CHECKS WHETHER TIMER HAS REACHED END
    if (this.state.timeLeftNumber <= 0) {
      // console.log("great succes!");
      clearInterval(this.timerID);
      this.setState({
        timeLeftNumber: 0,
        timerEnded: true
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
    return (
      <main>
        <h1>Pomodore Timer, built with React</h1>
        {!this.state.timerEnded ? (
          <React.Fragment>
            <Timer stateAll={this.state} />
            {!this.state.timerRunning ? (
              <React.Fragment>
                <button value={this.state.valueChangingButton} onClick={this.changingButton}>{this.state.valueChangingButton} timer</button>
                <button onClick={this.addMinute}>+1 minute</button>
                <button onClick={this.subtractMinute}>-1 minute</button>
              </React.Fragment>
            ) : (
              <button onClick={this.resetTimer}>Reset timer</button>
            )}
          </React.Fragment>
        ) : (
          <ModalBox resetTimerLowerLevel={this.resetTimer} />
        )}
      </main>
    );
  }
}

let App_html = document.getElementById("app");

ReactDOM.render(<App />, App_html);
