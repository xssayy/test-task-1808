import BookingForm from "../BookingForm/BookingForm";
import CamperDetailsList from "../CampersDetailsList/CamperDetailsList";

import styles from "./Features.module.css";

const Features = ({ camper }) => {
  return (
    <div className={styles.container}>
      <div className={styles.featuresContainer}>
        <CamperDetailsList camper={camper} />
        <div className={styles.vehicleDetailsContainer}>
          <p className={styles.vehicleDetailsTItle}>Vehicle details</p>
          <span className={styles.stick}></span>
          <ul className={styles.vehicleDetailsList}>
            <li className={styles.vehicleDetailsListItem}>
              <p>Form</p> <p>{camper.form}</p>
            </li>
            <li className={styles.vehicleDetailsListItem}>
              <p>Length</p> <p>{camper.length}</p>
            </li>
            <li className={styles.vehicleDetailsListItem}>
              <p>Width</p> <p>{camper.width}</p>
            </li>
            <li className={styles.vehicleDetailsListItem}>
              <p>Height</p> <p>{camper.height}</p>
            </li>
            <li className={styles.vehicleDetailsListItem}>
              <p>Tank</p> <p>{camper.tank}</p>
            </li>
            <li className={styles.vehicleDetailsListItem}>
              <p>Consumption</p> <p>{camper.consumption}</p>
            </li>
          </ul>
        </div>
      </div>
      <BookingForm />
    </div>
  );
};

export default Features;
