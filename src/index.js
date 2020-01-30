import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Timer from "../components/Timer";

let time = new Date();
let timePlusAmount = new Date();
// change this to amount to set Timer
timePlusAmount.setMinutes(time.getMinutes() + 1);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // renderCounter: 0,
      timeOriginal: time,
      timePlusAmount: timePlusAmount,
      timeNow: time,
      timeLeft: timePlusAmount - time,
      // timerRunning: false,
      // timerEnded: false
    };
    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  // will fire on 1st build
  componentDidMount() {

  }

  startTimer() {
        // question: why timer? To not overload browser?
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  resetTimer() {
    clearInterval(this.timerID);
    let timeNew = new Date();
    let timePlusAmount = new Date();
    timePlusAmount.setMinutes(time.getMinutes() + 1);
    this.setState({
      timePlusAmount: timePlusAmount,
      timeNow: timeNew,
      timeLeft: timePlusAmount - timeNew
    })
}

  stopTimer() {
    clearInterval(this.timerID);
    }

  // will fire on 2nd build and after
  // PROBLEM: fires too many times and takes too much memory space if I add . Crashes thing sometimes
  // https://reactjs.org/docs/state-and-lifecycle.html: 
  // You may call setState() immediately in componentDidUpdate() but note that it must be wrapped in a condition like in the example above, or you’ll cause an infinite loop. It would also cause an extra re-rendering which, while not visible to the user, can affect the component performance.
  componentDidUpdate() {

  }

  // needs to called as I understand it
  componentWillUnmount() {

  }

  tick() {
    let timeNew = new Date();
    this.setState({
      timeNow: timeNew,
      timeLeft: this.state.timePlusAmount - timeNew
    });
    // CHECKS WHETHER TIMER HAS REACHED
    if (this.state.timeLeft <= 0) {
      console.log("great succes!");
      clearInterval(this.timerID);
      this.setState({
        timeLeft: 0
      })
    }
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
      </div>
    );
  }
}

let App_html = document.getElementById("app");

ReactDOM.render(<App />, App_html);
