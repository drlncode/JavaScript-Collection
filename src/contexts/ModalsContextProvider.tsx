import { useState } from 'react';
import { ModalsContext } from '@/contexts/ModalsContext';
import ModalContainer from '@/components/ModalContainer';

export function ModalsContextProvider({ children }: { children: React.ReactNode }) {
    const [ modal, establishMoal ] = useState<React.ReactNode | null>(null);

    const setModal = (modal: React.ReactNode) => {
        establishMoal(modal);
    }

    const unsetModal = () => {
        establishMoal(null);
    }

    return (
        <ModalsContext.Provider value={{
            setModal,
            unsetModal
        }}>
            { modal &&
                <ModalContainer>
                    { modal }
                </ModalContainer>
            }
            { children }
        </ModalsContext.Provider>
    );
}
