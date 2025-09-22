
import React, { useState } from 'react';
import { useContent } from '../../../context/ContentContext';
import { NewsPost } from '../../../types';

const Modal: React.FC<{ children: React.ReactNode; onClose: () => void; title: string }> = ({ children, onClose, title }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-16">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl m-4 max-h-[90vh] flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold">{title}</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
            </div>
            <div className="p-4 overflow-y-auto">{children}</div>
        </div>
    </div>
);

const ManageNewsPage: React.FC = () => {
    const { newsPosts, updateNewsPosts } = useContent();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPost, setEditingPost] = useState<NewsPost | null>(null);

    const openModal = (post: NewsPost | null = null) => {
        setEditingPost(post);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingPost(null);
    };

    const handleSave = (postData: NewsPost) => {
        let updatedPosts;
        if (editingPost) {
            updatedPosts = newsPosts.map(p => p.id === postData.id ? postData : p);
        } else {
            const newPost = { ...postData, id: Date.now() };
            updatedPosts = [...newsPosts, newPost];
        }
        updateNewsPosts(updatedPosts);
        closeModal();
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this news post?')) {
            updateNewsPosts(newsPosts.filter(p => p.id !== id));
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Manage News</h1>
                <button onClick={() => openModal()} className="px-4 py-2 font-bold text-white bg-brand-teal rounded-md hover:bg-opacity-90">
                    Add New Post
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
                            <th className="px-5 py-3">Title</th>
                            <th className="px-5 py-3">Date</th>
                            <th className="px-5 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newsPosts.map(post => (
                            <tr key={post.id} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="px-5 py-4 text-sm">{post.title}</td>
                                <td className="px-5 py-4 text-sm">{post.date}</td>
                                <td className="px-5 py-4 text-sm">
                                    <button onClick={() => openModal(post)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                                    <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <Modal onClose={closeModal} title={editingPost ? 'Edit News Post' : 'Add New Post'}>
                    <NewsForm post={editingPost} onSave={handleSave} onCancel={closeModal} />
                </Modal>
            )}
        </div>
    );
};

// Form Component
const NewsForm: React.FC<{ post: NewsPost | null; onSave: (post: NewsPost) => void; onCancel: () => void; }> = ({ post, onSave, onCancel }) => {
    const [formData, setFormData] = useState<Omit<NewsPost, 'id'>>({
        title: post?.title || '',
        date: post?.date || new Date().toISOString().split('T')[0],
        content: post?.content || '',
        imageUrl: post?.imageUrl || '',
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ ...formData, id: post?.id || 0 });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" required />
            </div>
            <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" required />
            </div>
            <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL (Optional)</label>
                <input type="text" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
            </div>
            <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                <textarea name="content" id="content" value={formData.content} onChange={handleChange} rows={8} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" required></textarea>
            </div>
            <div className="flex justify-end space-x-3 pt-4">
                <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-brand-teal text-white rounded-md hover:bg-opacity-90">Save</button>
            </div>
        </form>
    );
};

export default ManageNewsPage;
