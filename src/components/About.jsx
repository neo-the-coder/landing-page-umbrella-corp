import styles from '../styles/About.module.css';
import image1 from '../assets/umbrella_hq 1.jpg';
import image2 from '../assets/NESTLAB 1.jpg';
import image3 from '../assets/Scientist.jpg';
import {ReactComponent as Hospital} from '../assets/icons/hospital.svg';
import pic1 from '../assets/CorVax-HT1.jpg';
import pic2 from '../assets/Tyrant Virus.jpg';
import pic3 from '../assets/Antidot.jpg';


const About = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.facility}>
          <img
            src={image1}
            alt="Umbrella Corporation HQ"
            className={styles.shadow}
          />
          <img
            src={image2}
            alt="NESTLAB"
            width="373px"
            className={styles.shadow}
          />
          <img src={image3} alt="Scientist" className={styles.shadow} />
        </div>
        <div className={styles.mainText}>
          <h2>50 YEARS OF EXPERIENCE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            fringilla urna quis felis aliquam, in auctor lacus varius. Phasellus
            et facilisis sem, vehicula pellentesque ipsum. Aenean vestibulum
            consectetur justo, ut gravida metus feugiat eget. Nam semper sed
            nisi eget rhoncus. Aliquam ultrices est tellus, id dapibus nunc
            consequat in. Vestibulum vehicula rutrum purus viverra vulputate.
            Donec volutpat vulputate ipsum eu commodo. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Duis ornare molestie lectus
            ut egestas. In laoreet metus vitae gravida facilisis. Nunc non velit
            consectetur, pretium justo at, euismod dui. Morbi nec lacus augue.
            Proin eget ullamcorper diam.
          </p>
          <p>
            Integer tincidunt malesuada magna, eu faucibus ex commodo eget. Duis
            et turpis ante. Curabitur ultrices commodo rutrum. Praesent
            convallis mauris sem, vitae tincidunt risus posuere vitae. Sed
            venenatis ante dui, quis semper augue sagittis nec. Nam sed volutpat
            nisl, ut luctus mi. Phasellus eget turpis tincidunt tortor interdum
            aliquam. Curabitur mauris tellus, dictum vel elementum sed, bibendum
            ac libero. Vivamus fringilla felis ut nunc feugiat, et accumsan leo
            laoreet. Fusce pulvinar eu diam in sollicitudin. Curabitur vitae
            nibh id erat convallis lacinia vel id magna. Cras porta neque vitae
            diam pellentesque, quis pulvinar diam viverra. Donec eget fermentum
            justo, placerat dignissim nisl. Aliquam faucibus nisl non mauris
            tempor, vel ultricies metus efficitur. Curabitur sed mattis nisi,
            vel volutpat dui. Nam et ornare lorem.
          </p>
          <button className={styles.shadow}>Read more</button>
        </div>
        <div className={styles.news}>
          <h3>New life. New health.</h3>
          <h2>THE NEW T-VIRUS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            fringilla urna quis felis aliquam, in auctor lacus varius. Phasellus
            et facilisis sem, vehicula pellentesque ipsum. Aenean vestibulum
            consectetur justo, ut gravida metus feugiat eget. Nam semper sed
            nisi eget rhoncus.
          </p>
          <div className={styles.actionButtons}>
            <button className={styles.shadow}>Explore Our Products</button>
            <button className={styles.shadow}>
                <Hospital />
                Find Nearest CorVax-Center
            </button>
          </div>
        </div>
        <div className={styles.products}>
            <figure className={styles.shadow}>
                <img src={pic1} alt="CorVax-HT1" />
                <figcaption>CorVax-HT1</figcaption>
            </figure>
            <figure className={styles.shadow}>
                <img src={pic2} alt="Tyrant Virus" />
                <figcaption>Tyrant Virus</figcaption>
            </figure>
            <figure className={styles.shadow}>
                <img src={pic3} alt="Antidot" />
                <figcaption>Antidot</figcaption>
            </figure>
        </div>
      </div>
    </section>
  );
}

export default About