import GetCalendarData from "./get-calendar-data";
import CalendarRender from "./calendar-render";

const GetCalendar = () => {
  const checkedMonth = 1;
  const checkedYear = 2024;

  return (
    <main>
      <GetCalendarData month={checkedMonth} year={checkedYear} />
      <CalendarRender month={checkedMonth} year={checkedYear} />
    </main>
  );
};

export default GetCalendar;
