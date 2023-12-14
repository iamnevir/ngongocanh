import { create } from "zustand";

type Scroll = {
  isScroll: boolean;
  setScroll: (v: boolean) => void;
};

export const useScroll = create<Scroll>((set, get) => ({
  isScroll: false,
  setScroll: (v: boolean) => set({ isScroll: v }),
}));
