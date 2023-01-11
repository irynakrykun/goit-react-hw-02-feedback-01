import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [typeGood,typeNeutral,typeBad]= options
  return (
    <div className={css.options__name}>
            <button className={css.btn} type="button" onClick={()=>onLeaveFeedback(typeGood)}>
        good
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={()=>onLeaveFeedback(typeNeutral)}
      >
        neutral
      </button>
      <button className={css.btn} type="button" onClick={()=>onLeaveFeedback(typeBad)}>
        bad
      </button>
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
