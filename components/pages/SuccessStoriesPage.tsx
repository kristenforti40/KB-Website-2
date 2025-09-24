import React from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../../context/ContentContext';
import type { SuccessStory } from '../../types';

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

const Story: React.FC<{ story: SuccessStory, index: number }> = ({ story, index }) => {
    const isReversed = index % 2 !== 0;
    return (
        <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-5/12">
                 <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-xl border border-stone-200/50">
                    <img src={story.imageUrl} alt={story.title} className="rounded-md object-cover w-full h-auto" />
                </div>
            </div>
            <div className="w-full md:w-7/12">
                 <h3 className="text-3xl font-semibold text-stone-900 mb-3">{story.title}</h3>
                 <div className="text-stone-700 text-lg space-y-3">
                    {story.description.split('\n').map((paragraph, index) => (
                        paragraph.trim() && <p key={index}>{paragraph}</p>
                    ))}
                 </div>
            </div>
        </div>
    );
}

const SuccessStoriesPage: React.FC = () => {
    const { successStories } = useContent();
    return (
        <div className="py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <PageTitle title="Success Stories" />
                <div className="space-y-16">
                    {successStories.map((story, index) => (
                        <React.Fragment key={story.id}>
                           <Story story={story} index={index} />
                           {index < successStories.length - 1 && <hr className="border-stone-200/80 my-16" />}
                        </React.Fragment>
                    ))}
                </div>

                <div className="text-center mt-24">
                    <h2 className="text-3xl font-bold text-stone-900 mb-4">Become Part of Our Next Story!</h2>
                    <p className="text-stone-700 max-w-2xl mx-auto mb-8">
                        Join a winning team and experience the thrill of thoroughbred racing at the highest level.
                    </p>
                    <Link to="/partnerships" className="bg-brand-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
                        Explore Ownership
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SuccessStoriesPage;