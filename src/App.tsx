import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

export default function App() {
    return (
        <Suspense>
            <Router>
                <MainLayout />
            </Router>
        </Suspense>
    );
}
