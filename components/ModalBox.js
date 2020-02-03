import React from "react";

class ModalBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.resetTimerLowerLevel();
  }

  render() {
    return (
      <div className="ModalBox">
        <p>Take a break!</p>
        <button onClick={this.handleChange}>Start new timer</button>
      </div>
    );
  }
}

export default ModalBox;
