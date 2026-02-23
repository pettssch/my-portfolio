import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ language }) => {
  const form = useRef(); // ფორმის რეფერენსი EmailJS-ისთვის
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const translations = {
    en: {
      badge: "Get In Touch",
      heading: "Elevate your brand with Me",
      subHeading: "Have a project in mind, a question, or just want to say hello? Feel free to reach out! I'm always open to discussing.",
      name: "Your Name",
      phone: "Phone Number",
      email: "Your Email",
      subject: "Subject",
      message: "Your Message",
      button: "Appointment Now",
      sending: "Sending...",
      success: "Thank you! Message has been sent.",
      error: "Oops! Something went wrong."
    },
    ka: {
      badge: "დამიკავშირდით",
      heading: "გავაძლიეროთ თქვენი ბრენდი",
      subHeading: "გაქვთ იდეა, კითხვა თუ უბრალოდ გსურთ მოკითხვა? მომწერეთ ნებისმიერ დროს! ყოველთვის მზად ვარ ახალი პროექტების განსახილველად.",
      name: "თქვენი სახელი",
      phone: "ტელეფონის ნომერი",
      email: "თქვენი ელ-ფოსტა",
      subject: "თემა",
      message: "თქვენი შეტყობინება",
      button: "დაჯავშნე შეხვედრა",
      sending: "იგზავნება...",
      success: "მადლობა! შეტყობინება წარმატებით გაიგზავნა.",
      error: "შეცდომა! შეტყობინება ვერ გაიგზავნა."
    }
  };

  const t = translations[language || 'ka'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // შენი EmailJS კოდები
    const SERVICE_ID = "ffpoa5JOsx7L537lyaKHp";
    const TEMPLATE_ID = "oxQOXyQEmz577J7eg";
    const PUBLIC_KEY = "ffpoa5JOsx7L537lyaKHp"; // შენი მოწოდებული გასაღები

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        alert(t.success);
        form.current.reset(); // ფორმის გასუფთავება
      }, (error) => {
        alert(t.error);
        console.log(error.text);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative z-10 py-20 px-10 lg:px-20 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        
        <div className="lg:w-1/3">
          <p className="text-blue-500 text-sm font-bold uppercase tracking-[0.3em] mb-4">
            {t.badge}
          </p>
          <h2 className="text-2xl font-bold text-white mb-6 leading-tight">
            {t.heading}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {t.subHeading}
          </p>
        </div>

        <div className="lg:w-2/3 w-full bg-[#0c0e14] p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 blur-[80px]"></div>

          <form ref={form} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <input 
              name="name" 
              type="text" 
              placeholder={t.name} 
              required
              className="w-full bg-[#0a0c10] border border-gray-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-blue-500 transition-all"
              onChange={handleChange}
            />
            <input 
              name="phone" 
              type="text" 
              placeholder={t.phone} 
              className="w-full bg-[#0a0c10] border border-gray-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-blue-500 transition-all"
              onChange={handleChange}
            />
            <input 
              name="email" 
              type="email" 
              placeholder={t.email} 
              required
              className="w-full bg-[#0a0c10] border border-gray-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-blue-500 transition-all"
              onChange={handleChange}
            />
            <input 
              name="subject" 
              type="text" 
              placeholder={t.subject} 
              className="w-full bg-[#0a0c10] border border-gray-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-blue-500 transition-all"
              onChange={handleChange}
            />
            <textarea 
              name="message" 
              placeholder={t.message} 
              rows="5" 
              required
              className="md:col-span-2 w-full bg-[#0a0c10] border border-gray-800 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
              onChange={handleChange}
            ></textarea>

            <div className="md:col-span-2 pt-4">
              <button 
                type="submit" 
                disabled={isSending}
                className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#11141b] to-[#0a0c10] border border-gray-700 rounded-full text-white font-bold hover:border-blue-500 transition-all duration-300 flex items-center justify-center space-x-3 group disabled:opacity-50"
              >
                <span>{isSending ? t.sending : t.button}</span>
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;