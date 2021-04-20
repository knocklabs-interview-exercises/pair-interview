import styles from "./WorkflowItem.module.css";
import getMessageType from "../utils/getMessageType";

const WorkflowItem = ({ itemId, isSelected, onSelect, item }) => {

  let message = getMessageType(item.type, item.settings)
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
          {message}
        </p>
      </div>
      <div className={`${styles.icon} ${styles[`icon__${item.type}`]}`} />
    </div>
  );
};

export default WorkflowItem;
