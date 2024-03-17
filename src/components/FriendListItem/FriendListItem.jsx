import css from "../FriendList/FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.item}>
      <img className={css.photo} src={avatar} alt={name} width="48" />
      <p className={css.text}>{name}</p>
      {isOnline ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
