import React, { useState, useEffect, FormEvent } from 'react';
import { useContent } from '../../../context/ContentContext';
import { PartnershipsPageContent } from '../../../types';

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
                <img src={previewUrl || currentImageUrl} alt="Preview" className="mt-1 rounded-md w-full h-32 object-cover border" />
            </div>
        </div>
    );
};

const TextAreaField: React.FC<{
    label: string;
    name: keyof PartnershipsPageContent;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
}> = ({ label, name, value, onChange, rows = 4 }) => (
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


const ManagePartnershipsPage: React.FC = () => {
    const { partnershipsPageContent, updatePartnershipsPageContent } = useContent();
    const [formData, setFormData] = useState<PartnershipsPageContent | null>(null);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (partnershipsPageContent) {
            setFormData(partnershipsPageContent);
        }
    }, [partnershipsPageContent]);
    
    const handleHeroImageChange = (value: string) => {
        if (formData) {
            setFormData({ ...formData, heroImageUrl: value });
        }
    };

    const handleGalleryImageChange = (index: number, value: string) => {
        if (formData) {
            const newGalleryImages = [...formData.galleryImages];
            newGalleryImages[index] = value;
            setFormData({ ...formData, galleryImages: newGalleryImages });
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
            updatePartnershipsPageContent(formData);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        }
    };
    
    if (!formData) {
        return <div>Loading page editor...</div>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Partnerships Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-semibold text-brand-teal mb-4">Hero Image</h2>
                    <ImageUploadField
                        label="Page Header Image"
                        currentImageUrl={formData.heroImageUrl}
                        onImageChange={handleHeroImageChange}
                    />
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-brand-teal mb-4">Introductory Text</h2>
                        <div className="space-y-4">
                            <TextAreaField label="Introductory Text" name="introText" value={formData.introText} onChange={handleTextChange} />
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold text-brand-teal mb-4 pt-4 border-t">Ownership Moments Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {formData.galleryImages.map((imageUrl, index) => (
                            <ImageUploadField
                                key={index}
                                label={`Image ${index + 1}`}
                                currentImageUrl={imageUrl}
                                onImageChange={(url) => handleGalleryImageChange(index, url)}
                            />
                        ))}
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

export default ManagePartnershipsPage;