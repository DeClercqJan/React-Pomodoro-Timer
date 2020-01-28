import React from "react";

class Timer extends React.Component {
    render() {
        const timeLeft = this.props.timeLeft;
        console.log(timeLeft);
        console.log(typeof timeLeft);
        const minutesLeft = timeLeft.getMinutes();
        let i = 0;
        for (i = minutesLeft; i > 0 ; i--) {
            console.log(i);
                }

      return (
          <React.framgent>
          <h2>{minutesLeft}</h2>
          </React.framgent>
      );
    }
}

export default Timer;