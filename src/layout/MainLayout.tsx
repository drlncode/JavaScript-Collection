import AppRoutes from '@/routes/AppRoutes';
import Container from '@/components/Container';
import Header from '@/components/Header';
import Main from '@/components/Main';

export default function MainLayout() {
    return (
        <Container>
            <Header />
            <Main>
                <AppRoutes />
            </Main>
        </Container>
    );
}
