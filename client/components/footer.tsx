import React from "react";
import { Button } from "./ui/button";
import { FaRegHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { ImEmbed2 } from "react-icons/im";

export default function Footer() {
  return (
    <div className="flex gap-4 w-full mt-auto justify-center px-4">
      <div className="flex gap-4">
        <Button
          className="rounded-lg font-bold duration-500"
          variant={"destructive"}
        >
          Donate <FaRegHeart className="ml-2" />
        </Button>
        <Button
          className="rounded-lg font-bold duration-500 bg-[#5BAAAB] hover:bg-[#1f5f60]"
          color="green"
        >
          Share <FaShareAlt className="ml-2" />
        </Button>
        <Button className="rounded-lg font-bold duration-500 bg-[#5BAAAB] hover:bg-[#1f5f60]">
          Embed <ImEmbed2 className="ml-2" />
        </Button>
      </div>
    </div>
  );
}
