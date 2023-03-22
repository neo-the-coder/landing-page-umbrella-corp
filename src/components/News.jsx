import styles from '../styles/News.module.css';
import {ads} from '../assets/ads';
import Card from './Card';
import {ReactComponent as Hospital} from '../assets/icons/hospital.svg';

const News = () => {
  return (
    <section id="news" className={styles.container}>
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li id="li-news">
                    <a href="#li-news">NEWS</a>
                </li>
                <li id="li-vacancies">
                    <a href="#li-vacancies">VACANCIES</a>
                </li>
            </ul>
        </nav>
        <section className={styles.cardContainer}>
            {ads.map((ad, i) => <Card img={ad.img} alt={ad.alt} key={i} />)}
        </section>
        <div className={styles.message}>
            <h4>CorVax-HT1</h4>
            <h1>YOUR COVID-19’s SHIELD</h1>
        </div>
        <button>
            <Hospital />
            Find Nearest CorVax-Center
        </button>
    </section>
  )
}

export default News