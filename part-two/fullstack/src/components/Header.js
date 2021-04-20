import styles from "./Header.module.css";
// eslint-disable-next-line
import Search from "./Search";
// eslint-disable-next-line
import TypeFilter from "./TypeFilter";

const Header = (props) => {
    let onChange = (a) => {
        props.setFilter(a.target.value)
    }
    return (
        <header className={styles.container}>
            <Search value={props.filter} onChange={onChange}/>
            <TypeFilter/>

            <div className={styles.messageContainer}>
                <span className={styles.message}>Showing all items</span>
            </div>
        </header>
    );
};

export default Header;
