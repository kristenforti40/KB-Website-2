import React from 'react';

const heroImageUrl = "https://i.postimg.cc/rpS9y48h/ai-22.png";

const TrainingPage: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-[40vh] flex items-center justify-center text-center"
                style={{ backgroundImage: `url('${heroImageUrl}')` }}
            >
                <div className="absolute inset-0 bg-black/25"></div>
                <div className="relative z-10 p-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-xl leading-tight">
                        KB Racing Training Program
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <div className="py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <p className="text-lg text-stone-700 mb-6">
                        Our training philosophy is built on individual attention, patience, and a deep understanding of the thoroughbred athlete. We tailor programs to bring out the best in each horse, focusing on their unique strengths and potential.
                    </p>
                    <p className="text-lg text-stone-700">
                        Our primary base of operations is at the world-class <span className="font-semibold">Fair Hill Training Center</span> in Maryland, with access to a variety of turf and synthetic surfaces. We also strategically race at other premier East Coast tracks to place our horses in the best possible spots to succeed.
                    </p>

                    <hr className="border-stone-200 my-12" />

                    <div className="space-y-20 text-left">
                        <div>
                            <h3 className="text-3xl font-bold text-brand-teal mb-3 text-center">Flat Training</h3>
                            <p className="text-stone-700 text-lg">
                                For flat racing, we emphasize speed, tactical awareness, and mental conditioning. Our regimen is designed to sharpen a horse's natural abilities, ensuring they are primed for peak performance on race day, from sprints to classic distances.
                            </p>
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                                <div className="overflow-hidden rounded-lg shadow-lg">
                                    <img src="https://picsum.photos/seed/flat1/400/300" alt="Horse on flat track" className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-lg">
                                    <img src="https://picsum.photos/seed/flat2/400/300" alt="Horse breaking from the gate" className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-lg">
                                    <img src="https://picsum.photos/seed/flat3/400/300" alt="Horses racing on the flat" className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-3xl font-bold text-brand-teal mb-3 text-center">Jump Training</h3>
                            <p className="text-stone-700 text-lg">
                                Specializing in developing elite steeplechasers and hurdlers, our program focuses on building stamina, agility, and flawless jumping technique. We prepare horses for the demanding conditions of jump racing with a combination of schooling, gallops, and cross-training.
                            </p>
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                                <div className="overflow-hidden rounded-lg shadow-lg">
                                    <img src="https://picsum.photos/seed/jump1/400/300" alt="Horse jumping hurdle" className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-lg">
                                    <img src="https://picsum.photos/seed/jump2/400/300" alt="Horse in training for jump racing" className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-lg">
                                    <img src="https://picsum.photos/seed/jump3/400/300" alt="Steeplechase action" className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingPage;