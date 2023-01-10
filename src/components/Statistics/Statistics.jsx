import React from 'react';
// import css from '../Statistics/Statistics.module.css'
const Statistics = ({good,neutral,bad,total,positivePercentage}) => {
    <div>
        <h2 className="statistics">Statistics</h2>
        <span className="statistics__good">Good:{good}</span>
        <span className="statistics__neutral">
            Neutral:{neutral}
        </span>
        <span className="statistics__bad">Bad:{bad}</span>
        <span className="statistics__total">Total:{total}</span>
        <span className="statistics__PF">Positive feedback:{positivePercentage}%</span>
    </div>

};
export default Statistics;