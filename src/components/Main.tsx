export default function Main({ children }: { children: React.ReactNode }) {
    return (
        <main className='mt-[63px] overflow-y-auto scrollbar-custom'>
            { children }
        </main>
    );
}
