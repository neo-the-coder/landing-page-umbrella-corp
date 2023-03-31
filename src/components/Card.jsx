import styles from '../styles/Card.module.css';
import {ReactComponent as Arrow} from '../assets/icons/arrow-right.svg';

const Card = ({img, alt}) => {
  return (
    <figure className={styles.container}>
      <img src={img} alt={alt} />
      <div className={styles.description}>
        <figcaption>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod.
        </figcaption>
        <button aria-label="Read more">
          <Arrow className={styles.arrow} />
        </button>
      </div>
    </figure>
  );
}

export default Card