import React from "react";

class Timer extends React.Component {
  render() {
    let stateAll = this.props.stateAll;
    // console.log(stateAll);
    let timeLeftNumber = stateAll.timeLeftNumber;
    let timeLeftDate = new Date(timeLeftNumber);

    let timeZeroZeroHours = stateAll.timeZeroZeroHours;
    console.log(timeZeroZeroHours);
    let timeZeroZeroHoursNumber = timeZeroZeroHours.getTime();
    console.log(timeZeroZeroHoursNumber);
    let timeLeftDate2 = new Date(timeZeroZeroHoursNumber + timeLeftNumber);
    console.log(timeLeftDate2);

    // Having trouble with going over 59 minutes. Not foreseen in original functionality
    // let timeLeftHours = timeLeftDate.getHours();
    let timeLeftHours = timeLeftDate2.getHours();
    let timeLeftMinutes = timeLeftDate2.getMinutes();
    let timeLeftSeconds = timeLeftDate2.getSeconds();
    return (
      <p>
        Time left = {timeLeftHours}:{timeLeftMinutes}:{timeLeftSeconds}
      </p>
    );
  }
}

export default Timer;
