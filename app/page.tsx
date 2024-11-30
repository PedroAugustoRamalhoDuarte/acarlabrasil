import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Instructor from "@/components/Instructor";
import PricingCard from "@/components/PricingCard";
import SignUpForm from "@/components/SignUpForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0e8db]">
      <Hero />
      <Benefits />
      <Instructor />
      <PricingCard />
      <SignUpForm />
    </main>
  );
}