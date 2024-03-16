import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <h2>Task 1</h2>
      <div className={css.card}>
        <div className={css["photo-wrap"]}>
          <img className={css.photo} src={image} alt="User avatar" />
          <p className={css.name}>{name}</p>
          <p className={css.text}>@{tag}</p>
          <p className={css.text}>{location}</p>
        </div>
        <ul className={css.list}>
          <li className={css["list-item"]}>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li className={css["list-item"]}>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li className={css["list-item"]}>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
