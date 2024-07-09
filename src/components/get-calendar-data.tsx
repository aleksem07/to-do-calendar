import { MONTH_NAMES } from "../common/month-names";
import SetLocalStorage from "./locale-storage/set-local-storage";
import style from "@/styles/components/get-calendar-data.module.scss";
import useMonthStore from "../store/date-store";
import useDaysInMonth from "../store/days-in-month-store";

const GetCalendarData = () => {
  const { year, month, currentDay, setMonth, setYear } = useMonthStore();
  const { daysInMonth } = useDaysInMonth();

  if (month < 0) {
    setMonth(11);
    setYear(year - 1);
  }
  if (month > 11) {
    setMonth(0);
    setYear(year + 1);
  }

  const monthName = MONTH_NAMES[month];

  return (
    <section>
      <SetLocalStorage storageKey={`currentYear`} value={`${year}`} />
      <SetLocalStorage storageKey={`currentMonth`} value={monthName} />
      <SetLocalStorage storageKey={`currentDay`} value={`${currentDay}`} />

      <div className={style.date}>
        <p>Год: {year}</p>
        <p>Дней в месяце: {daysInMonth}</p>
      </div>
    </section>
  );
};

export default GetCalendarData;
