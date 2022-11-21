import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from './FeedbackOptions'
import Section from './Section'
import Notification from "./Notification";
import { Box } from "./Box";


export class App extends Component
{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handlerChange = (e) =>
    {
      const { name } = e.target;
      this.setState((prevState) => ({ [name]: prevState[name] + 1 })); 
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
        <Box
          backgroundColor='primary'
          height='100vh'
          fontSize={14}
          pt='80px'
          as='main'>
          <h1 style={{textAlign:'center', textTransform:'uppercase', fontSize:'64px', color:'#1C4931'}}>Cafe Expresso</h1>
            <Section title="Please leave feedback"> 
              <FeedbackOptions
                options={Object.keys(this.state)}
                onLeaveFeedback={this.handlerChange}
              >
                </FeedbackOptions>
            </Section>
            <Section title="Statistics"> 
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
          </Section>
          </Box>
        )
    }
}