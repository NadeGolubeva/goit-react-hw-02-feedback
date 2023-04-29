
import PropTypes from 'prop-types';
import {Container, Point} from './Statistics.styled'
export const Statistics = ({ options, stat, amount, positiveFeedback}) => {
    return (
        <Container>
             <h2>Statistics</h2>
            {options.map((name, i) => { 
                return (
                    <Point key={i}>
                        {name} : 
                        <span>{stat[name]}</span>
                    </Point>
                )}
            )}
            <Point>
                Total: 
                { amount}
            </Point> 
            <Point> Positive feedback: 
                {positiveFeedback()}</Point>           
        </Container>

    )
}

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])) //масив, що містить назви елементів статистики
    .isRequired,
  stat: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  amount: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.func.isRequired, 
};
