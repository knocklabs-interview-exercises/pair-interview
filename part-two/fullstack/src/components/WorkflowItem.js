import styles from "./WorkflowItem.module.css";
import data from "../data";

function findItem(id) {
  return data.find((item) => item.id === id);
}

const WorkflowItem = ({ itemId, isSelected, onSelect }) => {
  const item = findItem(itemId);

  return (
    <div
      className={`${styles.container} ${
        isSelected && styles.containerSelected
      }`}
      onClick={onSelect}
    >
      <div className={styles.content}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.subtitle}>
          {item.type === "delay"
            ? `Delay for ${item.settings.delay_for.value} seconds`
            : `Send to ${item.settings.provider_name}`}
        </p>
      </div>
      <div className={`${styles.icon} ${styles[`icon__${item.type}`]}`} />
    </div>
  );
};

export default WorkflowItem;
