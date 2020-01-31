import React from "react";

class Timer extends React.Component {
  render() {
    let stateAll = this.props.stateAll;
    
    let timeLeftNumber = stateAll.timeLeftNumber;
    let timeZero = stateAll.timeZero;
    let timeZeroNumber = timeZero.getTime();
    let timeLeftDate = new Date(timeZeroNumber + timeLeftNumber);

    let timeLeftHours = timeLeftDate.getHours();
    let timeLeftMinutes = timeLeftDate.getMinutes();
    let timeLeftSeconds = timeLeftDate.getSeconds();
    return (
      <p>
        Time left = {timeLeftHours}:{timeLeftMinutes}:{timeLeftSeconds}
      </p>
    );
  }
}

export default Timer;
