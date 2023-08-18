import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер root не найден');
}

const root = createRoot(container);
root.render(
    <div>
        React app
    </div>,
);
