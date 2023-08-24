import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactElement,
} from 'react';

interface ApiContextType {
  list: any[];
  loading: boolean;
  error: Error | null;
  updateList: (newList: any[]) => void;
}

const ApiContext = createContext<ApiContextType | null>(null);

type ChildrenType = {
  children?: ReactElement | ReactElement[] | undefined;
};

export const ApiProvider = ({ children }: ChildrenType) => {
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(
        'https://entertainment-web-app-7b112-default-rtdb.europe-west1.firebasedatabase.app/.json'
      );
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setList(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error as Error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const updateList = async (newList: any[]) => {
    try {
      await fetch(
        'https://entertainment-web-app-7b112-default-rtdb.europe-west1.firebasedatabase.app/.json',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newList),
        }
      );
      setList(newList);
    } catch (error) {
      console.error('Error during POST request:', error);
      setError(error as Error);
    }
  };

  return (
    <ApiContext.Provider value={{ list, loading, error, updateList }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = (): ApiContextType | null => {
  return useContext(ApiContext);
};
