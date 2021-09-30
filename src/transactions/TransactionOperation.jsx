import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionOperation = ({ type, amount, currency }) => {
  return (
    <tr className={styles["main-row"]}>
      <td className={styles.mainColumns}>{type}</td>
      <td className={styles.mainColumns}>{amount}</td>
      <td className={styles.mainColumns}>{currency}</td>
    </tr>
  );
};

export default TransactionOperation;

TransactionOperation.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
