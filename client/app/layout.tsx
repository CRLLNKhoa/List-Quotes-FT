import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AfkScreen from "@/components/afkScreen";
import ButtonAfk from "@/components/buttonAfk";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NOTE++",
  description:
    "Your project is a small note-taking system to keep track of tasks and includes relaxing music. It's a solution for organizing daily tasks efficiently while incorporating the element of entertainment, creating a positive and relaxing work environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid lg:grid-cols-5 grid-cols-1 h-screen bg-white">
          <main className="col-start-2 col-span-3 overflow-y-auto">{children}</main>
        </div>
        <ButtonAfk />
        <AfkScreen />
      </body>
    </html>
  );
}
