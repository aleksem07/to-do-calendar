import React from "react";
import { MONTH_NAMES } from "../common/month-names";
import SetLocalStorage from "./locale-storage/set-local-storage";
import style from "@/styles/components/get-calendar-data.module.scss";

interface IGetCalendarData {
  year: number;
  month: number;
}
const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

const GetCalendarData: React.FC<IGetCalendarData> = ({ year, month }) => {
  if (month < 0) {
    month = 11;
    year--;
  }
  if (month > 11) {
    month = 0;
    year++;
  }

  const days = getDaysInMonth(year, month);
  const monthName = MONTH_NAMES[month];

  return (
    <section>
      <SetLocalStorage storageKey={`currentYear`} value={year.toString()} />
      <SetLocalStorage storageKey={`currentMonth`} value={monthName} />
      <SetLocalStorage storageKey={`currentDays`} value={days.toString()} />

      <div className={style.date}>
        <p>Год: {year}</p>
        <p>Дней в месяце: {days}</p>
      </div>
    </section>
  );
};

export default GetCalendarData;
