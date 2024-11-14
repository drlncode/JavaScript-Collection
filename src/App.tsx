import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

export default function App() {
    return (
        <Suspense>
            <Router future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true
            }}>
                <MainLayout />
            </Router>
        </Suspense>
    );
}
