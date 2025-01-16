import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';
import Statistics from './components/Statistics';
import News from './components/News';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  // Show or hide the scroll button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div className=''>
      <Header />
      <div className='bg-blue'>
        <Features />
      </div>
      <About />
      <Services />
      <Team />
      <Statistics />
      <News />
      <Footer />

      
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue text-2xl text-white p-3 rounded-sm shadow-lg  transition"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
