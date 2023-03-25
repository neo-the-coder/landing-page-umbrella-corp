import styles from '../styles/Footer.module.css';
import {ReactComponent as Logo} from '../assets/Umbrella_Corporation_logo.svg';
import {ReactComponent as Globe} from '../assets/icons/Globe.svg';
import {ReactComponent as Instagram} from '../assets/icons/instagram.svg';
import {ReactComponent as Facebook} from '../assets/icons/facebook.svg';
import {ReactComponent as Twitter} from '../assets/icons/twitter.svg';
import {ReactComponent as LinkedIn} from '../assets/icons/linkedin.svg';
import {ReactComponent as UnicefLogo} from '../assets/UNICEF_logo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.firstRow}>
        <div className={styles.logoSocials}>
          <div>
            <Logo className={styles.logo} />
            <p>
              <span>UMBRELLA</span>
              <span>corporation</span>
            </p>
          </div>
          <ul className={styles.socialLinks}>
            <li>
              <a href="#ig">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="#fb">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="#twttr">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="#lkdn">
                <LinkedIn />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.quickLinks}>
          <ul>
            <li>
              <a href="#Investors">Investors</a>
            </li>
            <li>
              <a href="#Grant_Seekers">Grant Seekers</a>
            </li>
            <li>
              <a href="#Careers">Careers</a>
            </li>
            <li>
              <a href="#Healthcare_Professionals">Healthcare Professionals</a>
            </li>
            <li>
              <a href="#Media">Media</a>
            </li>
            <li>
              <a href="#Business_to_Business">Business to Business</a>
            </li>
            <li>
              <a href="#Partners">Partners</a>
            </li>
            <li>
              <a href="#Merchandise">Merchandise</a>
            </li>
          </ul>
        </div>
        <div className={styles.donationPanel}>
          <p className={styles.message}>
            WE STAND WITH <span>UKRAINE</span>
          </p>
          <UnicefLogo />
          <p className={styles.desc}>
            Donate to support families affected by the war in Ukraine
          </p>
          <button>Donate</button>
        </div>
      </section>
      <section className={styles.secondRow}>
        <a href="#Location" className={styles.location}>
          <Globe />
          <span>United States</span>
        </a>
        <ul className={styles.moreLinks}>
          <li>
            <a href="#Terms">Terms of use</a>
          </li>
          <li>
            <a href="#Privacy">Privacy statement</a>
          </li>
          <li>
            <a href="#Contact">Contact Umbrella</a>
          </li>
          <li>
            <a href="#Sitemap">Sitemap</a>
          </li>
        </ul>
        <p className={styles.copyRights}>© 2022 Umbrella Corp.</p>
      </section>
    </footer>
  );
}

export default Footer