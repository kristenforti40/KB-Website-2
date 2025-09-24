import React, { useState, useEffect, FormEvent } from 'react';
import { useContent } from '../../../context/ContentContext';
import { BloodstockPageContent } from '../../../types';

const ImageUploadField: React.FC<{
    label: string;
    currentImageUrl: string;
    onImageChange: (imageDataUrl: string) => void;
}> = ({ label, currentImageUrl, onImageChange }) => {
    const [previewUrl, setPreviewUrl] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result as string;
                setPreviewUrl(result);
                onImageChange(result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="border border-gray-200 p-4 rounded-md">
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <input
                type="file"
                accept="image/png, image/jpeg, image/webp"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-teal/10 file:text-brand-teal hover:file:bg-brand-teal/20 cursor-pointer"
            />
            <div className="mt-4">
                <p className="text-xs font-semibold text-gray-600">Preview:</p>
                <img src={previewUrl || currentImageUrl} alt="Preview" className="mt-1 rounded-md w-full h-48 object-cover border" />
            </div>
        </div>
    );
};

const TextAreaField: React.FC<{
    label: string;
    name: keyof BloodstockPageContent;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
}> = ({ label, name, value, onChange, rows = 5 }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
        <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            rows={rows}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-teal focus:border-brand-teal"
        />
    </div>
);


const ManageBloodstockPage: React.FC = () => {
    const { bloodstockPageContent, updateBloodstockPageContent } = useContent();
    const [formData, setFormData] = useState<BloodstockPageContent | null>(null);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (bloodstockPageContent) {
            setFormData(bloodstockPageContent);
        }
    }, [bloodstockPageContent]);

    const handleImageChange = (field: keyof BloodstockPageContent, value: string) => {
        if (formData) {
            setFormData({ ...formData, [field]: value });
        }
    };
    
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (formData) {
            setFormData(prev => ({ ...prev!, [name]: value }));
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (formData) {
            updateBloodstockPageContent(formData);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        }
    };
    
    if (!formData) {
        return <div>Loading page editor...</div>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Bloodstock Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-semibold text-brand-teal mb-4">Hero Image</h2>
                    <ImageUploadField
                        label="Page Header Image"
                        currentImageUrl={formData.heroImageUrl}
                        onImageChange={(url) => handleImageChange('heroImageUrl', url)}
                    />
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-brand-teal mb-4">Introductory Text</h2>
                        <TextAreaField label="Introductory Text" name="introText" value={formData.introText} onChange={handleTextChange} />
                    </div>

                    <h2 className="text-xl font-semibold text-brand-teal mb-4 pt-4 border-t">"Our Expertise" Photos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ImageUploadField
                            label="Yearling Sales"
                            currentImageUrl={formData.yearlingSalesUrl}
                            onImageChange={(url) => handleImageChange('yearlingSalesUrl', url)}
                        />
                        <ImageUploadField
                            label="International Sales and Imports"
                            currentImageUrl={formData.internationalSalesUrl}
                            onImageChange={(url) => handleImageChange('internationalSalesUrl', url)}
                        />
                        <ImageUploadField
                            label="Private Sales"
                            currentImageUrl={formData.privateSalesUrl}
                            onImageChange={(url) => handleImageChange('privateSalesUrl', url)}
                        />
                        <ImageUploadField
                            label="Older Horse Sales"
                            currentImageUrl={formData.olderHorseSalesUrl}
                            onImageChange={(url) => handleImageChange('olderHorseSalesUrl', url)}
                        />
                    </div>
                </div>
                
                 <div className="flex items-center justify-end space-x-4 p-4 bg-white rounded-lg shadow-md sticky bottom-4 mt-6">
                    {saved && <span className="text-green-600">Page content saved!</span>}
                    <button type="submit" className="px-6 py-2 font-bold text-white bg-brand-teal rounded-md hover:bg-opacity-90">
                        Save All Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ManageBloodstockPage;
