import styles from "./Search.module.css";

const Search = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Search by name"
    className={styles.input}
  />
);

export default Search;
