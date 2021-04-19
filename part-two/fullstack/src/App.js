import React from "react";
import styles from "./App.module.css";
import data from "./data";
import WorkflowItem from "./components/WorkflowItem";
import WorkflowItemInformation from "./components/WorkflowItemInformation";
import Header from "./components/Header";

function App() {
  const [selectedId, setSelectedId] = React.useState(null);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.workflow}>
          <div className={styles.workflowContent}>
            {data.map((item) => (
              <div className={styles.workflowItem} key={item.id}>
                <WorkflowItem
                  itemId={item.id}
                  onSelect={() => setSelectedId(item.id)}
                  isSelected={selectedId}
                />
                <div className={styles.workflowItemLine} />
              </div>
            ))}
            <div className={styles.blankCard}>
              <span>Add another item</span>
            </div>
          </div>
        </div>
        <aside className={styles.sidepanel}>
          {selectedId && (
            <WorkflowItemInformation
              itemId={selectedId}
              onClose={() => setSelectedId(null)}
            />
          )}
          {!selectedId && (
            <p className={styles.sidepanelBlank}>
              Select an item to view its details
            </p>
          )}
        </aside>
      </div>
    </div>
  );
}

export default App;
