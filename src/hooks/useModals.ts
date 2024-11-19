import { useContext } from 'react';
import { ModalsContext } from '@/contexts/ModalsContext';

export function useModals() {
    const context = useContext(ModalsContext);

    if (typeof context === 'undefined') {
        throw new Error('ModalsContext:useModals() need a Provider to be used.');
    }

    return context;
}
