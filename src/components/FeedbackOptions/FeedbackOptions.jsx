// import PropTypes from 'prop-types';
// import css from '../FeedbackOptions/FeedbackOptions.module.css';
import React from 'react';
import Statistics from 'components/Statistics/Statistics';

class FeedbackOptions extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedbackGood = () => {
      this.setState(prevState => {
          return {
              good: prevState.good + 1
          };
      });
          
    
  };
  onLeaveFeedbackNeutral = () => {
     this.setState(prevState => {
          return {
              neutral: prevState.neutral + 1
          };
      });
  };
  onLeaveFeedbackBad = () => {
     this.setState(prevState => {
          return {
              bad: prevState.bad + 1
          };
      });
    };
    countTotalFeedback = () => {
        const total = this.state.good + this.state.neutral + this.state.bad;
        return total;
          
       
    };

    countPositiveFeedbackPercentage = () => {
        const feedback = Math.ceil(
            (this.state.good * 100) / (this.state.good + this.state.neutral + this.state.bad));
        return feedback
    };

  render() {
    return (
      <div className="options__name">
        <button
          className="btn"
          type="button"
          onClick={this.onLeaveFeedbackGood}
        >
          good
        </button>
        <button
          className="btn"
          type="button"
          onClick={this.onLeaveFeedbackNeutral}
        >
          neutral
        </button>
        <button className="btn" type="button" onClick={this.onLeaveFeedbackBad}>
          bad
            </button>
            <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}/>

        {/* <h2 className="statistics">Statistics</h2>
        <span className="statistics__good">Good:{this.state.good}</span>
        <span className="statistics__neutral">
          Neutral:{this.state.neutral}
        </span>
        <span className="statistics__bad">Bad:{this.state.bad}</span>
        <span className="statistics__total">Total:{this.countTotalFeedback()}</span>
        <span className="statistics__PF">Positive feedback:{this.countPositiveFeedbackPercentage()}%</span> */}
      </div>
    );
  }
}
export default FeedbackOptions;
