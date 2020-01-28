import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Timer from "../components/Timer";
// import CountdownTimer from "../components/CountdownTimer";

const date1 = new Date();
console.log(date1);
const date2 = new Date();
date2.setMinutes(date1.getMinutes()+20);
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // timeLeft: date,
      running: false,
      timerEnded: false
    };
  }
  render() {
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
