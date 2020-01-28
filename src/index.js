import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Timer from "../components/Timer";


 const date = new Date();
console.log(date);
date.setMinutes(20);
console.log(date);
// ik denk niet dat dit zal werken, want getMinutes geeft integer terug. Ik denk eerder dat ik zal moeten rekenen
/*
console.log(date);
const twentyMinutes = date.getMinutes();
console.log(twentyMinutes);
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      timeLeft : date,
      running: false, 
    timerEnded: false
  };

  }
  render() {
    return (
      <div>
        <Header/>
        <main>
          <Timer timeLeft={this.state.timeLeft}/>
        </main>
        <div className="container">
          <h1>Hello {this.props.name}</h1>
        </div>
      </div>
    );
  }
}

let App_html = document.getElementById("app");

ReactDOM.render(<App/>, App_html);
