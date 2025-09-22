import React from 'react';

const PageTitle: React.FC<{ title: string }> = ({ title }) => (
    <h1 className="text-4xl md:text-5xl font-bold text-center text-brand-teal mb-12">{title}</h1>
);

const FacilitiesPage: React.FC = () => {
    return (
        <div className="py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
                <PageTitle title="Our Facilities" />
                 <div className="bg-white p-8 rounded-lg shadow-lg border border-stone-200">
                    <p className="text-xl text-stone-700 mb-6">
                        Our horses are stabled at world-class facilities that provide a safe, healthy, and stimulating environment.
                    </p>
                    <p className="text-stone-600">
                        We are based at Fair Hill Training Center, offering a variety of training surfaces and amenities designed for the modern thoroughbred. More details and photos of our facilities will be coming soon.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FacilitiesPage;