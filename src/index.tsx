import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import "./index.scss";

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер root не найден');
}

const root = createRoot(container);
root.render(
    <div>
        <App />
    </div>,
);
