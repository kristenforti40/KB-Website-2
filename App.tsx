
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import MeetKeriPage from './components/pages/MeetKeriPage';
import TopHorsesPage from './components/pages/TopHorsesPage';
import MeetTheTeamPage from './components/pages/MeetTheTeamPage';
import SuccessStoriesPage from './components/pages/SuccessStoriesPage';
import TrainingPage from './components/pages/TrainingPage';
import PartnershipsPage from './components/pages/PartnershipsPage';
import BloodstockPage from './components/pages/BloodstockPage';
import FacilitiesPage from './components/pages/FacilitiesPage';
import ContactPage from './components/pages/ContactPage';
import { ContentProvider } from './context/ContentContext';
import NewsPage from './components/pages/NewsPage';
import NewsPostPage from './components/pages/NewsPostPage';
import LoginPage from './components/pages/admin/LoginPage';
import AdminLayout from './components/pages/admin/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './components/pages/admin/AdminDashboard';
import ManageHorsesPage from './components/pages/admin/ManageHorsesPage';
import ManageTeamPage from './components/pages/admin/ManageTeamPage';
import ManageStoriesPage from './components/pages/admin/ManageStoriesPage';
import ManageNewsPage from './components/pages/admin/ManageNewsPage';
import ManageStatsPage from './components/pages/admin/ManageStatsPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App: React.FC = () => {
  return (
    <ContentProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-sans">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin/*" element={
              <ProtectedRoute>
                <AdminLayout>
                  <Routes>
                    <Route path="/" element={<AdminDashboard />} />
                    <Route path="/stats" element={<ManageStatsPage />} />
                    <Route path="/horses" element={<ManageHorsesPage />} />
                    <Route path="/team" element={<ManageTeamPage />} />
                    <Route path="/stories" element={<ManageStoriesPage />} />
                    <Route path="/news" element={<ManageNewsPage />} />
                  </Routes>
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/*" element={<MainApp />} />
          </Routes>
        </div>
      </HashRouter>
    </ContentProvider>
  );
};

const MainApp = () => (
  <>
    <Header />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meet-keri" element={<MeetKeriPage />} />
        <Route path="/horses" element={<TopHorsesPage />} />
        <Route path="/team" element={<MeetTheTeamPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:postId" element={<NewsPostPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/partnerships" element={<PartnershipsPage />} />
        <Route path="/bloodstock" element={<BloodstockPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
    <Footer />
  </>
);


export default App;
