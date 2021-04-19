import styles from "./WorkflowItemInformation.module.css";
import data from "../data";

function findItem(id) {
  return data.find((item) => item.id === id);
}

const WorkflowItemInformation = ({ itemId, onClose }) => {
  const item = findItem(itemId);

  return (
    <div className={styles.container}>
      <button className={styles.sidepanelClose} onClick={onClose}>
        Close
      </button>

      <h2 className={styles.name}>{item?.name}</h2>
      <p className={styles.subtitle}>
        {item.type === "delay"
          ? `Delay for ${item.settings.delay_for.value} seconds`
          : `Send to ${item.settings.provider_name}`}
      </p>

      <hr />

      <pre>{JSON.stringify(item.settings, null, 2)}</pre>
    </div>
  );
};

export default WorkflowItemInformation;
