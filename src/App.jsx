import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import BottomCTA from "./components/BottomCTA";
import Footer from "./components/Footer";

const Features = lazy(() => import("./components/Features"));
const HowItWorks = lazy(() => import("./components/HowItWorks"));

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      <Navigation />
      <main className="relative">
        <Hero />
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Features />
          <HowItWorks />
        </Suspense>
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
