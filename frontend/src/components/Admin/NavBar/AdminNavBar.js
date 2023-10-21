import styles from './AdminNavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD6, faUsers, faListUl, faFlag } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

export const AdminNavBar = props => {
    return (
        <>
            <header className={styles.header}>
                <h3 className={styles.titleAdmin}>
                    <Link className='link-admin-site' to={'/'}><span className='titleAdminSpan'></span> CODERZ <span className={styles.titleAdminSpan}></span></Link>
                </h3>
                <nav>
                    <ul className={styles.ul}>
                        <li className={styles.ulLi}><Link to="/admin/dashboard"><FontAwesomeIcon icon={faDiceD6} className={`${styles.faSolid} ${styles.faDiceD6}`} /> Dashboard</Link></li>
                        <li className={styles.ulLi}><Link to="/admin/manage-users"><FontAwesomeIcon icon={faUsers} className={`${styles.navUsers} ${styles.faSolid} ${styles.faUsers}`} /> Manage users</Link></li>
                        <li className={styles.ulLi}><Link to="/admin/manage-thread"><FontAwesomeIcon icon={faListUl} className={`${styles.faSolid} ${styles.faListUl}`} /> Manage thread</Link></li>
                        <li className={styles.ulLi}><Link to="/admin/report-system"><FontAwesomeIcon icon={faFlag} className={`${styles.faSolid} ${styles.faFlag}`} /> Report system</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
