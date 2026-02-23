import React from 'react';

const Pricing = ({ language }) => {
  // თარგმანების ობიექტი
  const translations = {
    en: {
      badge: "My Price Plan",
      heading: "Enhancing Collaboration between Remote",
      perMonth: "/Per Month",
      getStarted: "Get Started",
      plans: [
        {
          title: "Starter",
          price: "5.00",
          features: ["5 Social Media Account", "Free Platform Access", "24/7 Customer Support"],
          isFeatured: false
        },
        {
          title: "Basic",
          price: "230.00",
          features: ["5 Social Media Account", "Free Platform Access", "Marketing Platform", "24/7 Customer Support", "Life time support"],
          isFeatured: true
        },
        {
          title: "Premium",
          price: "45.00",
          features: ["5 Social Media Account", "Free Platform Access", "24/7 Customer Support"],
          isFeatured: false
        }
      ]
    },
    ka: {
      badge: "საფასო გეგმა",
      heading: "დისტანციური თანამშრომლობის გაძლიერება",
      perMonth: "/თვეში",
      getStarted: "დაწყება",
      plans: [
        {
          title: "დამწყები",
          price: "5.00",
          features: ["5 სოც. მედია ანგარიში", "უფასო პლატფორმაზე წვდომა", "24/7 მხარდაჭერა"],
          isFeatured: false
        },
        {
          title: "ბაზისური",
          price: "230.00",
          features: ["5 სოც. მედია ანგარიში", "უფასო პლატფორმაზე წვდომა", "მარკეტინგული პლატფორმა", "24/7 მხარდაჭერა", "მუდმივი მხარდაჭერა"],
          isFeatured: true
        },
        {
          title: "პრემიუმი",
          price: "45.00",
          features: ["5 სოც. მედია ანგარიში", "უფასო პლატფორმაზე წვდომა", "24/7 მხარდაჭერა"],
          isFeatured: false
        }
      ]
    }
  };

  const t = translations[language || 'ka'];

  return (
    <section id="pricing" className="relative z-10 py-20 px-10 lg:px-20 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-blue-500 text-sm font-bold uppercase tracking-[0.3em] mb-4">
          {t.badge}
        </p>
        <h2 className="text-2xl md:text-2xl font-bold text-white uppercase tracking-tighter">
          {t.heading}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {t.plans.map((plan, index) => (
          <div 
            key={index} 
            className={`p-10 rounded-3xl transition-all duration-300 group ${
              plan.isFeatured 
                ? 'bg-[#0c0e14] border-2 border-blue-600 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative scale-105 z-20' 
                : 'bg-[#0c0e14] border border-gray-800 hover:border-blue-500/30'
            }`}
          >
            <h3 className="text-gray-400 font-bold text-xl mb-4">{plan.title}</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-white text-2xl font-bold">$ {plan.price}</span>
              <span className="text-gray-500 ml-2">{t.perMonth}</span>
            </div>
            <div className="h-[1px] bg-gray-800 w-full mb-8"></div>
            
            <ul className="space-y-4 mb-10 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-400">
                  <i className="fas fa-check-circle text-blue-500 mr-3"></i> 
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold transition flex items-center justify-center space-x-2 ${
              plan.isFeatured 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30' 
                : 'border border-gray-700 text-white hover:bg-white hover:text-black'
            }`}>
              <span>{t.getStarted}</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;