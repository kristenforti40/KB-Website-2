import React from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../../context/ContentContext';

const PartnershipsPage: React.FC = () => {
    const { partnershipsPageContent } = useContent();

    if (!partnershipsPageContent) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-[40vh] flex items-center justify-center text-center"
                style={{ backgroundImage: `url('${partnershipsPageContent.heroImageUrl}')` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 p-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl leading-tight">
                        Partnerships & Ownership
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <div className="py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="bg-white p-8 rounded-lg shadow-lg border border-stone-200 text-center mb-16">
                        <div className="text-xl text-stone-700 space-y-4">
                            {partnershipsPageContent.introText.split('\n').map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    </div>
                    
                    {/* New "Why Join" Section */}
                    <div className="bg-white p-8 rounded-lg shadow-lg border border-stone-200 mb-16">
                        <h2 className="text-3xl font-bold text-brand-teal mb-6 text-center">The Unmatched Thrill of Ownership</h2>
                        <div className="text-lg text-stone-700 leading-relaxed space-y-4">
                            {partnershipsPageContent.thrillText.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                        </div>
                    </div>

                    {/* New Photo Gallery Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-brand-teal mb-10">Ownership Moments</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {partnershipsPageContent.galleryImages.map((src, index) => (
                                <div key={index} className="overflow-hidden rounded-lg shadow-lg group border-4 border-brand-teal">
                                    <img 
                                        src={src} 
                                        alt={`Ownership moment ${index + 1}`} 
                                        className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center">
                         <Link to="/contact" className="bg-brand-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all duration-300 inline-block transform hover:scale-105">
                            Inquire About Ownership
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnershipsPage;