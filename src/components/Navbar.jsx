import styles from '../styles/Navbar.module.css';
import logo from '../assets/Umbrella_Corporation_logo.svg';
import {ReactComponent as SearchIcon} from '../assets/SearchIcon.svg';
import {ReactComponent as Globe} from '../assets/Globe.svg';


const Navbar = () => {
  return (
    <header>
        <div className={styles.logo}>
            <img src={logo} alt="Umbrella Corporation logo" />
            <p>
                <span>UMBRELLA</span>
                <span>CORPORATION</span>
            </p>
        </div>
        <nav className={styles.mainNav}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Science</a>
                </li>
                <li>
                    <a href="#">News</a>
                </li>
                <li>
                    <a href="#">Contacts</a>
                </li>
            </ul>
        </nav>
        <button className={styles.search}>
            <SearchIcon />
        </button>
        <span className={styles.divider}></span>
        <button className={styles.language}>
            <Globe /> English
        </button>

    </header>
  )
}

export default Navbar