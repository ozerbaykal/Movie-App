import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { api } from './redux/api.ts';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  );
} else {
  console.error("Root element not found!");
}
