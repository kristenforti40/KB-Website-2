import React from 'react';

const ContactInfoIcon: React.FC<{ path: string }> = ({ path }) => (
    <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path}></path>
    </svg>
);

const SocialIcon: React.FC<{ href: string, path: string, label: string }> = ({ href, path, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-brand-teal transition-colors duration-300" aria-label={label}>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d={path} />
        </svg>
    </a>
);


const keyContacts = [
    {
        name: 'Keri Brion',
        role: 'Head Trainer',
        phone: '123-456-7890',
        email: 'keri@keribrionracing.com',
        twitter: 'https://twitter.com/keribrion',
    },
    {
        name: 'John Doe',
        role: 'Racing Manager',
        phone: '098-765-4321',
        email: 'john@keribrionracing.com',
        facebook: 'https://facebook.com/keribrionracing',
    }
];

const ContactPage: React.FC = () => {
    return (
        <div>
            <div className="bg-gradient-to-b from-brand-teal/70 to-brand-teal/60 backdrop-blur-sm py-10 shadow-md">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-white drop-shadow-lg">Get In Touch</h1>
                </div>
            </div>
        
            <div className="py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column: Info */}
                        <div className="space-y-10">
                            {/* Address */}
                            <div>
                                <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                                    <ContactInfoIcon path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    Training Barn Address
                                </h2>
                                <div className="text-stone-600 text-lg pl-8">
                                    <p>Fair Hill Training Center</p>
                                    <p>720 Gallaher Rd</p>
                                    <p>Elkton, MD 21921</p>
                                </div>
                            </div>

                            {/* Contacts */}
                            <div>
                                <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
                                    <ContactInfoIcon path="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.176-5.97M15 21h6m-6-1a6 6 0 00-6-6m6 6v-1m0 1a6 6 0 00-6-6" />
                                    Key Contacts
                                </h2>
                                <div className="space-y-6 pl-8">
                                    {keyContacts.map(contact => (
                                        <div key={contact.name}>
                                            <h3 className="text-xl font-semibold text-stone-800">{contact.name}</h3>
                                            <p className="text-brand-teal font-medium mb-2">{contact.role}</p>
                                            <div className="flex items-center gap-3 text-stone-600 mb-2">
                                                <ContactInfoIcon path="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                <a href={`tel:${contact.phone}`} className="hover:text-brand-teal">{contact.phone}</a>
                                            </div>
                                            <div className="flex items-center gap-3 text-stone-600 mb-2">
                                                <ContactInfoIcon path="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                <a href={`mailto:${contact.email}`} className="hover:text-brand-teal">{contact.email}</a>
                                            </div>
                                            <div className="flex items-center gap-4 mt-3">
                                                {contact.twitter && <SocialIcon href={contact.twitter} label="Twitter" path="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.34 0 11.36-6.08 11.36-11.36 0-.17 0-.34-.01-.51.78-.56 1.45-1.26 1.99-2.06z" />}
                                                {contact.facebook && <SocialIcon href={contact.facebook} label="Facebook" path="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                        {/* Right Column: Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg border border-stone-200">
                            <p className="text-center text-stone-600 mb-8 text-lg">
                                We'd love to hear from you. Whether you're interested in ownership, have a horse for our program, or just want to learn more, please send us a message.
                            </p>
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-stone-600 mb-1">Name</label>
                                        <input type="text" id="name" className="w-full bg-stone-50 border border-stone-300 rounded-md py-2 px-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-stone-600 mb-1">Email</label>
                                        <input type="email" id="email" className="w-full bg-stone-50 border border-stone-300 rounded-md py-2 px-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal" />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-stone-600 mb-1">Message</label>
                                    <textarea id="message" rows={5} className="w-full bg-stone-50 border border-stone-300 rounded-md py-2 px-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal"></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="bg-brand-teal text-white font-bold py-3 px-10 rounded-lg hover:bg-opacity-80 transition-all duration-300">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;