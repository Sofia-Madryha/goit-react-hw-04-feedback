import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const changeState = button => {
    setOptions(prevState => {
      return {
        ...prevState,
        [button]: prevState[button] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = options;
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const { good } = options;
    const total = countTotalFeedback();
    return total !== 0 ? Math.ceil((good / total) * 100) : 0;
  };
  const { good, neutral, bad } = options;
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onChangeState={changeState}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
