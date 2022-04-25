import styles from './Header.module.scss'
import Logo from '../../../Assets/Logo.png'

export function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src="/Logo.png" alt="Logo" />
        </div>
    )
}