import Footer from "./components/Footer";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technologies"
import { useEffect, useState } from "react"

const fetchData = async () => {
  const response = await fetch('/TechnologyData.json');
  const data = await response.json();
  return data;
};

function App() {
  const [technologiesData, setTechnologiesData] = useState<any[]>([])

  useEffect(() => {
    fetchData().then(setTechnologiesData)
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />
      <Technologies technologies={technologiesData} />
      <Footer/>
    </div>
  )
}

export default App
