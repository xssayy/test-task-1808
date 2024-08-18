import { useSelector } from "react-redux";
import CampersList from "../../components/CampersList/CampersList";
import Header from "../../components/Header/Header";
import styles from "./FavPage.module.css";
import { selectAllFavCampers } from "../../redux/user/selectors";

const FavPage = () => {
  const favCampers = useSelector(selectAllFavCampers);

  return (
    <>
      {" "}
      <Header />
      <section>
        <div className={styles.container}>
          <h1 className={styles.title}>Your Favourites</h1>
          {favCampers.length > 0 ? (
            <CampersList />
          ) : (
            <p className={styles.stubText}>
              Seems like you do not have any favorite campers yet.
              <br />
              Visit the catalog and pick your favorites!
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default FavPage;
