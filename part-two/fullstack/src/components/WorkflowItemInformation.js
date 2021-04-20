import styles from "./WorkflowItemInformation.module.css";
import getMessageType from "../utils/getMessageType";

const WorkflowItemInformation = ({item, onClose}) => {

    let message = getMessageType(item.type, item.settings)
    return (
        <div className={styles.container}>
            <button className={styles.sidepanelClose} onClick={onClose}>
                Close
            </button>

            <h2 className={styles.name}>{item?.name}</h2>
            <p className={styles.subtitle}>
                {message}
            </p>

            <hr/>

            <pre>{JSON.stringify(item.settings, null, 2)}</pre>
        </div>
    );
};

export default WorkflowItemInformation;
