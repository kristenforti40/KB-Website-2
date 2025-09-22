
import React from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../../../context/ContentContext';

const StatCard: React.FC<{ title: string; count: number; link: string; }> = ({ title, count, link }) => (
    <Link to={link} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <h3 className="text-lg font-semibold text-gray-500">{title}</h3>
        <p className="text-4xl font-bold text-brand-teal">{count}</p>
    </Link>
);


const AdminDashboard: React.FC = () => {
    const { horses, teamMembers, successStories, newsPosts } = useContent();

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
            <p className="text-gray-600 mb-8">
                Welcome to the Keri Brion Racing Content Management System. Here you can update the content on your website.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Top Horses" count={horses.length} link="/admin/horses" />
                <StatCard title="Team Members" count={teamMembers.length} link="/admin/team" />
                <StatCard title="Success Stories" count={successStories.length} link="/admin/stories" />
                <StatCard title="News Posts" count={newsPosts.length} link="/admin/news" />
            </div>
        </div>
    );
};

export default AdminDashboard;