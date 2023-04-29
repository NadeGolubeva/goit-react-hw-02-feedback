import React, { Component } from 'react';
import { Feedback } from './Feedback/Feedback.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  updateState = opinion => {
    this.setState((prevState) => {
      let newData = { ...prevState };
      newData[opinion] = prevState[opinion] + 1;
      return newData;
    });
  }
  totalAmount = () => {
    return (
      this.state.good + this.state.neutral + this.state.bad
    )
  }

  positivePercentageCount = () => {
    return Math.floor(
      (
        this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)
    )*100 ||0)
  }
  
  render() {

    return (
      <div   >
        <Feedback options={Object.keys(this.state)}
          onUpdateFeedback={this.updateState} >
        </Feedback>
        {this.totalAmount() === 0 ? (
          <p > There is no feedback yet...</p>
        ) : (
          <Statistics
            options={Object.keys(this.state)}
            stat={this.state}
            amount={this.totalAmount()}
            positiveFeedback={this.positivePercentageCount}

          >
          
          </Statistics>)}
      </div>
    );
   
  };
};

