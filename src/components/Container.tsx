export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex justify-center bg-main-black text-main-white font-nunito-500'>
            <div className='max-w-[800px] w-full'>
                { children }
            </div>
        </div>
    );
}
