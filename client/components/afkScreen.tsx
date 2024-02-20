"use client"
import { cn } from "@/lib/utils";
import React from "react";
import { create } from "zustand";

type Store = {
  show: boolean;
  change: () => void;
};

export const useStore = create<Store>()((set) => ({
  show: false,
  change: () => set((state) => ({ show: !state.show })),
}));

export default function AfkScreen() {
  const { show } = useStore();
  return (
    <div
      className={cn(
        "h-screen w-screen fixed bg-black/40 top-0 left-0 right-0 bottom-0 -z-10",
        show && "z-10"
      )}
    ></div>
  );
}
