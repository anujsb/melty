import Features from "@/components/Features";
import { BackgroundCellAnimation } from "@/components/Hero";
import { FloatingNavDemo } from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <FloatingNavDemo />
      <BackgroundCellAnimation />
      <Features />
      <Testimonials />
    </div>
  );
}
