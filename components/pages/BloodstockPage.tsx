import React from 'react';

const PageTitle: React.FC<{ title: string }> = ({ title }) => (
    <h1 className="text-4xl md:text-5xl font-bold text-center text-brand-teal mb-12">{title}</h1>
);

const BloodstockPage: React.FC = () => {
    return (
        <div className="py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
                <PageTitle title="Bloodstock Services" />
                 <div className="bg-white p-8 rounded-lg shadow-lg border border-stone-200">
                    <p className="text-xl text-stone-700 mb-6">
                        Finding the next champion starts with a keen eye for talent and a deep understanding of pedigrees.
                    </p>
                    <p className="text-stone-600">
                        Our bloodstock services include private purchases, auction representation, and mating consultations. Detailed information about our approach to selecting top-tier racing prospects will be available here shortly.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BloodstockPage;