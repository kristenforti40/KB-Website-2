import React, { useState, FormEvent } from 'react';
import { useContent } from '../../../context/ContentContext';
import { DEFAULT_LOGO_BASE64 } from '../../../constants';

const ManageBrandingPage: React.FC = () => {
    const { logoUrl, updateLogoUrl } = useContent();
    const [newImageUrl, setNewImageUrl] = useState<string>('');
    const [saved, setSaved] = useState(false);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewImageUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (newImageUrl) {
            updateLogoUrl(newImageUrl);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } else {
            alert("Please upload a new image first.");
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Logo & Branding</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <h2 className="text-xl font-semibold text-brand-teal mb-4">Site Logo</h2>
                        <div>
                            <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">Upload New Logo</label>
                            <input
                                type="file"
                                id="imageUpload"
                                accept="image/png, image/jpeg, image/webp"
                                onChange={handleImageUpload}
                                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-teal/10 file:text-brand-teal hover:file:bg-brand-teal/20 cursor-pointer"
                            />
                        </div>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-2">Current Logo:</p>
                                <div className="p-4 inline-block rounded-md border border-gray-200 bg-gray-50">
                                    {logoUrl ? (
                                        <img src={logoUrl} alt="Current Logo" className="h-20 w-auto" />
                                    ) : (
                                        <img src={DEFAULT_LOGO_BASE64} alt="Default Logo" className="h-20 w-auto" />
                                    )}
                                </div>
                            </div>
                            {newImageUrl && (
                                <div>
                                    <p className="text-sm font-medium text-gray-700 mb-2">New Logo Preview:</p>
                                    <div className="p-4 inline-block rounded-md border border-gray-200">
                                        <img src={newImageUrl} alt="New Logo Preview" className="h-20 w-auto" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-end space-x-4 pt-4">
                        {saved && <span className="text-green-600">Logo saved successfully!</span>}
                        <button type="submit" className="px-6 py-2 font-bold text-white bg-brand-teal rounded-md hover:bg-opacity-90 disabled:bg-gray-400" disabled={!newImageUrl}>
                            Save New Logo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ManageBrandingPage;
