import PropTypes from "prop-types";
import styles from "../Statistics/statistics.module.css";
const Statisstics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <ul className={styles.ListStatistics}>
                <li className={styles.positive}>Good: {good}</li>
                <li className={styles.positive}>Neutral: {neutral}</li>
                <li className={styles.positive}>Bad: {bad}</li>
                <li className={styles.positive}>Total: {total}</li>
                <li className={styles.positive}>Positive feedback: {positivePercentage}%</li>
            </ul>
        </>
    )
}
export default Statisstics;


Statisstics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired,
}