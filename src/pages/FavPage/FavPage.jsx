import CampersList from "../../components/campersList/campersList";
import Header from "../../components/Header/Header";
import styles from "./FavPage.module.css";

const FavPage = () => {
  return (
    <>
      {" "}
      <Header />
      <section>
        <div className={styles.container}>
          <h1 className={styles.title}>Your Favourites</h1>
          <CampersList />
        </div>
      </section>
    </>
  );
};

export default FavPage;
