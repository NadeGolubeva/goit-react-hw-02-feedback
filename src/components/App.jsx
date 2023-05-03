import React, { Component } from 'react';
import { Feedback } from './Feedback/Feedback.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { Section } from './Section/Section.jsx';
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
        <Section title="Please Leave feedback">
        <Feedback options={Object.keys(this.state)}
          onUpdateFeedback={this.updateState} >
          </Feedback>
          </Section>
        {this.totalAmount() === 0 ? (
          <p
          style={{
          paddingLeft: 60,
            }}>
            There is no feedback yet...
          </p>
        ) : (
            <Section title="Statistics">
          <Statistics
            options={Object.keys(this.state)}
            statistic={this.state}
            amount={this.totalAmount()}
            positiveFeedback={this.positivePercentageCount}

          >
          
          </Statistics>
            </Section>
          )}
        
      </div>
    );
   
  };
};

