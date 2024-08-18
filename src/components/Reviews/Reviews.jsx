import { nanoid } from "@reduxjs/toolkit";
import BookingForm from "../BookingForm/BookingForm";
import styles from "./Reviews.module.css";
import Icon from "../Icon/Icon";

const Reviews = ({ camper }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.reviewsContainer}>
        {camper.reviews.map((review) => (
          <li key={nanoid()}>
            <div className={styles.reviewHeader}>
              <div className={styles.reviewAvatar}>
                {review.reviewer_name[0]}
              </div>
              <div className={styles.nameAndRatingContainer}>
                <p className={styles.reviewerName}>{review.reviewer_name}</p>
                <ul className={styles.reviewerRating}>
                  {[...Array(5)].map((_, index) => (
                    <li key={nanoid()}>
                      <Icon
                        id="star"
                        width={25}
                        height={25}
                        className={
                          index + 1 > review.reviewer_rating
                            ? styles.greyStar
                            : styles.yellowStar
                        }
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={styles.reviewerText}>{review.comment}</p>
          </li>
        ))}
      </ul>
      <BookingForm />
    </div>
  );
};

export default Reviews;
