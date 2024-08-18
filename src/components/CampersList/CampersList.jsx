import { useSelector } from "react-redux";
import styles from "./CampersList.module.css";
import Icon from "../Icon/Icon";
import { selectAllCampers } from "../../redux/campers/selectors";

const CampersList = () => {
  const campers = useSelector(selectAllCampers);

  return (
    <ul className={styles.campersList}>
      {campers.map((camper) => {
        return (
          <li className={styles.camper} key={camper._id}>
            <img className={styles.camperImg} src={camper.gallery[0]} />
            <div className={styles.camperContent}>
              <div className={styles.camperHeader}>
                <p className={styles.camperName}>{camper.name}</p>
                <div className={styles.camperPriceContainer}>
                  <p>€{camper.price}.00 </p>
                  <button
                    type="button"
                    aria-label="Add to favourites"
                    className={styles.favButton}
                  >
                    <Icon
                      id={"heart"}
                      width={25}
                      height={25}
                      className={styles.favIcon}
                    />
                  </button>
                </div>
              </div>
              <div className={styles.camperRatingAndLocation}>
                <div className={styles.camperRatingContainer}>
                  <Icon
                    id={"star"}
                    width={25}
                    height={25}
                    className={styles.favIcon}
                  />
                  <p className={styles.camperRating}>
                    {camper.rating}
                    {`(${camper.reviews.length} Reviews)`}
                  </p>
                </div>
                <div className={styles.camperLocationContainer}>
                  <Icon
                    id={"map-pin"}
                    width={16}
                    height={16}
                    className={styles.favIcon}
                  />
                  <p className={styles.camperLocation}>{camper.location}</p>
                </div>
              </div>
              <p className={styles.camperDescription}>{camper.description}</p>
              <ul className={styles.camperDetailsList}>
                <li className={styles.camperDetail}>
                  <Icon width={20} height={20} id={"people"} />
                  <p className={styles.camperDetailText}>
                    {camper.adults} Adults
                  </p>
                </li>
                <li className={styles.camperDetail}>
                  <Icon width={20} height={20} id={"transmission"} />
                  <p className={styles.camperDetailText}>
                    {camper.transmission}
                  </p>
                </li>
                <li className={styles.camperDetail}>
                  <Icon width={20} height={20} id={"petrol"} />
                  <p className={styles.camperDetailText}>{camper.engine}</p>
                </li>
                <li className={styles.camperDetail}>
                  <Icon width={20} height={20} id={"kitchen"} />
                  <p className={styles.camperDetailText}>
                    {camper.details.kitchen > 1
                      ? `${camper.details.kitchen} Kitchens`
                      : "Kitchen"}
                  </p>
                </li>
                <li className={styles.camperDetail}>
                  <Icon width={20} height={20} id={"bed"} />
                  <p className={styles.camperDetailText}>
                    {camper.details.beds} beds
                  </p>
                </li>
                <li className={styles.camperDetail}>
                  <Icon width={20} height={20} id={"ac"} />
                  <p className={styles.camperDetailText}>AC</p>
                </li>
              </ul>
              <button className={styles.showMoreButton} type="button">
                Show more
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CampersList;
