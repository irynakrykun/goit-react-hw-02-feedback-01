import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
 
  return options.map(option => {
    return (
      <div className={css.options__name}  key={[option]}>
        <button
          // key={[option]}
          className={css.btn}
          type="button"
          onClick={() => onLeaveFeedback([option])}
        >
          {option}
        </button>
       </div>
    );
  });
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
