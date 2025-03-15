import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AvailablePuppies from './pages/AvailablePuppies';
import PastProductions from './pages/PastProductions';
import Mission from './pages/Mission';
import Apply from './pages/Apply';
import ApplicationStatus from './pages/ApplicationStatus';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/puppies" element={<AvailablePuppies />} />
          <Route path="/past-productions" element={<PastProductions />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/application-status" element={<ApplicationStatus />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;