import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('@/pages/Home'));
const ProjectsPage = lazy(() => import('@/pages/Projects'));
const ProjectPage = lazy(() => import('@/pages/Project'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/projects/:name' element={<ProjectPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
}
