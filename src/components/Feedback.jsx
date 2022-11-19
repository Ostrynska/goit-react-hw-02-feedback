import React from 'react'
import { Counter, CounterValue } from "./Feedback.styled";

class Feedback extends React.Component
{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleGood = () => {
        this.setState(prevState => { return { good: prevState.good + 1 } })
    };
    
    handleNeutral = () =>
    {
        this.setState(prevState => { return { neutral: prevState.neutral + 1 } })  
    };

    handleBad = () =>
    {
        this.setState(prevState => { return { bad: prevState.bad + 1 } })
    };

    countTotalFeedback = () =>
    {
        this.setState(prevState => { return { total: prevState.good + prevState.neutral + prevState.bad }})
    }

    // countPositiveFeedbackPercentage()

    render()
    {
        return (
            <Counter>
            <div className="Good">
            <CounterValue>{this.state.good}</CounterValue>
            <button
                type="button"
                onClick={this.handleGood}
            >
                Good
                    </button>
                </div>
                
            <div className="Neutral">
            <CounterValue>{this.state.neutral}</CounterValue>
            <button
                type="button"
                onClick={this.handleNeutral}
            >
                Neutral
                    </button>
            </div>
            
            <div className="Bad">
            <CounterValue>{this.state.bad}</CounterValue>
            <button
                type="button"
                onClick={this.handleBad}
            >
                Bad
                    </button>
                </div>
                <div>
                <p>Total: </p>
                <p>Positive Feedback: </p>
</div>
            </Counter>
        )
    }
}

export default Feedback