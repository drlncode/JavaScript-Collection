import ModalContainer from './ModalContainer';
import { LoaderIcon } from './Icons';

export default function LoadingModal() {
    return (
        <ModalContainer>
            <div className='w-full h-full bg-main-black grid place-content-center'>
                <div className='text-main-yellow animate-spin'>
                    <LoaderIcon />
                </div>
            </div>
        </ModalContainer>
    );
}
