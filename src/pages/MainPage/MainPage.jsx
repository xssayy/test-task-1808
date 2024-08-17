import { useEffect, useState } from "react";
import styles from "./MainPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import {
  selectAllCampers,
  selectHasLoaded,
} from "../../redux/campers/selectors";
import CampersList from "../../components/campersList/campersList";

const MainPage = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const hasLoaded = useSelector(selectHasLoaded);
  const items = useSelector(selectAllCampers);
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    // Загрузка данных при монтировании компонента
    console.log(hasLoaded);

    if (hasLoaded === false) {
      dispatch(fetchCampers(1, 4));
      console.log("SOME LOG");
    }
  }, [dispatch, hasLoaded]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  useEffect(() => {
    // Загрузка данных при изменении страницы, если данные уже загружены
    if (page > 1) {
      console.log("qe");
      dispatch(fetchCampers({ page, limit: 4 }));
    }
  }, [dispatch, page]);

  return (
    <section>
      <CampersList />
      <button
        type="button"
        className={styles.loadMoreButton}
        onClick={handleLoadMore}
      >
        Load more
      </button>
    </section>
  );
};

export default MainPage;
