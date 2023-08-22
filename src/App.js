import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './routes/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
