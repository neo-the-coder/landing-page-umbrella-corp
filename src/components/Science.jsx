import styles from '../styles/Science.module.css';
import {ReactComponent as Logo} from '../assets/Umbrella_Corporation_logo.svg';
import img from '../assets/photo-man-microscope.jpg';

const Science = () => {
  return (
    <section id="science" className={styles.container}>
      <section className={styles.labInfo}>
        <Logo className={styles.logo} />
        <h2>LABORATORY</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          fringilla urna quis felis aliquam, in auctor lacus varius. Phasellus
          et facilisis sem, vehicula pellentesque ipsum. Aenean vestibulum
          consectetur justo, ut gravida metus feugiat eget. Nam semper sed nisi
          eget rhoncus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          fringilla urna quis felis aliquam, in auctor lacus varius. Phasellus
          et facilisis sem, vehicula pellentesque ipsum. Aenean vestibulum
          consectetur justo, ut gravida metus feugiat eget. Nam semper sed nisi
          eget rhoncus.
        </p>
        <button className={styles.shadow}>Read more</button>
      </section>
      <img src={img} alt="Scientist working in an Umbrella Laboratory" />
    </section>
  );
}

export default Science