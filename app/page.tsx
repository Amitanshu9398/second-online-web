"use client";

import Aurora from "@/components/aurora";
import { VscHome, VscAccount } from "react-icons/vsc";
import TrueFocus from "@/components/truefoocus";
import Dock from "@/components/dock";
import { LiaConnectdevelop } from "react-icons/lia";
import { GoProject } from "react-icons/go";
import SpotlightCard from "@/components/spotlightcard";

export default function Home() {
  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => alert("Home!"),
    },
    {
      icon: <VscAccount size={18} />,
      label: "Profile",
      onClick: () => alert("Profile!"),
    },
    {
      icon: <GoProject size={18} />,
      label: "Projects",
      onClick: () => alert("Settings!"),
    },
    {
      icon: <LiaConnectdevelop size={18} />,
      label: "Connect",
      onClick: () => alert("Archive!"),
    },
  ];
  return (
    <main className="overflow-hidden">
      <nav className="fixed z-50 bottom-[-95] left-1/2 transform -translate-x-1/2 overflow-visible max-w-full">
        <Dock
          className="relative btootm-0 "
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </nav>
      <div className="h-screen w-full flex items-center justify-center">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={0.8}
          speed={0.5}
        />
        <div className="absolute z-10 w-[90%] sm:w-[80%] md:w-[60%] flex justify-center items-center text-center">
          <TrueFocus
            sentence="Outgrow your past self. That’s the only rivalry that matters."
            manualMode={false}
            blurAmount={6}
            borderColor="blue"
            animationDuration={1}
            pauseBetweenAnimations={0.1}
          />
        </div>
      </div>
      <div className="w-full h-screen bg-zinc-950 ">
        <div className="lg:m-[4vh] flex lg:gap-8 sm:gap-1 sm:m-[1vh]">
          <SpotlightCard
            className="w-[30%] h-[20vh] sm:h-[40vh]"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            Content goes here
            <button className="border-1 rounded-full bottom-0 border-[rgba(0,_229,_255,_0.6)] text-white cursor-pointer p-[1vh]">
              Click Me!
            </button>
          </SpotlightCard>
          <SpotlightCard
            className="w-[35%] h-[20vh] sm:h-[30vh]"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            Content goes here
            <button className="border-1 rounded-full bottom-0 border-[rgba(0,_229,_255,_0.6)] text-white cursor-pointer p-[1vh]">
              Click Me!
            </button>
          </SpotlightCard>
          <SpotlightCard
            className="w-[35%] h-[20vh] sm:h-[45vh]"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            Content goes here
            <button className="border-1 rounded-full bottom-0 border-[rgba(0,_229,_255,_0.6)] text-white cursor-pointer p-[1vh]">
              Click Me!
            </button>
          </SpotlightCard>
          <SpotlightCard
            className="w-[35%] h-[20vh] sm:h-[36vh]"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            Content goes here
            <button className="border-1 rounded-full bottom-0 border-[rgba(0,_229,_255,_0.6)] text-white cursor-pointer p-[1vh]">
              Click Me!
            </button>
          </SpotlightCard>
        </div>
      </div>
    </main>
  );
}
