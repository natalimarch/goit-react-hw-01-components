import PropTypes from "prop-types";
import Friend from "./Friend";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  const Friends = friends.map(({ id, avatar, name, isOnline }) => (
    <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
  ));

  return <ul className={styles.friendList}>{Friends}</ul>;
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
