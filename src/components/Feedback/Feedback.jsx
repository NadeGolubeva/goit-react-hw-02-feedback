import PropTypes from 'prop-types';
import {Container, Btn} from './Feedback.styled'
export const Feedback = ({options, onUpdateFeedback }) => {
    
  return (
    <Container>
      <h1> Please leave feedback </h1>
       <div className="Counter__controls">
   
        {options.map((name, i) => {
           return (
             <Btn
               key={i + 1}
               type="button"
               onClick={() => { onUpdateFeedback(name) }}
             >
      {name}
        </Btn>
      );
           })}

  </div>
      </Container>

    )}


Feedback.propTypes = {
      options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])) //масив, що містить назви елементів статистики
    .isRequired,
  onUpdateFeedback: PropTypes.func.isRequired,
    }