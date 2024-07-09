import { create } from "zustand";
import GetLocalStorage from "../components/locale-storage/get-local-storage";

interface ITask {
  id: string;
  text: string;
  completed: boolean;
}

interface ITaskStore {
  tasks: ITask[];
  addTask: (text: string) => void;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
}

const useTaskStore = create<ITaskStore>(set => ({
  tasks: [],
  addTask: (text: string) => {
    const clickDay = GetLocalStorage("clickDay");
    set(state => ({
      tasks: [
        ...state.tasks,
        { id: `${clickDay}_${Date.now()}`, text, completed: false },
      ],
    }));
  },
  removeTask: (id: string) =>
    set(state => ({
      tasks: state.tasks.filter(task => task.id !== id),
    })),
  toggleTask: (id: string) =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
}));

export default useTaskStore;
