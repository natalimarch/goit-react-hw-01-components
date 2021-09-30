import PropTypes from "prop-types";
import styles from "./Statistic.module.css";

const StatisticElements = ({ id, label, percentage }) => {
  return (
    <li
      key={id}
      className={styles.item}
      style={{ backgroundColor: RandomHex() }}
    >
      <span className={styles.label}>{label}: </span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticElements;

StatisticElements.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

function RandomHex() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
