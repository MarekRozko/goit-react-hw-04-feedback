import PropTypes from "prop-types";
import styles from "../FeedbackOptions/feedbackOptions.module.css"

function FeedbackOptions({ options, onLeaveFeedback }) {
  const elements = options.map(option => (
       <button type="button" className={styles.buttonFeedback} key={option} onClick={() => onLeaveFeedback(option)}
    >{option}</button>));
  
  return (
    <ul className={styles.listButtons}>
      {elements}
    </ul>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

