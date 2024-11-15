export default function Main({ children }: { children: React.ReactNode }) {
    return (
        <main className='mt-[60px] relative'>
            { children }
        </main>
    );
}
