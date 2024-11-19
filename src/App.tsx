import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ModalsContextProvider } from './contexts/ModalsContextProvider';
import MainLayout from './layout/MainLayout';
import LoadingModal from './components/LoadingModal';

export default function App() {
    return (
        <Suspense fallback={<LoadingModal />}>
            <ModalsContextProvider>
                <Router future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true
                }}>
                    <MainLayout />
                </Router>
            </ModalsContextProvider>
        </Suspense>
    );
}
