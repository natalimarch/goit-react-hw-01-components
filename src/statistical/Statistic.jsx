import PropTypes from "prop-types";
import StatisticElements from "./StatisticElements";
import styles from "./Statistic.module.css";

const Statistic = ({ title, stats }) => {
  console.log(stats);
  const StatisticData = stats.map(({ id, label, percentage }) => (
    <StatisticElements key={id} label={label} percentage={percentage} />
  ));

  return (
    <>
      <section className={styles.statistics}>
        <div className={styles.container}>
          <div className={styles.stat}>
            {stats ? <h2 className={styles.title}>{title}</h2> : null}
            <ul className={styles.statList}>{StatisticData}</ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistic;

Statistic.defaultProps = {
  title: "",
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
