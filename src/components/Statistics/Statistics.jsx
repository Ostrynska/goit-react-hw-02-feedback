import PropTypes from 'prop-types';
import { StatisticList, StatisticItem, StatisticValue } from "./Statistics.styled";


const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
{
      return(
            <StatisticList>
                  <StatisticItem>Good:
                        <StatisticValue>{good}</StatisticValue>
                  </StatisticItem>
                  <StatisticItem>Neutral:
                        <StatisticValue>{neutral}</StatisticValue>
                  </StatisticItem>
                  <StatisticItem>Bad:
                        <StatisticValue>{bad}</StatisticValue>
                  </StatisticItem>
                  <StatisticItem>Total:
                        <StatisticValue>{total}</StatisticValue>
                  </StatisticItem>
                  <StatisticItem>Positive feedback:
                        <StatisticValue>{positivePercentage}%</StatisticValue>
                  </StatisticItem>
            </StatisticList> 
      )
}

Statistics.propTypes = {
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      positivePercentage: PropTypes.number.isRequired,
}

export default Statistics