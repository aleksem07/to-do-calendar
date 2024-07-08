import Hello from "./components/hello";
import GetCalendar from "./components/get-calendar";

const App = () => {
  return (
    <>
      <Hello />
      <GetCalendar month={1} year={2024} />
    </>
  );
};

export default App;
