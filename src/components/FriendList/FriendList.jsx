import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <>
      <h2 className={css.title}>Task 2</h2>
      <ul className={css.list}>
        {friends.map((el) => {
          return (
            <li key={el.id}>
              <FriendListItem
                avatar={el.avatar}
                name={el.name}
                isOnline={el.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FriendList;
