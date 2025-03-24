import { StrictMode } from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import React from 'react';

const element = document.getElementById('centre-search');

if (element) {
    const root = ReactDOM.createRoot(element as HTMLElement);

    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}
