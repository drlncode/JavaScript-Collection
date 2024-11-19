import { ArrowsMinimizeIcon } from '@/components/Icons';

interface Props {
    children: React.ReactNode;
    unsetModal: () => void;
}

export default function ProjectModalContainer({ children, unsetModal }: Props) {
    return (
        <div className='w-full h-full'>
            <div className='w-full h-full bg-main-black/70'>
                <div className='w-full h-full p-12 relative'>
                    <div
                        className='w-12 h-12 absolute top-0 right-0 p-0.5 flex justify-start items-end'
                    >
                        <div
                            className='p-2 cursor-pointer rounded-full border border-main-yellow text-main-white transition-all duration-standar hover:bg-main-yellow hover:text-main-black'
                            title='Close'
                            onClick={unsetModal}
                        >
                            <ArrowsMinimizeIcon size={18} />
                        </div>
                    </div>
                    <div className='w-full h-full rounded-md'>
                        { children }
                    </div>
                </div>
            </div>
        </div>
    );
}
