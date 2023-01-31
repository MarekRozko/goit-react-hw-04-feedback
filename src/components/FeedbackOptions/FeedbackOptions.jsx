import PropTypes from "prop-types";
import styles from "../FeedbackOptions/feedbackOptions.module.css"

function FeedbackOptions({ options, addValueFeedback }) {
  const elements = options.map(option => (
       <button type="button" className={styles.buttonFeedback} key={option} onClick={() => addValueFeedback(option)}
    >{option}</button>));
  
  return (
    <ul className={styles.listButtons}>
      {elements}
    </ul>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  addValueFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

