import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const Friend = ({ name, avatar, isOnline }) => {
  return (
    <li className={styles.item}>
      <span
        className={
          isOnline ? `${styles.online} ${styles.status}` : `${styles.status}`
        }
      ></span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default Friend;

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
