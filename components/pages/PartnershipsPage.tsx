import React from 'react';
import { Link } from 'react-router-dom';

const PageTitle: React.FC<{ title: string }> = ({ title }) => (
    <h1 className="text-4xl md:text-5xl font-bold text-center text-brand-teal mb-12">{title}</h1>
);

const PartnershipsPage: React.FC = () => {
    return (
        <div className="py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
                <PageTitle title="Partnerships & Ownership" />
                <div className="bg-white p-8 rounded-lg shadow-lg border border-stone-200">
                    <p className="text-xl text-stone-700 mb-6">
                        Experience the thrill of racehorse ownership with Keri Brion Racing. We offer various partnership opportunities to fit your goals and budget.
                    </p>
                    <p className="text-stone-600 mb-8">
                        More information about our partnership structures, available horses, and the benefits of joining our team will be available here soon. We are committed to providing a transparent, exciting, and rewarding ownership experience.
                    </p>
                    <Link to="/contact" className="bg-brand-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all duration-300 inline-block">
                        Inquire About Ownership
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PartnershipsPage;