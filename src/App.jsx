import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

function App() {
  // 1. ყველა State უნდა იყოს ფუნქციის შიგნით
  const [activeSection, setActiveSection] = useState("home");
  const [language, setLanguage] = useState('ka'); 

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "portfolio", "clients", "pricing", "contact"];
      const scrollPosition = window.scrollY + 300;

      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white flex min-h-screen font-sans">
      {/* 2. აქ აუცილებელია language და setLanguage-ის გადაწოდება */}
      <Sidebar 
        activeSection={activeSection} 
        language={language} 
        setLanguage={setLanguage} 
      />
      
      <main className="flex-1">
        {/* თითოეულ სექციას თუ დასჭირდება ენა, მათაც უნდა გადააწოდო language={language} */}
        <Hero language={language} />
        <Features language={language} />
        <Portfolio language={language} />
        <Pricing language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
}

export default App;