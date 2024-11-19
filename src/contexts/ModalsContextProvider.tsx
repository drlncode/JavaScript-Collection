import { useState } from 'react';
import { ModalsContext } from '@/contexts/ModalsContext';
import ModalContainer from '@/components/ModalContainer';
import ProjectModalContainer from '@/components/ProjectModalContainer';

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
                    <ProjectModalContainer unsetModal={unsetModal}>
                        { modal }
                    </ProjectModalContainer>
                </ModalContainer>
            }
            { children }
        </ModalsContext.Provider>
    );
}
