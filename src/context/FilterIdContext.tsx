import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

interface IdContextType {
  filterId: string;
  setFilterId: Dispatch<SetStateAction<string>>;
}

export const IdContext = createContext<IdContextType>({
  filterId: '',
  setFilterId: () => '',
});

export const FilterIdContext = ({ children }: { children: ReactNode }) => {
  const [filterId, setFilterId] = useState('');

  return <IdContext.Provider value={{ filterId, setFilterId }}>{children}</IdContext.Provider>;
};
