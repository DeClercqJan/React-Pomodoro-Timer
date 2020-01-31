import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Timer from "../components/Timer";

let time = new Date();
let time2 = time;
console.log(time);
console.log(time2);
new Date(time2.setHours(0));
console.log(time2);
let timePlusAmount = new Date();
console.log(timePlusAmount);
// change this to amount to set Timer
timePlusAmount.setMinutes(time.getMinutes() + 1);
console.log(timePlusAmount);
let timePlusAmount2 = timePlusAmount;
new Date(timePlusAmount2.setHours(0));
console.log(timePlusAmount2);
let time0 = new Date(0);
console.log(time0);
new Date(time0.setHours(0));
console.log(time0);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // renderCounter: 0,
      // timeOriginal: time,
      timeOriginalZeroHours: time2,
      // timePlusAmount: timePlusAmount,
      timePlusAmountZeroHours: timePlusAmount2,
      // timeNow: time,
      timeNowZeroHours: time2,
      timeLeftNumber: timePlusAmount2 - time2,
      timeZeroZeroHours: time0,
      timerRunning: false
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
/*     clearInterval(this.timerID);
    let timeNew = new Date();
    let timePlusAmount = new Date();
    timePlusAmount.setMinutes(time.getMinutes() + 1);
    this.setState({
      timePlusAmount: timePlusAmount,
      timeNow: timeNew,
      timeLeftNumber: timePlusAmount - timeNew,
    }); */
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
    let timeNew = new Date();
    let timeNew2 = timeNew;
    new Date(timeNew2.setHours(0));

    this.setState({
      timeNowZeroHours: timeNew2,
      timeLeftNumber: this.state.timePlusAmountZeroHours - timeNew2,
    });
    // CHECKS WHETHER TIMER HAS REACHED
    if (this.state.timeLeftNumber <= 0) {
      console.log("great succes!");
      clearInterval(this.timerID);
      this.setState({
        timeLeftNumber: 0,
      });
    }
  }

  addMinute() {
    let timeLeftNumber = this.state.timeLeftNumber;
    let minute = new Date();
    console.log(minute);
    let minute2 = minute.setMinutes(1);
    console.log(minute2);
    let minute3 = minute.getTime();
    console.log(minute3);
    this.setState({
      timeLeftNumber: timeLeftNumber + minute3,
    });
  }

  subtractMinute() {
    this.setState({
      timePlusAmount: timePlusAmount
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
