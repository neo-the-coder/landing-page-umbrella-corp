import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.info}>
        <h1><span>FUTURE</span> IS HERE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rerum
          cumque aperiam consequatur deserunt illum corrupti expedita tempore
          iste dolore.
        </p>
        <button className={styles.actionButton}>Explore Our Vaccine</button>
      </div>
    </section>
  );
}

export default Home