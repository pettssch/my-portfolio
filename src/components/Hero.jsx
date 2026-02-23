import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = ({ language }) => {
  const el = useRef(null);
  const typedInstance = useRef(null); // Typed ინსტანციის შესანახად

  // თარგმანების ობიექტი
  const translations = {
    en: {
      welcome: "I'm",
      contactBtn: "Contact Me",
      roles: ['Web Developer', 'Freelancer', 'Digital Dropshipper']
    },
    ka: {
      welcome: "მე ვარ",
      contactBtn: "დამიკავშირდით",
      roles: ['ვებ დეველოპერი', 'ფრილანსერი', 'ციფრული მეწარმე']
    }
  };

  const t = translations[language || 'ka'];

  useEffect(() => {
    // თუ უკვე არსებობს ინსტანცია, ჯერ წაშალე (ენის შეცვლისას რომ არ აირიოს)
    if (typedInstance.current) {
      typedInstance.current.destroy();
    }

    typedInstance.current = new Typed(el.current, {
      strings: t.roles,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [language]); // language არის dependency - ენის შეცვლისას გადაიტვირთება ანიმაცია

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-10 lg:px-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/571202758_1376300293836210_1132346158912477273_n.jpg" 
          className="w-full h-full object-cover opacity-40" 
          alt="background" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10">
        <h1 className="text-5xl lg:text-5xl font-bold leading-tight">
          {t.welcome} <span className="text-white">Lika Gurgenashvili</span><br />
           <span ref={el} className="text-blue-500"></span>
        </h1>
        
        <button 
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="mt-10 px-8 py-4 bg-gradient-to-r from-[#11141b] to-[#0a0c10] border border-gray-700 rounded-full text-white font-bold hover:border-blue-500 transition-all duration-300 flex items-center justify-center space-x-3 group"
        >
          <span>{t.contactBtn}</span>
          <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </section>
  );
};

export default Hero;