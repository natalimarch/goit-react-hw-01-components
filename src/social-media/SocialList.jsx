import PropTypes from "prop-types";
import styles from "./SocialList.module.css";

const SocialList = ({ items }) => {
  const SocialMenu = items.map(({ id, avatar, name, tag, location, stats }) => (
    <div key={id} className={styles.wrapper}>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img
            src={avatar}
            alt="Аватар пользователя"
            className={styles.avatarSocial}
          />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.itemSocial}>
            <span className={styles.label}>Followers: </span>
            <span className={styles.quantity}>{stats.followers}</span>
          </li>
          <li className={styles.itemSocial}>
            <span className={styles.label}>Views: </span>
            <span className={styles.quantity}>{stats.views}</span>
          </li>
          <li className={styles.itemSocial}>
            <span className={styles.label}>Likes: </span>
            <span className={styles.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  ));
  return <>{SocialMenu}</>;
};

export default SocialList;

SocialList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      tag: PropTypes.string,
      location: PropTypes.string,
      stats: PropTypes.shape({
        followers: PropTypes.number,
        view: PropTypes.number,
        likes: PropTypes.number,
      }),
    })
  ),
};
