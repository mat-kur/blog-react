import styles from './AdminNavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD6, faUsers, faListUl, faFlag } from '@fortawesome/free-solid-svg-icons';

export const AdminNavBar = props => {
    return (
        <>
            <header className={styles.header}>
                <h3 className={styles.titleAdmin}>
                    <span className={styles.titleAdminSpan}>c</span> CODERZ <span className={styles.titleAdminSpan}>/></span>
                </h3>
                <nav>
                    <ul className={styles.ul}>
                        <li className={styles.ulLi}><a href="#"><FontAwesomeIcon icon={faDiceD6} className={`${styles.faSolid} ${styles.faDiceD6}`} /> Dashboard</a></li>
                        <li className={styles.ulLi}><a href="#"><FontAwesomeIcon icon={faUsers} className={`${styles.navUsers} ${styles.faSolid} ${styles.faUsers}`} /> Manage users</a></li>
                        <li className={styles.ulLi}><a href="#"><FontAwesomeIcon icon={faListUl} className={`${styles.faSolid} ${styles.faListUl}`} /> Manage thread</a></li>
                        <li className={styles.ulLi}><a href="#"><FontAwesomeIcon icon={faFlag} className={`${styles.faSolid} ${styles.faFlag}`} /> Report system</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
