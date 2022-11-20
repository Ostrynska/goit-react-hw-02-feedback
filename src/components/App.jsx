import React from "react";
import Statistics from "./Statistics";
import { FeedbackOptions } from './FeedbackOptions'
import { Sections } from './Sections'
import { Notification } from "./Notification";

export class App extends React.Component
{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleChange = (event) =>
    {
      const { name } = event.target
      this.setState((prevState) => ({ [name]: prevState[name] + 1 }))   
    }

    countTotalFeedback = () =>
    {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad
        return total;
    }

    countPositiveFeedbackPercentage = () =>
    {
        return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
    }

    render()
    {
      const { good, neutral, bad } = this.state;
      const total = this.countTotalFeedback();
      const positivePercentage = this.countPositiveFeedbackPercentage();
      return (
          <>
            <Sections title="Cafe Expresso"></Sections>
            <Sections title="Please leave feedback"> 
              <FeedbackOptions
                options={Object.keys(this.state)}
                onLeaveFeedback={this.handleChange}
              >
                </FeedbackOptions>
            </Sections>
            <Sections title="Statistics"> 
              {this.countTotalFeedback() === 0
                ?
                <Notification message="There is no feedback"></Notification>
                : <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage} />
          }
          </Sections>
          </>
        )
    }
}