import Aurora from "@/components/aurora";
import TrueFocus from "@/components/truefoocus";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-full relative items-center flex justify-center ">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <div className="absolute flex justify-center w-200 items-center z-10">
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
      <div className="relative"></div>
    </main>
  );
}
