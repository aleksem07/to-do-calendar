import GetCalendarData from "./get-calendar-data";
import CalendarRender from "./calendar-render";

const GetCalendar = () => {
  return (
    <main>
      <GetCalendarData month={1} year={2024} />
      <CalendarRender />
    </main>
  );
};

export default GetCalendar;
