import { createContext } from 'react';
import { ModalsContextType } from '@/types/modalsContext';

export const ModalsContext = createContext<ModalsContextType | undefined>(undefined);
