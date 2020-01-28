import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// https://alligator.io/react/countdown-timer-react-hooks/
function CountdownTimer() {
 //    const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    // const difference = +new Date("2020-01-01") - +new Date();
    const difference = +new Date("2021-01-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div>
      <h1>Alligator.io New Year's 2020 Countdown</h1>
      <h2>With React Hooks!</h2>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CountdownTimer />, rootElement);

// export default CountdownTimer;