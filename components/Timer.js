import React from "react";

class Timer extends React.Component {
    render() {
        let stateAll = this.props.stateAll;
        let timeLeftNumber = stateAll.timeLeft;
        let timeLeftDate = new Date(timeLeftNumber);
let timeLeftMinutes = timeLeftDate.getMinutes();
let timeLeftSeconds = timeLeftDate.getSeconds();
/*         const timeLeft = this.props.timeLeft;
        console.log("hallo");
        console.log(timeLeft);
        console.log(typeof timeLeft);
        const minutesLeft = timeLeft.getMinutes();
        let i = 0;
        for (i = minutesLeft; i > 0 ; i--) {
            console.log(i);
                }
 */
      return (
              <p>Time left = {timeLeftMinutes} minutes and {timeLeftSeconds} seconds </p>
      );
    }
}

export default Timer;