/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuotePage from './routes/QuotePage';
import Home from './routes/Home';
import CalculatorPage from './routes/CalculatorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
