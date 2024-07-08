import style from "@/styles/components/calendar-render.module.scss";
import React from "react";
import { MONTH_NAMES } from "../common/month-names";

interface ICalendarRender {
  month: number;
  year: number;
}

const CalendarRender: React.FC<ICalendarRender> = ({ month, year }) => {
  const allDays = new Date(year, month + 1, 0).getDate();

  return (
    <section className={style.render}>
      <h2 className={style.render_month}>{MONTH_NAMES[month]}</h2>

      <ul className={`${style.calendar} ${style.calendar_list}`}>
        {[...Array(allDays).keys()].map(day => (
          <li className={style.calendar_item} key={day}>
            {day + 1}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CalendarRender;
