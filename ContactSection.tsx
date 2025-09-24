import React from 'react';
import Section from '../shared/Section';

const ContactSection: React.FC = () => {
  return (
    <Section id="contact" className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-300">Get In Touch</h2>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl">
        I'm currently seeking employment opportunities and am eager to collaborate. Feel free to reach out if you have a project in mind or just want to connect!
      </p>
      <a
        href="mailto:jackcjohnson7@gmail.com"
        className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:scale-105 transform transition-transform duration-300"
      >
        Say Hello
      </a>
      <div className="flex justify-center mt-12">
        <SocialIcon href="https://www.linkedin.com/in/jack-johnson-35ba27266/" label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
        </SocialIcon>
      </div>
    </Section>
  );
};

const SocialIcon: React.FC<{ href: string; label: string; children: React.ReactNode }> = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
  >
    {children}
  </a>
);

export default ContactSection;