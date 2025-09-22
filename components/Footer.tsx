
import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string, path: string, label: string }> = ({ href, path, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-brand-teal transition-colors duration-300" aria-label={label}>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d={path} />
        </svg>
    </a>
);


const Footer: React.FC = () => {
    return (
        <footer className="bg-stone-100 border-t border-stone-200">
            <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-sm text-stone-600">
                        &copy; {new Date().getFullYear()} Keri Brion Racing. All Rights Reserved.
                        <Link to="/login" className="ml-4 text-stone-500 hover:text-brand-teal transition-colors">Admin Login</Link>
                    </div>
                    <div className="flex space-x-6">
                        <SocialIcon 
                            href="https://twitter.com/keribrion" 
                            label="Twitter"
                            path="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.34 0 11.36-6.08 11.36-11.36 0-.17 0-.34-.01-.51.78-.56 1.45-1.26 1.99-2.06z" 
                        />
                        <SocialIcon 
                            href="https://www.facebook.com/keribrionracing/" 
                            label="Facebook"
                            path="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" 
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;