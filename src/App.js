import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuotePage from './routes/QuotePage';
import Home from './routes/Home';
import CalculatorPage from './routes/CalculatorPage';
import Navbar from './routes/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
