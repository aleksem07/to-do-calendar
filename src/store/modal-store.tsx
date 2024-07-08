import { create } from "zustand";

interface IModalStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const useModalStore = create<IModalStore>(set => ({
  isOpen: false,
  setIsOpen: isOpen => set({ isOpen }),
}));

export default useModalStore;
