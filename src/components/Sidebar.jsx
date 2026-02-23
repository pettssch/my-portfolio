import React from 'react';

const Sidebar = ({ activeSection, language, setLanguage }) => {
  const translations = {
    en: {
      home: 'Home',
      features: 'Features',
      portfolio: 'Portfolio',
      pricing: 'Pricing',
      contact: 'Contact',
      findMe: 'Find With Me'
    },
    ka: {
      home: 'მთავარი',
      features: 'შესაძლებლობები',
      portfolio: 'პორტფოლიო',
      pricing: 'ფასები',
      contact: 'კონტაქტი',
      findMe: 'იპოვე ჩემთან'
    }
  };

  const t = translations[language || 'en'];

  const menuItems = [
    { id: 'home', icon: 'fas fa-home', label: t.home },
    { id: 'features', icon: 'fas fa-th-large', label: t.features },
    { id: 'portfolio', icon: 'fas fa-briefcase', label: t.portfolio },
    { id: 'pricing', icon: 'fas fa-wallet', label: t.pricing },
    { id: 'contact', icon: 'fas fa-tag', label: t.contact },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="w-72 bg-[#0a0c10] border-r border-gray-800 flex flex-col py-10 px-4 hidden lg:flex h-screen sticky top-0">
      
      {/* პროფილის ფოტო */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-32 rounded-full border-4 border-gray-800 overflow-hidden shadow-xl">
          <img src="/images/571202758_1376300293836210_1132346158912477273_n.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* ენის გადამრთველი - ახლა ფოტოს ქვემოთაა */}
      <div className="flex justify-center space-x-2 mb-10">
        <button 
          onClick={() => setLanguage('ka')}
          className={`px-3 py-1 text-[10px] font-bold rounded border transition-all ${language === 'ka' ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-800 text-gray-500 hover:border-gray-600'}`}
        >
          KA
        </button>
        <button 
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-[10px] font-bold rounded border transition-all ${language === 'en' ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-800 text-gray-500 hover:border-gray-600'}`}
        >
          EN
        </button>
      </div>

      <nav className="w-full flex-grow">
        <ul className="flex flex-col items-center space-y-1 w-full">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group w-full max-w-[220px] flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all ${
                activeSection === item.id ? 'text-blue-500 bg-[#11141b]' : 'text-gray-400 hover:text-white hover:bg-[#11141b]'
              }`}
            >
              <i className={`${item.icon} w-5 text-center ${activeSection === item.id ? 'text-blue-500' : 'group-hover:text-blue-500'}`}></i>
              <span className="text-[13px] font-semibold uppercase tracking-wider">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-800 flex flex-col items-center w-full">
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-4">{t.findMe}</p>
        <div className="flex space-x-3">
          {['facebook-f', 'linkedin-in', 'twitter'].map((icon) => (
            <a key={icon} href="#" className="w-10 h-10 bg-[#11141b] flex items-center justify-center rounded-lg hover:bg-blue-600 transition border border-gray-800 group">
              <i className={`fab fa-${icon} text-sm text-gray-400 group-hover:text-white`}></i>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;