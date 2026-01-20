import { HeroSection } from "./sections/hero/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans ">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        {/* <ReactQueryProvider> */}
        <HeroSection />
        {/* </ReactQueryProvider> */}
      </main>
    </div>
  );
}
