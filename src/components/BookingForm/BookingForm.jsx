import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomCalendar from "../CustomCalendar/CustomCalendar"; // Импортируйте ваш кастомный календарь
import styles from "./BookingForm.module.css";
import Icon from "../Icon/Icon";

const BookingForm = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too short").required("Required field"),
    email: Yup.string().email("Wrong email").required("Required field"),
    date: Yup.date().required("Required field"),
    comment: Yup.string(),
  });

  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const handleDateChange = (date, setFieldValue) => {
    setSelectedDate(date);
    setFieldValue("date", date);
    setShowCalendar(false);
  };

  const onSubmit = (values) => {
    console.log("Form submitted with values:", values);
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Book your campervan now</p>
      <p className={styles.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form className={styles.form}>
            <div>
              <Field
                name="name"
                placeholder="Name"
                type="text"
                className={styles.input}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className={styles.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.dateInput}>
              <Field name="date">
                {({ field }) => (
                  <>
                    <input
                      {...field}
                      placeholder="Booking date"
                      value={
                        selectedDate ? selectedDate.toLocaleDateString() : ""
                      }
                      readOnly
                      className={styles.input}
                      onClick={() => setShowCalendar(!showCalendar)}
                    />
                    <Icon
                      id="calendar"
                      width={20}
                      height={20}
                      className={styles.calendarIcon}
                    />
                    {showCalendar && (
                      <CustomCalendar
                        onChange={(date) =>
                          handleDateChange(date, setFieldValue)
                        }
                        value={selectedDate}
                      />
                    )}
                    <ErrorMessage
                      name="date"
                      component="div"
                      className={styles.error}
                    />
                  </>
                )}
              </Field>
            </div>

            <div>
              <Field
                name="comment"
                as="textarea"
                placeholder="Comment"
                rows="4"
                className={styles.textarea}
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={styles.error}
              />
            </div>

            <button className={styles.submitButton} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
