import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import NewsletterBanner from '../components/sections/NewsletterBanner';
import Footer from '../components/layout/Footer';
import useScrollToHash from '../hooks/useScrollToHash';

export default function MainLayout() {
  useScrollToHash();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <NewsletterBanner />
      <Footer />
    </div>
  );
}
