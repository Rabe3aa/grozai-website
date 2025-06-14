import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiry: 'General Question',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to an API endpoint)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', company: '', inquiry: 'General Question', message: '' });
  };

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} variants={stagger}>
      <Head>
        <title>Contact GrozAI - Let's Talk AI</title>
        <meta name="description" content="Get in touch with the GrozAI team. Reach out for sales inquiries, partnership opportunities, or to request a personalized demo." />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-primary text-white py-20 md:py-28 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg sm:text-xl text-accent-gray-200 max-w-3xl mx-auto">
            Have a question, a project idea, or just want to learn more? We're here to help you navigate the future of AI.
          </p>
        </div>
      </motion.section>

      {/* Contact Grid Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left Column: Contact Info & Map */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
              <p className="text-lg text-accent-gray-700 mb-8">Fill out the form, or if you prefer, reach out to us directly through one of the channels below.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FiMapPin className="text-primary h-6 w-6 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary">Our Office</h3>
                    <p className="text-accent-gray-600">Venice Tower, Zahraa El Maadi, Cairo, Egypt 4064145</p>
                  </div>
                </div>
                 <div className="flex items-start">
                  <FiMail className="text-primary h-6 w-6 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary">Email Us</h3>
                    <a href="mailto:info@grozai.net" className="text-accent-gray-600 hover:text-primary transition-colors">info@grozai.net</a>
                  </div>
                </div>
                 <div className="flex items-start">
                  <FiPhone className="text-primary h-6 w-6 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary">Call Us</h3>
                    <a href="tel:+201097459765" className="text-accent-gray-600 hover:text-primary transition-colors">+201097459765</a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="aspect-w-16 aspect-h-9 bg-accent-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444.0354470478757!2d31.312485065301473!3d29.963363379181896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458397619ec6895%3A0x1763db598e7c73b2!2z2KjYsdisINmB2YrZhtmK2LPZitinINiy2YfYsdin2KEg2KfZhNmF2LnYp9iv2Yk!5e1!3m2!1sen!2seg!4v1749854247563!5m2!1sen!2seg"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GrozAI Office Location Map"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div variants={fadeInUp} className="bg-accent-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-accent-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-accent-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-accent-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-accent-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-accent-gray-700 mb-1">Company</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2 border border-accent-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                </div>
                 <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-accent-gray-700 mb-1">Inquiry Type</label>
                  <select id="inquiry" name="inquiry" value={formData.inquiry} onChange={handleChange} className="w-full px-4 py-2 border border-accent-gray-300 rounded-md focus:ring-primary focus:border-primary bg-white">
                    <option>General Question</option>
                    <option>Sales Inquiry</option>
                    <option>Request a Demo</option>
                    <option>Partnership</option>
                    <option>Press</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-accent-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border border-accent-gray-300 rounded-md focus:ring-primary focus:border-primary"></textarea>
                </div>
                <div id="request-demo">
                  <button type="submit" className="w-full bg-primary text-white font-semibold px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                    Send Message <FiSend className="ml-2" />
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </motion.section>

    </motion.div>
  );
}
