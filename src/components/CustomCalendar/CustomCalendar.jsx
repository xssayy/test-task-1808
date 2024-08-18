import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const CustomCalendar = ({ onChange, value }) => {
  return (
    <Calendar
      onChange={onChange}
      value={value}
      locale="en"
      next2Label={null}
      prev2Label={null}
    />
  );
};

export default CustomCalendar;
