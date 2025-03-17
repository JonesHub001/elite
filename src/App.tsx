import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AvailablePuppies from './pages/AvailablePuppies';
import PastProductions from './pages/PastProductions';
import Mission from './pages/Mission';
import Apply from './pages/Apply';
import ApplicationStatus from './pages/ApplicationStatus';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import EmailTest from './components/EmailTest';
import { initEmailJS } from './lib/emailjsInit';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  useEffect(() => {
    initEmailJS();
  }, []);

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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/email-test" element={<EmailTest />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;