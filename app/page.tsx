"use client";

import Aurora from "@/components/aurora";
import Dock from "@/components/dock";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import TrueFocus from "@/components/truefoocus";

export default function Home() {
  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => alert("Home!"),
    },
    {
      icon: <VscArchive size={18} />,
      label: "Archive",
      onClick: () => alert("Archive!"),
    },
    {
      icon: <VscAccount size={18} />,
      label: "Profile",
      onClick: () => alert("Profile!"),
    },
    {
      icon: <VscSettingsGear size={18} />,
      label: "Settings",
      onClick: () => alert("Settings!"),
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
      <div className="w-full h-screen bg-zinc-950">

      </div>
    </main>
  );
}
