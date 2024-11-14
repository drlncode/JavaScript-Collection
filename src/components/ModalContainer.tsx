import { createPortal } from 'react-dom';

export default function ModalContainer({ children }: { children: React.ReactNode }) {
    return createPortal(
        <div className='absolute top-0 left-0 w-screen h-screen'>
            { children }
        </div>,
        document.getElementById('modal')!
    );
}
