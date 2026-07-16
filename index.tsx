
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If prerender.mjs snapshotted this route, the markup already exists — hydrate it
// so crawlers' HTML stays intact and there's no blank flash. Otherwise mount fresh.
if (rootElement.getAttribute('data-prerendered') === 'true' && rootElement.hasChildNodes()) {
  try {
    ReactDOM.hydrateRoot(rootElement, app);
  } catch {
    // Hydration mismatch (e.g. animation state) — fall back to a clean client render.
    rootElement.innerHTML = '';
    ReactDOM.createRoot(rootElement).render(app);
  }
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
