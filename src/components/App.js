import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import {Notification }from './Notification/Notification'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = button => {
    this.setState(prevState => {
      return { [button]: prevState[button] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total !== 0 ? Math.ceil((this.state.good / total) * 100) : 0;
  };

  render() {
    return <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onChangeState={this.changeState} />
        </Section>
        
        <Section title="Statistics">
        { this.countTotalFeedback() ? 
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positive={this.countPositiveFeedbackPercentage()}/> :
         
           <Notification message="There is no feedback" />}
        
        </Section>
      </div>
        
  }
}
