"use client";
import Background from "@/components/background";
import Control from "@/components/control";
import Footer from "@/components/footer";
import Note from "@/components/note";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full p-4 gap-4 items-center justify-center">
      <Background />
      <Control />
      <Note />
    </main>
  );
}
