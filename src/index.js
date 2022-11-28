import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import { Header } from './Header';
import MainContent from './MainContent';
import { Footer } from './Footer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
