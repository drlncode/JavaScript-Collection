export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex justify-center text-main-white font-nunito-500'>
            <div className='flex flex-col max-w-[800px] w-full h-screen'>
                { children }
            </div>
        </div>
    );
}
