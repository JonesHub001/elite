import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AvailablePuppies from './pages/AvailablePuppies.tsx';
import PastProductions from './pages/PastProductions.tsx';
import Mission from './pages/Mission.tsx';
import Apply from './pages/Apply.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="puppies" element={<AvailablePuppies />} />
          <Route path="past-productions" element={<PastProductions />} />
          <Route path="mission" element={<Mission />} />
          <Route path="apply" element={<Apply />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;