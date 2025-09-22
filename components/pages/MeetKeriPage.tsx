import React from 'react';

const PageTitle: React.FC<{ title: string }> = ({ title }) => (
    <div className="text-center mb-12 md:mb-16">
        <div className="flex items-center justify-center gap-5 md:gap-8">
            <div className="w-28 h-0.5 bg-brand-teal"></div>
            <h1 className="text-[3rem] md:text-[4rem] font-serif font-bold text-brand-teal whitespace-nowrap drop-shadow-md">
                {title}
            </h1>
            <div className="w-28 h-0.5 bg-brand-teal"></div>
        </div>
    </div>
);
// FIX: Removed a stray URL that was causing a syntax error and used it for the previously empty gallery image src.
const MeetKeriPage: React.FC = () => {
    const galleryImages = [
        { src: "https://i.postimg.cc/FsqfSS2Z/Two-kb.jpg", alt: "Gallery image 1", rotation: "-rotate-2" },
        { src: "https://i.postimg.cc/5ysCTkKd/3-Kb.png", alt: "Gallery image 3", rotation: "-rotate-1" },
        { src: "https://i.postimg.cc/2j1rZtms/KB-met-2.jpg", alt: "Gallery image 2", rotation: "rotate-3" },
    ];

    return (
        <div className="py-12 md:py-16 overflow-x-hidden">
            <div className="container mx-auto px-6 sm:px-8 lg:px-10">
                <PageTitle title="Meet Keri" />

                <div className="bg-white/70 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl border border-stone-200/50 mb-16 md:mb-24">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <div className="bg-stone-100 p-2 rounded-md shadow-lg">
                                <div className="bg-white p-2 rounded-sm">
                                    <img 
                                        src="https://i.postimg.cc/gJvySsPm/Main-kb.jpg" 
                                        alt="Keri Brion" 
                                        className="rounded-sm object-cover w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl font-semibold text-stone-900 mb-4">A Lifelong Passion for Horses</h2>
                            <div className="text-stone-700 space-y-4 text-lg">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Her dedication and unique approach have led to remarkable success on the track.
                                </p>
                                <p>
                                    Keri believes in a hands-on approach, building a strong foundation of trust and communication with each horse in her care. This philosophy is the cornerstone of Keri Brion Racing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 place-items-center">
                    {galleryImages.map((image, index) => (
                        <div 
                            key={index}
                            className={`
                                transition-transform duration-300 ease-in-out
                                hover:scale-105
                                transform ${image.rotation}
                            `}
                        >
                            <div className="bg-brand-teal p-1 rounded-md shadow-2xl">
                                <div className="bg-white p-2 rounded-sm">
                                    <img src={image.src} alt={image.alt} className="w-full max-w-xs sm:max-w-sm lg:w-96 h-auto object-cover rounded-sm" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default MeetKeriPage;