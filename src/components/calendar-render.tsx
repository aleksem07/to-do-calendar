import style from "@/styles/components/calendar-render.module.scss";
import React from "react";
import { MONTH_NAMES } from "../common/month-names";

interface ICalendarRender {
  month: number;
}

const CalendarRender: React.FC<ICalendarRender> = ({ month }) => {
  return (
    <section className={style.render}>
      <h2 className={style.render_month}>{MONTH_NAMES[month]}</h2>

      <div className={style.render}></div>
    </section>
  );
};

export default CalendarRender;
