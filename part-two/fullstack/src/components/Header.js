import styles from "./Header.module.css";
// eslint-disable-next-line
import Search from "./Search";
// eslint-disable-next-line
import TypeFilter from "./TypeFilter";

const Header = () => {
  return (
    <header className={styles.container}>
      {/* <Search />
      <TypeFilter /> */}

      <div className={styles.messageContainer}>
        <span className={styles.message}>Showing all items</span>
      </div>
    </header>
  );
};

export default Header;
