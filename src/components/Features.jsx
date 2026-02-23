import React from 'react';

const Features = ({ language }) => {
  // თარგმანების ობიექტი
  const translations = {
    en: {
      heading: "My Features",
      items: [
        { num: '01', title: 'Web Development', desc: 'I build high-performance, responsive websites that drive business growth and ensure a seamless user experience across all digital devices.' },
        { num: '02', title: 'Freelancer', desc: 'Innovative design and user-centric experience. I help brands discover their unique visual language and create interfaces that forge an emotional connection with users.' },
        { num: '03', title: 'Digital Dropshipping', desc: 'Innovative digital commerce strategies: maximizing visibility and converting targeted traffic into sales across global platforms.' },
      ]
    },
    ka: {
      heading: "ჩემი შესაძლებლობები",
      items: [
        { num: '01', title: 'ვებ დეველოპმენტი', desc: 'ვქმნი მაღალი წარმადობის და რესპონსიულ ვებ-გვერდებს, რომლებიც უზრუნველყოფენ თქვენი ბიზნესის ციფრულ ზრდას და მომხმარებლის შეუფერხებელ გამოცდილებას ნებისმიერ მოწყობილობაზე.' },
        { num: '02', title: 'ფრილანსერი', desc: 'ინოვაციური დიზაინი და მომხმარებელზე მორგებული გამოცდილება. ვეხმარები ბრენდებს გამორჩეული ვიზუალური ენის პოვნაში და ვქმნი ინტერფეისებს, რომლებიც მომხმარებელთან ემოციურ კავშირს ამყარებს.' },
        { num: '03', title: 'ციფრული დროფშიპინგი', desc: 'ციფრული კომერციის ინოვაციური სტრატეგიები: ხილვადობის მაქსიმიზაცია და მიზნობრივი ტრაფიკის კონვერტაცია გაყიდვებად გლობალურ პლატფორმებზე.' },
      ]
    }
  };

  const t = translations[language || 'ka'];

  return (
    <section id="features" className="py-20 px-10 lg:px-20 bg-black/50">
      <div className="max-w-7xl mx-auto">
        {/* სათაური ბრენდირებული ლურჯი ხაზით */}
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-blue-600 pl-6 uppercase tracking-tight">
          {t.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.items.map((f) => (
            <div 
              key={f.num} 
              className="group p-10 bg-[#0c0e14] border border-gray-800 rounded-2xl transition-all duration-300 hover:border-blue-500/50 hover:bg-[#11141b]"
            >
              <span className="text-blue-500 font-bold text-xl block mb-4">{f.num}.</span>
              <h3 className="text-1xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;