import React from "react";
import Footer from "./footer";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { FaCheck } from "react-icons/fa";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Note() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="h-2 bg-black/10 hover:bg-black duration-500 cursor-pointer rounded-full w-[200px]"></div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-3xl">
          <div className="p-4 h-[85vh] flex pb-4 flex-col justify-between gap-4">
            <div className="flex flex-col flex-1 overflow-y-auto gap-2">
              <div className="p-4 bg-black rounded-xl flex justify-between items-center gap-1">
                <p className="text-white flex-1 text-sm font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  obcaecati amet quisquam repellat.
                </p>
                <Button
                  className="bg-white rounded-full text-black hover:text-white duration-500 ml-auto"
                  size={"icon"}
                >
                  <FaCheck className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-4 bg-black rounded-xl flex justify-between items-center gap-1">
                <p className="text-white flex-1 text-sm font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  obcaecati amet quisquam repellat.
                </p>
                <Button
                  className="bg-white rounded-full text-black hover:text-white duration-500 ml-auto"
                  size={"icon"}
                >
                  <FaCheck className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-4 bg-black rounded-xl flex justify-between items-center gap-1">
                <p className="text-white flex-1 text-sm font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  obcaecati amet quisquam repellat.
                </p>
                <Button
                  className="bg-white rounded-full text-black hover:text-white duration-500 ml-auto"
                  size={"icon"}
                >
                  <FaCheck className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-4 bg-black rounded-xl flex justify-between items-center gap-1">
                <p className="text-white flex-1 text-sm font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  obcaecati amet quisquam repellat.
                </p>
                <Button
                  className="bg-white rounded-full text-black hover:text-white duration-500 ml-auto"
                  size={"icon"}
                >
                  <FaCheck className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-4 bg-black rounded-xl flex justify-between items-center gap-1">
                <p className="text-white flex-1 text-sm font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  obcaecati amet quisquam repellat.
                </p>
                <Button
                  className="bg-white rounded-full text-black hover:text-white duration-500 ml-auto"
                  size={"icon"}
                >
                  <FaCheck className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-4 bg-black rounded-xl flex justify-between items-center gap-1">
                <p className="text-white flex-1 text-sm font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  obcaecati amet quisquam repellat.
                </p>
                <Button
                  className="bg-white rounded-full text-black hover:text-white duration-500 ml-auto"
                  size={"icon"}
                >
                  <FaCheck className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-4 bg-black rounded-xl flex justify-between items-center gap-1">
                <p className="text-white flex-1 text-sm font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  obcaecati amet quisquam repellat.
                </p>
                <Button
                  className="bg-white rounded-full text-black hover:text-white duration-500 ml-auto"
                  size={"icon"}
                >
                  <FaCheck className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-4 bg-black rounded-xl flex justify-between items-center gap-1">
                <p className="text-white flex-1 text-sm font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  obcaecati amet quisquam repellat.
                </p>
                <Button
                  className="bg-white rounded-full text-black hover:text-white duration-500 ml-auto"
                  size={"icon"}
                >
                  <FaCheck className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-4 bg-black rounded-xl flex justify-between items-center gap-1">
                <p className="text-white flex-1 text-sm font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  obcaecati amet quisquam repellat.
                </p>
                <Button
                  className="bg-white rounded-full text-black hover:text-white duration-500 ml-auto"
                  size={"icon"}
                >
                  <FaCheck className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="Type task..."
              />
              <Button className="font-bold rounded-lg">Create</Button>
            </div>
            <Footer />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
