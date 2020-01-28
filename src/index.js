import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Timer from "../components/Timer";
// import CountdownTimer from "../components/CountdownTimer";

const date1 = new Date();
console.log(date1);
const date2 = new Date();
date2.setMinutes(date1.getMinutes() + 20);
console.log(date2);
// ik denk niet dat dit zal werken, want getMinutes geeft integer terug. Ik denk eerder dat ik zal moeten rekenen
/*
console.log(date);
const twentyMinutes = date.getMinutes();
console.log(twentyMinutes);
 */

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
console.log(calculateTimeLeft(date1, date2));
// let timeLeft = calculateTimeLeft(date1, date2);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderCounter: 0,
      timeOriginal: {},
      timePlusAmount: {},
      timeNow: {},
      timeLeft: null,
      timerRunning: true,
      timerEnded: false
    };
  }

  componentDidMount() {
      // question: why timer? To not overload browser?
      this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
      clearInterval(this.timerID);
  }

  tick() {
    let time = new Date();
    // console.log(calculateTimeLeft(date1, date2));
    if (this.state.renderCounter === 0) {
      let timePlusAmount = new Date();
      timePlusAmount.setMinutes(time.getMinutes() + 1);
      this.setState({
        timeOriginal: time,
        timeNow: time,
        timePlusAmount: timePlusAmount,
        renderCounter: this.state.renderCounter + 1
      });
    } else {
      this.setState({
        timeNow: time,
        renderCounter: this.state.renderCounter + 1,
        timeLeft: this.state.timePlusAmount - time
      });
    }
    // CHECKS WHETHER TIMER HAS REACHED
    // zhe internet says: The ==, !=, ===, and !== operators require you to use date.getTime() as in
    /*     let timeNow = this.state.timeNow.getTime();
    console.log(timeNow);
    const timePlusAmount = this.state.timePlusAmount.getTime();
    console.log(timePlusAmount);
    if (timeNow === timePlusAmount) {
      console.log("if werkt");
    } */
    let timeLeft = this.state.timeLeft;
    console.log(timeLeft);
    if (timeLeft <= 0 && timeleft == !null) {
      console.log("great succes!");
      this.setState({
        renderCounter: 0,
        timeOriginal: {},
        timePlusAmount: {},
        timeNow: {},
        timeLeft: 0,
        timerRunning: false,
        timerEnded: false
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
          <div>{/* <CountdownTimer/> */}</div>
          {/* <Timer timeLeft={this.state.timeLeft} /> */}
        </main>
        <div className="container">
          <h1>Hello {this.props.name}</h1>
        </div>
      </div>
    );
  }
}

let App_html = document.getElementById("app");

ReactDOM.render(<App />, App_html);
