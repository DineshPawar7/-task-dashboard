import React from 'react';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Content from './components/Content';
import '../src/index.css'
// import AnalyticsCard from './components/AnalyticsCard';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-section">
        <Topbar />
        <Content />
        {/* <AnalyticsCard /> */}
      </div>
    </div>
  );
};

export default App;
