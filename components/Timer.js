import React from "react";

class Timer extends React.Component {
  render() {
    let stateAll = this.props.stateAll;
    let timeLeftNumber = stateAll.timeLeft;
    let timeLeftDate = new Date(timeLeftNumber);
    let timeLeftMinutes = timeLeftDate.getMinutes();
    let timeLeftSeconds = timeLeftDate.getSeconds();
    return (
      <p>
        Time left = {timeLeftMinutes} minutes and {timeLeftSeconds} seconds{" "}
      </p>
    );
  }
}

export default Timer;
