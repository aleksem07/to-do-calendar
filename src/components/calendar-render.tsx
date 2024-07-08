import style from "@/styles/components/calendar-render.module.scss";
import { MONTH_NAMES } from "../common/month-names";
import useMonthStore from "../store/date-store";
import useDaysInMonth from "../store/days-in-month";

const CalendarRender = () => {
  const { currentDay, month, year } = useMonthStore();
  const { daysInMonth } = useDaysInMonth();

  const getDayOfWeek = (year: number, month: number, day: number) => {
    const date = new Date(year, month, day);
    return date.toLocaleString("ru-RU", { weekday: "short" });
  };

  return (
    <section className={style.render}>
      <h2 className={style.render_month}>{MONTH_NAMES[month]}</h2>

      <ul className={`${style.calendar} ${style.calendar_list}`}>
        {[...Array(daysInMonth).keys()].map(day => (
          <li
            className={`${style.calendar_item} ${
              currentDay - 1 === day ? `${style.active_day}` : ""
            }`}
            key={day}
          >
            {day + 1} {getDayOfWeek(year, month, day + 1)}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CalendarRender;
