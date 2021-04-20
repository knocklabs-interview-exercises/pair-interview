import React, {useEffect} from "react";
import styles from "./App.module.css";
import WorkflowItem from "./components/WorkflowItem";
import WorkflowItemInformation from "./components/WorkflowItemInformation";
import Header from "./components/Header";

function App() {
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [data, setData] = React.useState([]);
    const [filter, setFilter] = React.useState('');

    useEffect(() => {
        fetch('https://knock-delivery-api.onrender.com/workflow/items').then((r) => {
            r.json().then(r => {
                setData(r.items)
            })
        })
    }, []);

    return (
        <div className={styles.wrapper}>
            <Header filter={filter} setFilter={setFilter}/>
            <div className={styles.container}>
                <div className={styles.workflow}>
                    <div className={styles.workflowContent}>
                        {data
                            .filter(item => {return !filter? true : item.name.toLowerCase().includes(filter.toLowerCase())})
                            .map((item) => (
                                <div className={styles.workflowItem} key={item.id}>
                                    <WorkflowItem
                                        itemId={item.id}
                                        onSelect={() => setSelectedItem(item)}
                                        isSelected={selectedItem === item}
                                        item={item}
                                    />
                                    <div className={styles.workflowItemLine}/>
                                </div>
                            ))}
                        <div className={styles.blankCard}>
                            <span>Add another item</span>
                        </div>
                    </div>
                </div>
                <aside className={styles.sidepanel}>
                    {selectedItem && (
                        <WorkflowItemInformation
                            item={selectedItem}
                            onClose={() => setSelectedItem(null)}
                        />
                    )}
                    {!selectedItem && (
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
