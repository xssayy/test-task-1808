import { useSelector } from "react-redux";
import styles from "./campersList.module.css";
import {
  selectAllCampers,
  selectIsLoading,
} from "../../redux/campers/selectors";

const CampersList = () => {
  const isLoading = useSelector(selectIsLoading);
  const items = useSelector(selectAllCampers);
  console.log("121212");
  return (
    <>
      {isLoading && items.lenght === 0 ? (
        <div>Loading...</div>
      ) : (
        <ul className={styles.itemsList}>
          {items.map((item) => {
            return (
              <li className={styles.item} key={item._id}>
                value: {item.price}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default CampersList;
