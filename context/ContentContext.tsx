
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Horse, TeamMember, SuccessStory, NewsPost, RacingStats } from '../types';
import { TOP_HORSES, TEAM_MEMBERS, SUCCESS_STORIES, NEWS_POSTS, RACING_STATS } from '../constants';

interface ContentContextType {
    horses: Horse[];
    teamMembers: TeamMember[];
    successStories: SuccessStory[];
    newsPosts: NewsPost[];
    racingStats: RacingStats | null;
    updateHorses: (newHorses: Horse[]) => void;
    updateTeamMembers: (newTeamMembers: TeamMember[]) => void;
    updateSuccessStories: (newStories: SuccessStory[]) => void;
    updateNewsPosts: (newPosts: NewsPost[]) => void;
    updateRacingStats: (newStats: RacingStats) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const initializeArrayFromLocalStorage = <T,>(key: string, defaultValue: T[]): T[] => {
    try {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            return JSON.parse(storedValue);
        }
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
    } catch (error) {
        console.error(`Error reading from localStorage key “${key}”:`, error);
        return defaultValue;
    }
};

const initializeObjectFromLocalStorage = <T,>(key: string, defaultValue: T): T => {
    try {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            return JSON.parse(storedValue);
        }
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
    } catch (error) {
        console.error(`Error reading from localStorage key “${key}”:`, error);
        return defaultValue;
    }
};

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [horses, setHorses] = useState<Horse[]>([]);
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [successStories, setSuccessStories] = useState<SuccessStory[]>([]);
    const [newsPosts, setNewsPosts] = useState<NewsPost[]>([]);
    const [racingStats, setRacingStats] = useState<RacingStats | null>(null);

    useEffect(() => {
        setHorses(initializeArrayFromLocalStorage('kbr_horses', TOP_HORSES));
        setTeamMembers(initializeArrayFromLocalStorage('kbr_team', TEAM_MEMBERS));
        setSuccessStories(initializeArrayFromLocalStorage('kbr_stories', SUCCESS_STORIES));
        setNewsPosts(initializeArrayFromLocalStorage('kbr_news', NEWS_POSTS));
        setRacingStats(initializeObjectFromLocalStorage('kbr_stats', RACING_STATS));
    }, []);

    const updateAndStoreArray = <T,>(setter: React.Dispatch<React.SetStateAction<T[]>>, key: string) => (newData: T[]) => {
        setter(newData);
        localStorage.setItem(key, JSON.stringify(newData));
    };
    
    const updateAndStoreObject = <T,>(setter: React.Dispatch<React.SetStateAction<T | null>>, key: string) => (newData: T) => {
        setter(newData);
        localStorage.setItem(key, JSON.stringify(newData));
    };

    const value = {
        horses,
        teamMembers,
        successStories,
        newsPosts,
        racingStats,
        updateHorses: updateAndStoreArray(setHorses, 'kbr_horses'),
        updateTeamMembers: updateAndStoreArray(setTeamMembers, 'kbr_team'),
        updateSuccessStories: updateAndStoreArray(setSuccessStories, 'kbr_stories'),
        updateNewsPosts: updateAndStoreArray(setNewsPosts, 'kbr_news'),
        updateRacingStats: updateAndStoreObject(setRacingStats, 'kbr_stats'),
    };

    return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export const useContent = (): ContentContextType => {
    const context = useContext(ContentContext);
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};
