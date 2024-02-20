"use client";
import React, { Suspense, useEffect, useState } from "react";
import { create } from 'zustand'

type Store = {
  bg: number
  change: () => void
}

export const useStore = create<Store>()((set) => ({
  bg: 4,
  change: () => set((state) => ({ bg: Math.floor(Math.random() * 7) + 1 })),
}))

export default function Background() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { bg } = useStore()
  function getCurrentDateTime() {
    // Tạo một đối tượng Date đại diện cho thời điểm hiện tại
    const currentDateTime = new Date();
    // Tạo một đối tượng Intl.DateTimeFormat với định dạng mong muốn
    const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZoneName: "short",
    });
    // Sử dụng đối tượng để định dạng ngày và giờ
    const formattedDateTime = dateTimeFormatter.format(currentDateTime);
    return formattedDateTime;
  }
  
  useEffect(() => {
    // Tạo một interval để cập nhật giờ mỗi giây
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Xóa interval khi component unmount
    return () => clearInterval(intervalId);
  }, []); // [] đảm bảo useEffect chỉ chạy một lần sau khi component mount

  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="rounded-xl w-full overflow-hidden relative">
      <div className="absolute bottom-2 left-2 text-white font-bold">
        <h2>{getCurrentDateTime()}</h2>
        <p suppressHydrationWarning>{formattedTime}</p>
      </div>
      <img
        src={`/bg_${bg}.gif`}
        alt={"Ảnh nền"}
        className="w-full h-[320px] select-none blur-xs object-cover bg-bottom"
        loading="lazy"
      />
    </div>
  );
}
