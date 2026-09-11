import CopyRight from "./components/CopyRight";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import { Suspense, useEffect, useState } from "react";
import type { ITechnology } from "./type";

const fetchData = async () => {
  const response = await fetch("/TechnologyData.json");
  const data = await response.json();
  return data;
};

function App() {
  const [technologiesData, setTechnologiesData] = useState<ITechnology[]>([]);

  useEffect(() => {
    fetchData().then(setTechnologiesData);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="text-center text-lg">Loading...</div>}>
        <Technologies technologies={technologiesData} />
      </Suspense>
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
