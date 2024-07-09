import style from "@/styles/components/calendar-render.module.scss";
import { MONTH_NAMES } from "../common/month-names";
import useMonthStore from "../store/date-store";
import useDaysInMonth from "../store/days-in-month-store";
import useModalStore from "../store/modal-store";

const CalendarRender = () => {
  const { currentDay, month, year } = useMonthStore();
  const { daysInMonth } = useDaysInMonth();
  const { setIsOpen } = useModalStore();

  const getDayOfWeek = (year: number, month: number, day: number) => {
    const date = new Date(year, month, day);
    return date.toLocaleString("ru-RU", { weekday: "short" });
  };

  const handleDayClick = (day: number) => {
    const clickDay = `${year}-${month}-${day}`;
    localStorage.setItem("clickDay", clickDay);
    setIsOpen(true);
  };

  return (
    <section className={style.render}>
      <h2 className={style.render_month}>{MONTH_NAMES[month]}</h2>

      <ul className={`${style.calendar} ${style.calendar_list}`}>
        {[...Array(daysInMonth).keys()].map(day => (
          <li
            className={`${style.calendar_item} ${
              currentDay === day + 1 ? `${style.active_day}` : ""
            }`}
            key={day}
            onClick={() => handleDayClick(day + 1)}
          >
            {day + 1} {getDayOfWeek(year, month, day + 1)}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CalendarRender;
