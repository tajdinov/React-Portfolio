import React, { useState } from 'react';
import NavTabs from './Navbar';
import Home from './Home';
import ContactForm from './pages/Contacts';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
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