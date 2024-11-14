import AppRoutes from '@/routes/AppRoutes';
import Container from '@/components/Container';
import Header from '@/components/Header';

export default function MainLayout() {
    return (
        <Container>
            <Header />
            <AppRoutes />
        </Container>
    );
}
