import Modal from "react-modal";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import styles from "./ModalWindow.module.css";
import Icon from "../Icon/Icon";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

Modal.setAppElement("#root");
const ModalWindow = ({ isOpen, closeModal, camper }) => {
  const [isFeaturesActive, setIsFeaturesActive] = useState(true);
  const toggleIsFeaturesActive = () => {
    setIsFeaturesActive((prevValue) => !prevValue);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(47, 47, 47, 0.6)",
        },
      }}
      className={styles.modalWindow}
    >
      <div className={styles.modalContainer}>
        <div className={styles.noScrollContent}>
          <p className={styles.camperName}>{camper.name}</p>
          <div className={styles.camperRatingAndLocation}>
            <div className={styles.camperRatingContainer}>
              <Icon id={"star"} width={25} height={25} fillColor="#ffc531" />
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
          <p className={styles.camperPrice}>€{camper.price}.00 </p>
        </div>
        <PerfectScrollbar className={styles.scrollbarContainer}>
          <div className={styles.camperImgContainer}>
            {camper.gallery.map((image) => (
              <img src={image} className={styles.camperImg} key={nanoid()} />
            ))}
          </div>
          <p className={styles.camperDescription}>{camper.description}</p>
          <div className={styles.camprerDetailInfoContainer}>
            <div className={styles.switcherContainer}>
              <p
                onClick={toggleIsFeaturesActive}
                className={
                  isFeaturesActive === true
                    ? `${styles.switcherElementActive}`
                    : `${styles.switcherElement}`
                }
              >
                Features
              </p>
              <p
                onClick={toggleIsFeaturesActive}
                className={
                  isFeaturesActive === true
                    ? `${styles.switcherElement}`
                    : `${styles.switcherElementActive}`
                }
              >
                Reviews
              </p>
            </div>
            {isFeaturesActive ? (
              <Features camper={camper} />
            ) : (
              <Reviews camper={camper} />
            )}
          </div>
        </PerfectScrollbar>
      </div>
      <button
        type="button"
        className={styles.closeModalButton}
        onClick={closeModal}
      >
        <Icon
          id="close-button"
          className={styles.closeModalIcon}
          width={32}
          height={32}
        />
      </button>
    </Modal>
  );
};

export default ModalWindow;
