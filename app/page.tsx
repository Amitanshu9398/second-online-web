"use client";

import Aurora from "@/components/aurora";
import { VscHome, VscAccount } from "react-icons/vsc";
import TrueFocus from "@/components/truefoocus";
import Dock from "@/components/dock";
import { LiaConnectdevelop } from "react-icons/lia";
import { GoProject } from "react-icons/go";
import SpotlightCard from "@/components/spotlightcard";
import FlowingMenu from "@/components/flowingmenu";

export default function Home() {
  const demoItems = [
    {
      link: "#cards",
      text: "AMIT",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#",
      text: "Anshu",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "Monterey",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "Sequoia",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];

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
          amplitude={0.2}
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
      <div className="w-full h-[200vh] bg-zinc-950 ">
        <div id="cards" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-[9] lg:m-[16] gap-[4] m-[4]">
          <SpotlightCard
            className="relative"
            spotlightColor="rgba(58, 41, 255, 0.3)"
          >
            <div className="text-ellipsis overflow-hidden cursor-default line-clamp-3">
              first content page might change later just wanna see the changes
              how to see the see the thet tehete ahad athe shagsggsgs agshhhssa
              nasjaaj ahjjjjhah hjjjhahjajj nhjahjsdhja
              ajshajdhjahdjsahjjaasjasjjajs asakjjjaj ajshjahsja yy..........
            </div>
            <button
              className="absolute hover:font-bold border-1 rounded-full bottom-[2vh] border-[rgba(0,_229,_255,_0.6)] text-white cursor-pointer p-[1vh]"
              title="Click"
            >
              Click Me!
            </button>
          </SpotlightCard>
          <SpotlightCard
            className="relative"
            spotlightColor="rgba(58, 41, 255, 0.3)"
          >
            <div className="text-ellipsis overflow-hidden cursor-default line-clamp-3">
              first content page might change later just wanna see the changes
              how to see the see the thet tehete ahad athe shagsggsgs agshhhssa
              nasjaaj ahjjjjhah hjjjhahjajj nhjahjsdhja
              ajshajdhjahdjsahjjaasjasjjajs asakjjjaj ajshjahsja yy..........
            </div>
            <button
              className="absolute hover:font-bold border-1 rounded-full bottom-[2vh] border-[rgba(0,_229,_255,_0.6)] text-white cursor-pointer p-[1vh]"
              title="Click"
            >
              Click Me!
            </button>
          </SpotlightCard>
          <SpotlightCard
            className="relative"
            spotlightColor="rgba(58, 41, 255, 0.3)"
          >
            <div className="text-ellipsis overflow-hidden cursor-default line-clamp-3">
              first content page might change later just wanna see the changes
              how to see the see the thet tehete ahad athe shagsggsgs agshhhssa
              nasjaaj ahjjjjhah hjjjhahjajj nhjahjsdhja
              ajshajdhjahdjsahjjaasjasjjajs asakjjjaj ajshjahsja yy..........
            </div>
            <button
              className="absolute hover:font-bold border-1 rounded-full bottom-[2vh] border-[rgba(0,_229,_255,_0.6)] text-white cursor-pointer p-[1vh]"
              title="Click"
            >
              Click Me!
            </button>
          </SpotlightCard>
          <SpotlightCard
            className="relative"
            spotlightColor="rgba(58, 41, 255, 0.3)"
          >
            <div className="text-ellipsis overflow-hidden cursor-default line-clamp-3">
              first content page might change later just wanna see the changes
              how to see the see the thet tehete ahad athe shagsggsgs agshhhssa
              nasjaaj ahjjjjhah hjjjhahjajj nhjahjsdhja
              ajshajdhjahdjsahjjaasjasjjajs asakjjjaj ajshjahsja yy..........
            </div>
            <button
              className="absolute hover:font-bold border-1 rounded-full bottom-[2vh] border-[rgba(0,_229,_255,_0.6)] text-white cursor-pointer p-[1vh]"
              title="Click"
            >
              Click Me!
            </button>
          </SpotlightCard>
          <SpotlightCard
            className="relative"
            spotlightColor="rgba(58, 41, 255, 0.3)"
          >
            <div className="text-ellipsis overflow-hidden cursor-default line-clamp-3">
              first content page might change later just wanna see the changes
              how to see the see the thet tehete ahad athe shagsggsgs agshhhssa
              nasjaaj ahjjjjhah hjjjhahjajj nhjahjsdhja
              ajshajdhjahdjsahjjaasjasjjajs asakjjjaj ajshjahsja yy..........
            </div>
            <button
              className="absolute hover:font-bold border-1 rounded-full bottom-[2vh] border-[rgba(0,_229,_255,_0.6)] text-white cursor-pointer p-[1vh]"
              title="Click"
            >
              Click Me!
            </button>
          </SpotlightCard>
        </div>
        <div style={{ height: "250px", position: "relative" }}>
          <FlowingMenu items={demoItems} />
        </div>
      </div>
    </main>
  );
}
