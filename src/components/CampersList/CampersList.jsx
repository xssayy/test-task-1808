import { useDispatch, useSelector } from "react-redux";
import styles from "./CampersList.module.css";
import Icon from "../Icon/Icon";
import { selectAllCampers } from "../../redux/campers/selectors";
import { selectAllFavCampers } from "../../redux/user/selectors";
import { addToFavList, removeFromFavList } from "../../redux/user/slice";
import { useEffect, useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";

const CampersList = ({ mode }) => {
  const campers = useSelector(selectAllCampers);
  const favCampers = useSelector(selectAllFavCampers);
  const items = mode === "catalogue" ? campers : favCampers;
  const dispatch = useDispatch();
  const [modalIsOpen, setModailIsOpen] = useState(false);
  const [selectedCamper, setCamper] = useState({});

  const handleOpenModal = (camper) => {
    setCamper(camper);
    setModailIsOpen(true);
  };

  const closeModal = () => {
    setModailIsOpen(false);
  };

  const toggleFav = (camper) => {
    const isCamperInFavList = favCampers.some(
      (favCamper) => favCamper._id === camper._id
    );
    console.log(isCamperInFavList);
    if (!isCamperInFavList) {
      console.log("added");
      dispatch(addToFavList(camper));
    } else {
      console.log("removed");
      dispatch(removeFromFavList(camper._id));
    }
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
  }, [modalIsOpen]);

  return (
    <>
      {" "}
      <ul className={styles.campersList}>
        {items.map((camper) => {
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
                      onClick={() => toggleFav(camper)}
                      className={styles.favButton}
                    >
                      {favCampers.some(
                        (favCamper) => favCamper._id === camper._id
                      ) ? (
                        <Icon id={"heart-red"} width={25} height={25} />
                      ) : (
                        <Icon id={"heart"} width={25} height={25} />
                      )}
                    </button>
                  </div>
                </div>
                <div className={styles.camperRatingAndLocation}>
                  <div className={styles.camperRatingContainer}>
                    <Icon
                      id={"star"}
                      width={25}
                      height={25}
                      fillColor="#ffc531"
                    />
                    <p className={styles.camperRating}>
                      {camper.rating}
                      {`(${camper.reviews.length} Reviews)`}
                    </p>
                  </div>
                  <div className={styles.camperLocationContainer}>
                    <Icon id={"map-pin"} width={16} height={16} />
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
                <button
                  className={styles.showMoreButton}
                  onClick={() => handleOpenModal(camper)}
                  type="button"
                >
                  Show more
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {modalIsOpen && (
        <ModalWindow
          isOpen={modalIsOpen}
          closeModal={closeModal}
          camper={selectedCamper}
        />
      )}
    </>
  );
};

export default CampersList;
