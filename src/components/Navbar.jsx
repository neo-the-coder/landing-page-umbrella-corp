import { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/Umbrella_Corporation_logo.svg';
import {ReactComponent as SearchIcon} from '../assets/icons/search.svg';
import {ReactComponent as Globe} from '../assets/icons/Globe.svg';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header>
      <div className={styles.firstRow}>
        <div className={styles.logo}>
          <img src={logo} alt="Umbrella Corporation logo" />
          <p>
            <span>UMBRELLA</span>
            <span>CORPORATION</span>
          </p>
        </div>
        <div
        //   id="nav-icon"
          className={`${styles.navIcon} ${toggleMenu && styles.open}`}
          onClick={() => setToggleMenu((toggle) => !toggle)}
          role="button"
          aria-label="Toggle the menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`${styles.menuWrapper} ${toggleMenu && styles.open}`}>
        <nav className={styles.mainNav}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#science">Science</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </nav>
        <button className={styles.search} aria-label="Search">
          <SearchIcon />
        </button>
        <button className={styles.language} aria-label="Choose language">
          <Globe />
          <span>English</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar