import { Link } from "react-router-dom";
import styles from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {" "}
        <h1 className={styles.title}>Campers Shop</h1>
        <p className={styles.description}>
          Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Velit debitis deleniti fugit recusandae, nostrum necessitatibus nobis
          officiis?
        </p>
        <Link className={styles.link} to="/MainPage">
          Go to the catalogue
        </Link>
      </div>
    </section>
  );
};

export default WelcomePage;
