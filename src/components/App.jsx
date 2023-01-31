import Feedback from "./Feedback/Feedback";
import styles from "./app.module.css";

export const App = () => {
  return (
    <div className={styles.containerFeedback}>
      <Feedback/>
    </div>
  );
};


export default App;
