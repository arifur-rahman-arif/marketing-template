import { StrictMode } from 'react';
import App from './App';

const element = document.getElementById('centre-search');

if (element) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const root = ReactDOM.createRoot(element as HTMLElement);

    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}
