import React from 'react';
import AnimatedSection from './AnimatedSection';

// Social Icon Components
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>;
const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const GitHubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="bg-black/20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
        Get In Touch
      </h2>
      <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-300 text-lg mb-8 text-center">
          I'm currently available for freelance projects and full-time opportunities. If you have a project in mind, want to collaborate, or just want to say hi, feel free to reach out using the form below!
        </p>
        
        <form 
          action="https://formspree.io/f/mnngllyg" 
          method="POST" 
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              required 
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-cyan-500 focus:border-cyan-500 transition" 
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-cyan-500 focus:border-cyan-500 transition" 
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea 
              name="message" 
              id="message" 
              rows={4} 
              required 
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-cyan-500 focus:border-cyan-500 transition" 
              placeholder="Your message..."
            ></textarea>
          </div>
          <div className="text-center">
            <button 
              type="submit" 
              className="inline-block bg-cyan-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="flex justify-center space-x-6 mt-12">
          <a href="#" aria-label="GitHub profile" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"><GitHubIcon /></a>
          <a href="#" aria-label="LinkedIn profile" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"><LinkedInIcon /></a>
          <a href="mailto:sakshamsingh.gj14@gmail.com" aria-label="Email Saksham" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"><MailIcon /></a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;