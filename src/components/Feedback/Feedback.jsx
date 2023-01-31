import { useState } from "react";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";

const feedbackOptions = ["good", "neutral", "bad"];

const Feedbacks = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const addValueFeedback = option => {
    setVotes(prevState => {
      const value = prevState[option];
      return{...prevState, [option]: value + 1}
    })
  }
  const countTotalFeedback = votes.good + votes.neutral + votes.bad;

  const countPositiveFeedbackPercentage = (propName) => {
    if (!countTotalFeedback) {
      return 0;
    }
    const value = votes[propName];
    const result = ((value / countTotalFeedback) * 100).toFixed(2);
    return Number(result);
  }

  const goodCountPositiveFeedback = countPositiveFeedbackPercentage("good");

  return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            addValueFeedback={addValueFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback ? (
            <Statistics
              good={votes.good}
              neutral={votes.neutral}
              bad={votes.bad}
              total={countTotalFeedback}
              positivePercentage={goodCountPositiveFeedback}
            ></Statistics>
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    )
}

export default Feedbacks;





