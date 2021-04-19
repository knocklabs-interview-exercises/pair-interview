import styles from "./TypeFilter.module.css";

// eslint-disable-next-line
const types = [
  { value: "channel", label: "Channel" },
  { value: "delay", label: "Delay" },
  { value: "batch", label: "Batch" },
];

// eslint-disable-next-line
const FilterButton = ({ isSelected, children, onClick }) => (
  <button
    className={`${styles.filterButton} ${
      isSelected && styles.filterButtonSelected
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const TypeFilter = () => <div className={styles.container}></div>;

export default TypeFilter;
