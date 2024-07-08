import { create } from "zustand";
import useDateStore from "./date-store";

interface IUseDaysInMonth {
  daysInMonth: number;
  setDaysInMonth: () => void;
}

const useDaysInMonth = create<IUseDaysInMonth>(set => ({
  daysInMonth: new Date(
    useDateStore.getState().year,
    useDateStore.getState().month + 1,
    0
  ).getDate(),
  setDaysInMonth: () => {
    const { year, month } = useDateStore.getState();
    set({ daysInMonth: new Date(year, month + 1, 0).getDate() });
  },
}));

export default useDaysInMonth;
