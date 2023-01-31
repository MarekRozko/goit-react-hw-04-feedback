import PropTypes from "prop-types";

import styles from "../Section/section.module.css";

const Section = ({ title, children }) => {
    return (
        <section>
            <h2 className={styles.titleFeedback}>{title}</h2>
            {children}
        </section>
    )
}

export default Section;

Section.prototypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}

