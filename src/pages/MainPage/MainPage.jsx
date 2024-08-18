import { useEffect, useState } from "react";
import styles from "./MainPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import {
  selectAllCampers,
  selectIsLoading,
} from "../../redux/campers/selectors";
import CampersList from "../../components/CampersList/CampersList";
import Loader from "../../components/Loader/Loader";

const MainPage = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const items = useSelector(selectAllCampers);
  const totalCount = 17;

  const limit = 4;
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    // Загрузка данных при монтировании компонента и при изменении страницы
    if (items.length === 0) {
      console.log("LOG");
      dispatch(fetchCampers(1, limit));
    }
  }, [dispatch, items.length, limit]);

  useEffect(() => {
    if (page > 1) {
      console.log("LOG 2");

      dispatch(fetchCampers({ page, limit }));
    }
  }, [dispatch, page, limit]);

  return isLoading && items.length === 0 ? (
    <Loader />
  ) : (
    <section>
      <div className={styles.container}>
        <CampersList />
        {items.length < totalCount && (
          <button
            type="button"
            className={styles.loadMoreButton}
            onClick={handleLoadMore}
          >
            Load more
          </button>
        )}
      </div>
    </section>
  );
};

export default MainPage;
