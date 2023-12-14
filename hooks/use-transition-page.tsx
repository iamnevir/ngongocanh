import { create } from "zustand";

type Transition = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggle: () => void;
  setClassName: (className: string) => void;
  className: string;
};

export const useTransition = create<Transition>((set, get) => ({
  isOpen: false,
  className: "",
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  toggle: () => set({ isOpen: !get().isOpen }),
  setClassName: (className: string) => set({ className }),
}));
