import { create } from "zustand";

interface IUseDateStore {
  currentDay: number;
  month: number;
  year: number;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
  setCurrentDay: (day: number) => void;
}

const useDateStore = create<IUseDateStore>(set => ({
  currentDay: new Date().getDate(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  setCurrentDay: (day: number) => set({ currentDay: day }),
  setMonth: (month: number) => set({ month }),
  setYear: (year: number) => set({ year }),
}));

export default useDateStore;
