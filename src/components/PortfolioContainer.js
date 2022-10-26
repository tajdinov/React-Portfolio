import React, { useState } from 'react';
import { lazy,Suspense } from 'react';
import NavTabs from './Navbar';
//import Home from './Home';
import ContactForm from './pages/Contacts';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
const Home = lazy(() => import('./Home'));

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return (
        <div>
        <Suspense fallback={<div>loading...</div>}>
            <Home />
        </Suspense>
        </div>
      )
    }
    if (currentPage === 'Contacts') {
      return <ContactForm />;
    }
    if (currentPage === 'Experience') {
      return <Experience />;
    }
    return <Portfolio />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}