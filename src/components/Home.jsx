import styles from '../styles/Home.module.css';
import image from '../assets/bg/bg-1.jpg';

const Home = () => {
  return (
    <section className={styles.wrapper}>
      <img src={image} alt="Umbrella Corporation CorVax-HTI Covid-19 vaccine" className={styles.img} />
      <div className={styles.info}>
        <h1><span>FUTURE</span> IS HERE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rerum
          cumque aperiam consequatur deserunt illum corrupti expedita.
        </p>
        <button className={styles.actionButton}>Explore Our Vaccine</button>
      </div>
    </section>
  );
}

export default Home