import styles from '../styles/Products.module.css';
import img1 from '../assets/Umbreline.jpg';
import img2 from '../assets/Skin base.jpg';
import img3 from '../assets/CorVax-HT1-mini.jpg';

const Products = () => {
  return (
    <section id="products" className={styles.productContainer}>
      <div className={styles.firstImgContainer}>
        <img src={img1} alt="Umbreline" />
        <div className={styles.productInfo}>
          <h2>UMBRELINE</h2>
          <h3>Skin Serum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            fringilla urna quis felis aliquam, in auctor lacus varius. Phasellus
            et facilisis sem, vehicula pellentesque ipsum.
          </p>
        </div>
      </div>
      <img src={img2} alt="Skin base" />
      <img src={img3} alt="Corvax" />
    </section>
  );
};

export default Products