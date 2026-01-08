import Navbar from "./components/Navbar";
import TrendCard from "./components/TrendCard";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import Temp from "./components/Temp";
import Footer from "./components/Footer";


function App() {
  

  return (
    <>
       <Navbar/>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 px-6">
       <Hero />
       <Temp />
       <Footer />
        <div className="max-w-3xl mx-auto"></div>
        <Routes>
          <Route path="/Hero" element={<Hero/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
