"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { useStore } from "./afkScreen";

export default function ButtonAfk() {
  const [height, setHeight] = useState(40);
  const { change } = useStore();
  async function handleChange() {
    setHeight(50);
    setTimeout(() => setHeight(40), 200);
    change();
  }
  return (
    <div
      onClick={handleChange}
      className={cn(
        "fixed right-8 z-20 -top-2 w-4 flex flex-col duration-500 gap-1 items-center cursor-pointer transition-all",
        `h-[${height}vh]`
      )}
    >
      <div className="bg-[#030b0f] h-full w-full rounded-es-lg rounded-ee-lg duration-500 transition-all"></div>
      <div className="bg-[#FAC403] rounded-full w-[24px] h-[26px] relative">
        <div className="w-1 h-1 bg-white rounded-full absolute right-1 bottom-2"></div>
      </div>
    </div>
  );
}
