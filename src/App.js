import React, { Component } from 'react';
import Feedback from './components/feedback/feedback';
import Statistics from './components/statistics/statistics';
import Section from './components/section/section';
import Notification from './components/notification/notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalFeedback = () => this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good * 100) / this.totalFeedback());

  clickOnButton = buttonName => {
    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1,
    }));
  };

  ucFirst = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    const total = this.totalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            options={this.state}
            onLeaveFeedback={this.clickOnButton}
            ucFirst={this.ucFirst}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={percentage > 0 ? percentage : '0'}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
