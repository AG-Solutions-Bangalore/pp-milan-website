import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import Home from './pages/Home';
import Registration from './pages/Registration';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <ModalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </ModalProvider>
  );
}
