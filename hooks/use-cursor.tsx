import { create } from "zustand";

type CursorProps = {
  ref: any;
  className: string;
  isHovered: boolean;
  width: number;
  height: number;
  setRef: (ref: any) => void;
  setIsHovered: (v: boolean) => void;
  setWidth: (v: number) => void;
  setHeight: (v: number) => void;
  setClassName: (className: string) => void;
};

export const useCursor = create<CursorProps>((set) => ({
  ref: null,
  className: "",
  isHovered: false,
  width: 30,
  height: 30,
  setRef: (ref: any) => set({ ref }),
  setIsHovered: (v: boolean) => set({ isHovered: v }),
  setWidth: (v: number) => set({ width: v }),
  setHeight: (v: number) => set({ height: v }),
  setClassName: (className: string) => set({ className }),
}));
