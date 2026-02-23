import React from 'react';

const Portfolio = ({ language }) => {
  // თარგმანების ობიექტი
  const translations = {
    en: {
      headingPart1: "Creative Portfolio",
      headingPart2: "Exceptional",
      subHeading: "My projects combine creative vision with technical precision. Each work is thoughtfully crafted down to the finest details and designed to deliver a distinctive, intuitive, and effective user experience.",
      viewProject: "View Project",
      projects: [
        {
          id: 1,
          title: "Real Estate Platform",
          desc: "Modern Real Estate Platform built with Laravel & PHP.",
          img: "/assets/images/project1.jpg" // შეცვალე შენი ფოტოს სახელით
        },
        {
          id: 2,
          title: "Real Estate Platform",
          desc: "Modern Real Estate Platform for agentsbuilt with Laravel & PHP.",
          img: "/assets/images/project2.jpg" // შეცვალე შენი ფოტოს სახელით
        }
      ]
    },
    ka: {
      headingPart1: "შემოქმედებითი პორტფოლიო",
      headingPart2: "შედევრად",
      subHeading: "ჩემი პროექტები აერთიანებს კრეატიულ ხედვასა და ტექნიკურ სიზუსტეს. თითოეული ნამუშევარი გააზრებულია დეტალების დონეზე და შექმნილია იმისთვის, რომ მომხმარებელს შესთავაზოს გამორჩეული, ინტუიციური და ეფექტური გამოცდილება.",
      viewProject: "პროექტის ნახვა",
      projects: [
        {
          id: 1,
          title: "უძრავი ქონების პლატფორმა",
          desc: "თანამედროვე უძრავი ქონების პლატფორმა Laravel& Php-ზე.",
          img: "/assets/images/project1.jpg"
        },
        {
          id: 2,
          title: "უძრავი ქონების პლატფორმა",
          desc: "თანამედროვე უძრავი ქონების პლატფორმა აგენტებისთვის Laravel& Php-ზე.",
          img: "/assets/images/project2.jpg"
        }
      ]
    }
  };

  const t = translations[language || 'ka'];

  return (
    <section id="portfolio" className="relative z-10 py-20 px-10 lg:px-20 bg-black">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-3xl font-bold text-white mb-6 uppercase tracking-tighter">
          {t.headingPart1} <br /> <span className="text-blue-500">{t.headingPart2}</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
          {t.subHeading}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {t.projects.map((project) => (
          <div key={project.id} className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-[#0c0e14] transition-all duration-500 hover:border-blue-500/50">
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <a href="#" className="text-blue-400 font-bold flex items-center space-x-2 hover:text-white transition">
                <span>{t.viewProject}</span>
                <i className="fas fa-external-link-alt text-sm"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;