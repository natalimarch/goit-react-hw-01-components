import PropTypes from "prop-types";
import TransactionOperation from "./TransactionOperation";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  const Transaction = items.map(({ id, type, amount, currency }) => (
    <TransactionOperation
      key={id}
      type={type}
      amount={amount}
      currency={currency}
    />
  ));

  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.header}>
        <tr className={styles.row}>
          <th className={styles.column}>Type</th>
          <th className={styles.column}>Amount</th>
          <th className={styles.column}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.bodyRow}>{Transaction}</tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
