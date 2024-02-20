"use client";
import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import { Slider } from "@/components/ui/slider";
import { useStore } from "./background";

export default function Control() {
  const soundUrl = "/sound.mp3";
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState<any>(1);
  const [textHover, setTextHover] = useState("Loading mp3..");
  const [play, { stop }] = useSound(soundUrl, {
    loop: true,
    volume: volume,
  });
  const { change } = useStore()
  const handlePlay = () => {
    play();
    setIsPlaying(true);
    setTextHover("Played...");
  };
  const handleStop = () => {
    stop();
    setIsPlaying(false);
    setTextHover("Paused...");
  };

  useEffect(() => {
    setIsPlaying(false)
    setTextHover("Press to Play...")
  }, []);

  return (
    <div className="bg-primary w-full p-4 rounded-xl flex gap-4 items-center flex-wrap justify-between">
      <button
        className="hover:brightness-90 duration-300 disabled:brightness-75"
        onClick={handlePlay}
        disabled={isPlaying}
        onMouseEnter={() => setTextHover("Press to Play...")}
      >
        <img
          className="w-8 h-8"
          src="/play.svg"
          alt=""
        />
      </button>
      <button
        className="hover:brightness-90 duration-300"
        onClick={handleStop}
        onMouseEnter={() => setTextHover("Press to Pause...")}
      >
        <img
          className="w-8 h-8"
          src="/pause.svg"
          alt=""
        />
      </button>
      <button
        onClick={change}
        className="hover:brightness-90 duration-300"
        onMouseEnter={() => setTextHover("Press to Shuffle GIF...")}
      >
        <img
          className="w-8 h-8"
          src="/refresh.svg"
          alt=""
        />
      </button>
      <button
        className="hover:brightness-90 duration-300"
        onClick={handleStop}
        onMouseEnter={() => setTextHover("Press to add Rain sound layer...")}
      >
        <img
          className="w-8 h-8"
          src="/rain.svg"
          alt=""
        />
      </button>
      <h2 className="font-bold text-sm text-white hidden lg:block">{textHover}</h2>
      <Slider
        defaultValue={[1]}
        min={0}
        onValueChange={(e) => setVolume(e)}
        max={1}
        step={0.1}
        className="lg:w-[200px] mt-2 lg:mt-0 ml-auto cursor-pointer"
      />
    </div>
  );
}
