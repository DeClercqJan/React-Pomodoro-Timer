import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Timer from "../components/Timer";
// import CountdownTimer from "../components/CountdownTimer";

// DON'T NEED THIS ANYMORE AS I DID IT DIFFERENTLY
/* const date1 = new Date();
console.log(date1);
const date2 = new Date();
date2.setMinutes(date1.getMinutes() + 20);
console.log(date2);
// ik denk niet dat dit zal werken, want getMinutes geeft integer terug. Ik denk eerder dat ik zal moeten rekenen

// console.log(date);
// const twentyMinutes = date.getMinutes();
// console.log(twentyMinutes);

const calculateTimeLeft = (date1, date2) => {
  console.log(date1);
  console.log(date2);
  // const difference = +new Date("2020-01-01") - +new Date();
  const difference = date2 - date1;
  let timeLeft = {};
  console.log(difference);
  if (difference > 0) {
    timeLeft = {
      // days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      // hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};
console.log(calculateTimeLeft(date1, date2)); */
// let timeLeft = calculateTimeLeft(date1, date2);

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
      timerRunning: false,
      timerEnded: false
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  // will fire on 1st build
  componentDidMount() {

  }

  startTimer() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  stopTimer() {
    clearInterval(this.timerID);
    }

  // will fire on 2nd build and after
  // PROBLEM: fires too many times and takes too much memory space. Crashes thing sometimes
  componentDidUpdate() {
    // https://reactjs.org/docs/state-and-lifecycle.html
    // componentDidMount() {

    /*        if (this.state.timeLeft > 0) {
        ReactDOM.unmountComponentAtNode(document.querySelector("#app"));
      }  */
    // question: why timer? To not overload browser?
    // this on/off functionality needs to be added to button. Here I just put it on on (true) for now. Also see unmountfunction
    // let renderCounter = this.state.renderCounter;
/*     if (this.state !== prevState) {
      console.log(this.state.timerRunning);
      let timerRunning = this.state.timerRunning;
      console.log(this.state.timerEnded);
      let timerEnded = this.state.timerEnded;
      if (timerEnded) {
        ReactDOM.unmountComponentAtNode(document.querySelector("#app"));
      }
      if (timerRunning) {
        this.timerID = setInterval(() => this.tick(), 1000);
      }
    } */
  }

  componentWillUnmount() {
    console.log("Component is about to be unmounted!");
    clearInterval(this.timerID);
  }

  tick() {
    let timeNew = new Date();
    // console.log(calculateTimeLeft(date1, date2));
    this.setState({
      timeNow: timeNew,
      // renderCounter: this.state.renderCounter + 1,
      timeLeft: this.state.timePlusAmount - timeNew
    });
    // CHECKS WHETHER TIMER HAS REACHED
    // zhe internet says: The ==, !=, ===, and !== operators require you to use date.getTime() as in
    /*     let timeNow = this.state.timeNow.getTime();
    console.log(timeNow);
    const timePlusAmount = this.state.timePlusAmount.getTime();
    console.log(timePlusAmount);
    if (timeNow === timePlusAmount) {
      console.log("if werkt");
    } */
    /*     let timeLeft = this.state.timeLeft;
    console.log(timeLeft);
    if (timeLeft <= 0 && timeleft == !null) {
      console.log("great succes!");
      this.setState({
        renderCounter: 0,
        timeOriginal: {},
        timePlusAmount: {},
        timeNow: {},
        timeLeft: null,
        timerRunning: false,
        timerEnded: false
      });
    } */
    if (this.state.timeLeft <= 0) {
      console.log("great succes!");
      this.setState({
        timerEnded: true
      });
    }
  }

  render() {
    /* 
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    }); */

    return (
      <div>
        <Header />
        <main>
          <Timer stateAll={this.state} />
        </main>
        <button onClick={this.startTimer}>Start timer</button>
        <button onClick={this.stopTimer}>Stop timer</button>
      </div>
    );
  }
}

let App_html = document.getElementById("app");

ReactDOM.render(<App />, App_html);
