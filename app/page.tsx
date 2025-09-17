import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Hero />
      <Features />
    </div>
  );
}
