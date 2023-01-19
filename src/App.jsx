import React from 'react';
import './App.css';
import Footer from './components//Footer';
import About from './components//About';
import Personal from './components//Personal';

function App() {
  return (
    <div className="container">
      <div className="card" style={{ backgroundColor: ' #1a1b21' }}>
        <Personal headerColor="#fff" profColor="#F3BF99" siteColor="#F5F5F5" />
        <About headerColor="#F5F5F5" textColor="#dcdcdc" />
        <Footer bgColor="#161619" />
      </div>

      <div className="card" style={{ backgroundColor: ' #F5F5F5' }}>
        <Personal
          headerColor="#2B283A"
          profColor="#F47D27"
          siteColor="#4A4E74"
          borderColor="#fff"
        />
        <About headerColor="#2B283A" textColor="#4A4E74" />
        <Footer bgColor="#D5D4D8" borderColor="#ccc" />
      </div>
    </div>
  );
}

export default App;
