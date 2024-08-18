import Icon from "../Icon/Icon";
import styles from "./Features.module.css";

const Features = ({ camper }) => {
  return (
    <div className={styles.container}>
      <div className={styles.featuresContainer}>
        <ul className={styles.camperDetailsList}>
          {Boolean(camper?.adults) && (
            <li className={styles.camperDetail}>
              <Icon width={20} height={20} id={"people"} />
              <p className={styles.camperDetailText}>{camper.adults} Adults</p>
            </li>
          )}
          {Boolean(camper?.transmission) && (
            <li className={styles.camperDetail}>
              <Icon width={20} height={20} id={"transmission"} />
              <p className={styles.camperDetailText}>{camper.transmission}</p>
            </li>
          )}
          {Boolean(camper?.details.airConditioner) && (
            <li className={styles.camperDetail}>
              <Icon width={20} height={20} id={"ac"} />
              <p className={styles.camperDetailText}>AC</p>
            </li>
          )}
          {Boolean(camper?.engine) && (
            <li className={styles.camperDetail}>
              <Icon width={20} height={20} id={"petrol"} />
              <p className={styles.camperDetailText}>{camper.engine}</p>
            </li>
          )}
          {Boolean(camper?.details.kitchen) && (
            <li className={styles.camperDetail}>
              <Icon width={20} height={20} id={"kitchen"} />
              <p className={styles.camperDetailText}>
                {camper.details.kitchen > 1
                  ? `${camper.details.kitchen} Kitchens`
                  : "Kitchen"}
              </p>
            </li>
          )}
          {Boolean(camper?.details.beds) && (
            <li className={styles.camperDetail}>
              <Icon width={20} height={20} id={"bed"} />
              <p className={styles.camperDetailText}>
                {camper.details.beds} beds
              </p>
            </li>
          )}

          {Boolean(camper.details.airConditioner) && (
            <li className={styles.camperDetail}>
              <Icon width={20} height={20} id={"air-conditioner"} />
              <p className={styles.camperDetailText}>
                {camper.details.airConditioner} Air Conditioner
              </p>
            </li>
          )}
          {Boolean(camper.details.CD) && (
            <li className={styles.camperDetail}>
              <Icon width={20} height={20} id={"cd"} />
              <p className={styles.camperDetailText}>CD</p>
            </li>
          )}
          {Boolean(camper.details.radio) && (
            <li className={styles.camperDetail}>
              <Icon width={20} height={20} id={"radio"} />
              <p className={styles.camperDetailText}>Radio</p>
            </li>
          )}
          {Boolean(camper.details.hob) && (
            <li className={styles.camperDetail}>
              <Icon width={20} height={20} id={"hob"} />
              <p className={styles.camperDetailText}>
                {camper.details.hob} hob
              </p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Features;
