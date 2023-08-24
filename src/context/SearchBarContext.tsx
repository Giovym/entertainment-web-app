import { createContext, useContext, useState, ReactNode } from 'react';

interface SearchBarContextType {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBarContext = createContext<SearchBarContextType | null>(null);

interface SearchBarProviderChildren {
  children: ReactNode;
}

export const SearchBarProvider = ({ children }: SearchBarProviderChildren) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchBarContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchBarContext.Provider>
  );
};

export const useSearchBar = () => {
  const context = useContext(SearchBarContext);
  if (!context) {
    throw new Error('useSearchBar must be used within a SearchBarProvider');
  }
  return context;
};
