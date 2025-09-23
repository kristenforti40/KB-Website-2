import React, { useState } from 'react';
import { useContent } from '../../../context/ContentContext';
import { SuccessStory } from '../../../types';

const Modal: React.FC<{ children: React.ReactNode; onClose: () => void; title: string }> = ({ children, onClose, title }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-lg m-4">
            <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold">{title}</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
            </div>
            <div className="p-4">{children}</div>
        </div>
    </div>
);

const ManageStoriesPage: React.FC = () => {
    const { successStories, updateSuccessStories } = useContent();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingStory, setEditingStory] = useState<SuccessStory | null>(null);

    const openModal = (story: SuccessStory | null = null) => {
        setEditingStory(story);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingStory(null);
    };

    const handleSave = (storyData: SuccessStory) => {
        let updatedStories;
        if (editingStory) {
            updatedStories = successStories.map(s => s.id === storyData.id ? storyData : s);
        } else {
            const newStory = { ...storyData, id: Date.now() };
            updatedStories = [...successStories, newStory];
        }
        updateSuccessStories(updatedStories);
        closeModal();
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this success story?')) {
            updateSuccessStories(successStories.filter(s => s.id !== id));
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Manage Success Stories</h1>
                <button onClick={() => openModal()} className="px-4 py-2 font-bold text-white bg-brand-teal rounded-md hover:bg-opacity-90">
                    Add New Story
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
                            <th className="px-5 py-3">Title</th>
                            <th className="px-5 py-3">Description</th>
                            <th className="px-5 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {successStories.map(story => (
                            <tr key={story.id} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="px-5 py-4 text-sm">{story.title}</td>
                                <td className="px-5 py-4 text-sm truncate max-w-sm">{story.description}</td>
                                <td className="px-5 py-4 text-sm">
                                    <button onClick={() => openModal(story)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                                    <button onClick={() => handleDelete(story.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <Modal onClose={closeModal} title={editingStory ? 'Edit Success Story' : 'Add New Story'}>
                    <StoryForm story={editingStory} onSave={handleSave} onCancel={closeModal} />
                </Modal>
            )}
        </div>
    );
};

// Form Component
const StoryForm: React.FC<{ story: SuccessStory | null; onSave: (story: SuccessStory) => void; onCancel: () => void; }> = ({ story, onSave, onCancel }) => {
    const [formData, setFormData] = useState<Omit<SuccessStory, 'id'>>({
        title: story?.title || '',
        description: story?.description || '',
        imageUrl: story?.imageUrl || '',
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, imageUrl: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ ...formData, id: story?.id || 0 });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" required />
            </div>
            <div>
                <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">Image</label>
                <input 
                    type="file" 
                    id="imageUpload" 
                    accept="image/png, image/jpeg, image/webp"
                    onChange={handleImageUpload} 
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-teal/10 file:text-brand-teal hover:file:bg-brand-teal/20 cursor-pointer" 
                />
                 {formData.imageUrl && (
                    <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700">Preview:</p>
                        <img src={formData.imageUrl} alt="Preview" className="mt-2 rounded-md border border-gray-200 h-40 object-cover" />
                    </div>
                )}
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea name="description" id="description" value={formData.description} onChange={handleChange} rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" required></textarea>
            </div>
            <div className="flex justify-end space-x-3 pt-4">
                <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-brand-teal text-white rounded-md hover:bg-opacity-90">Save</button>
            </div>
        </form>
    );
};

export default ManageStoriesPage;