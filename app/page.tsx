import Aurora from "@/components/aurora";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-full asolute">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
    </main>
  );
}
