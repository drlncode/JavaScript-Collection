import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import LoadingModal from './components/LoadingModal';

export default function App() {
    return (
        <Suspense fallback={<LoadingModal />}>
            <Router future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true
            }}>
                <MainLayout />
            </Router>
        </Suspense>
    );
}
