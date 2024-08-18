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
import Header from "../../components/Header/Header";

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
    if (items.length === 0) {
      dispatch(fetchCampers(1, limit));
    }
  }, [dispatch, items.length, limit]);

  useEffect(() => {
    if (page > 1) {
      dispatch(fetchCampers({ page, limit }));
    }
  }, [dispatch, page, limit]);

  return isLoading && items.length === 0 ? (
    <Loader />
  ) : (
    <>
      <Header />
      <section>
        <div className={styles.container}>
          <h1 className={styles.title}>Our Сatalogue</h1>
          <CampersList mode={"catalogue"} />
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
    </>
  );
};

export default MainPage;
