
import React, { ReactNode } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('kbr-auth-token');
        navigate('/login');
    };

    const navItems = [
        { name: 'Dashboard', path: '/admin' },
        { name: 'Racing Stats', path: '/admin/stats' },
        { name: 'Horses', path: '/admin/horses' },
        { name: 'Team', path: '/admin/team' },
        { name: 'Stories', path: '/admin/stories' },
        { name: 'News', path: '/admin/news' },
    ];

    const baseLinkClass = "block px-4 py-2 rounded-md text-sm font-medium transition-colors";
    const activeLinkClass = "bg-brand-teal text-white";
    const inactiveLinkClass = "text-gray-700 hover:bg-gray-200";

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
                <div className="p-4 border-b">
                    <h1 className="text-2xl font-bold text-brand-teal">KBR CMS</h1>
                </div>
                <nav className="flex-grow p-4 space-y-2">
                    {navItems.map(item => (
                         <NavLink
                            key={item.name}
                            to={item.path}
                            end={item.path === '/admin'} // `end` prop for exact match on dashboard link
                            className={({ isActive }) => `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
                <div className="p-4 border-t">
                     <NavLink to="/" className="text-sm text-gray-600 hover:text-brand-teal">
                        &larr; Back to Public Site
                    </NavLink>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <header className="bg-white border-b border-gray-200">
                    <div className="flex items-center justify-end h-16 px-6">
                        <button onClick={handleLogout} className="px-4 py-2 text-sm font-medium text-white bg-brand-teal rounded-md hover:bg-opacity-90">
                            Logout
                        </button>
                    </div>
                </header>
                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
