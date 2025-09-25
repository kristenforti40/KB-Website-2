

import React, { useRef, useState } from 'react';
import { useContent } from '../../../context/ContentContext';
import { AllContent } from '../../../types';

const ManageDataPage: React.FC = () => {
    const content = useContent();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleExport = () => {
        const allContent: AllContent = {
            horses: content.horses,
            teamMembers: content.teamMembers,
            newsPosts: content.newsPosts,
            racingStats: content.racingStats,
            homePageHeroUrl: content.homePageHeroUrl,
            logoUrl: content.logoUrl,
            faviconUrl: content.faviconUrl,
            meetKeriPageContent: content.meetKeriPageContent,
            trainingPageContent: content.trainingPageContent,
            facilitiesPageContent: content.facilitiesPageContent,
            partnershipsPageContent: content.partnershipsPageContent,
            bloodstockPageContent: content.bloodstockPageContent,
        };

        const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(allContent, null, 2))}`;
        const link = document.createElement('a');
        link.href = jsonString;
        const date = new Date().toISOString().split('T')[0];
        link.download = `kbracing-backup-${date}.json`;
        link.click();
    };

    const handleImport = async () => {
        setImportStatus('idle');
        setErrorMessage('');
        
        const file = fileInputRef.current?.files?.[0];
        if (!file) {
            setErrorMessage('Please select a file to import.');
            setImportStatus('error');
            return;
        }

        if (window.confirm('Are you sure you want to import this data? This will overwrite all existing website content.')) {
            try {
                const text = await file.text();
                const importedData: Partial<AllContent> = JSON.parse(text);

                // Comprehensive validation
                const requiredKeys: (keyof AllContent)[] = [
                    'horses', 'teamMembers', 'newsPosts',
                    'racingStats', 'homePageHeroUrl', 'logoUrl', 'faviconUrl',
                    'meetKeriPageContent', 'trainingPageContent', 'facilitiesPageContent',
                    'partnershipsPageContent', 'bloodstockPageContent'
                ];

                const missingKeys = requiredKeys.filter(key => !(key in importedData));

                if (missingKeys.length > 0) {
                    throw new Error(`Invalid data file. Missing keys: ${missingKeys.join(', ')}`);
                }
                
                // Type assertion after validation
                const validData = importedData as AllContent;

                // Update all content
                content.updateHorses(validData.horses);
                content.updateTeamMembers(validData.teamMembers);
                content.updateNewsPosts(validData.newsPosts);
                if (validData.racingStats) content.updateRacingStats(validData.racingStats);
                content.updateHomePageHeroUrl(validData.homePageHeroUrl);
                content.updateLogoUrl(validData.logoUrl);
                if (validData.faviconUrl) content.updateFaviconUrl(validData.faviconUrl);
                if (validData.meetKeriPageContent) content.updateMeetKeriPageContent(validData.meetKeriPageContent);
                if (validData.trainingPageContent) content.updateTrainingPageContent(validData.trainingPageContent);
                if (validData.facilitiesPageContent) content.updateFacilitiesPageContent(validData.facilitiesPageContent);
                if (validData.partnershipsPageContent) content.updatePartnershipsPageContent(validData.partnershipsPageContent);
                if (validData.bloodstockPageContent) content.updateBloodstockPageContent(validData.bloodstockPageContent);

                setImportStatus('success');
                setTimeout(() => {
                    setImportStatus('idle');
                    alert("Import complete. The website will now reload to apply all changes.");
                    window.location.reload();
                }, 1000);
                 if(fileInputRef.current) {
                    fileInputRef.current.value = "";
                 }

            } catch (error) {
                console.error('Import failed:', error);
                const message = error instanceof Error ? error.message : 'Please check the file format and try again.';
                setErrorMessage(`Import failed. ${message}`);
                setImportStatus('error');
            }
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Import / Export Data</h1>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold text-brand-teal mb-4">Export Data</h2>
                <p className="text-gray-600 mb-4">
                    Download a complete backup of all your website's content. This includes horses, team members, news, photos, and all page text. It's a good idea to create backups periodically.
                </p>
                <button
                    onClick={handleExport}
                    className="px-6 py-2 font-bold text-white bg-brand-teal rounded-md hover:bg-opacity-90"
                >
                    Export All Website Data
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-red-600 mb-4">Import Data</h2>
                <p className="text-gray-600 mb-4">
                    Restore your website's content from a backup file. 
                    <strong className="text-red-700"> Warning: This will overwrite all current data on the website and reload the page.</strong>
                </p>
                <div className="flex items-center space-x-4">
                    <input
                        type="file"
                        ref={fileInputRef}
                        accept="application/json"
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-100 file:text-red-700 hover:file:bg-red-200 cursor-pointer"
                    />
                    <button
                        onClick={handleImport}
                        className="px-6 py-2 font-bold text-white bg-red-600 rounded-md hover:bg-red-700"
                    >
                        Import Data
                    </button>
                </div>
                {importStatus === 'success' && <p className="text-green-600 mt-4">Data imported successfully! Reloading...</p>}
                {importStatus === 'error' && <p className="text-red-600 mt-4">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default ManageDataPage;