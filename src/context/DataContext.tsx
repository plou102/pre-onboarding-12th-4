import { DataProps, Response } from '@/types';
import mock_data from 'src/mock/mock_data.json';
import React, { ReactNode, createContext, useEffect, useState } from 'react';

interface DataContextType {
  data: DataProps[];
  id: string[];
}

export const MockDataContext = createContext<DataContextType>({
  data: [],
  id: [],
});

const DataContext = ({ children }: { children: ReactNode }) => {
  const response: Response = mock_data.response;
  const value = Object.values(response);
  const key = Object.keys(response);
  const [data, setData] = useState<DataProps[]>([]);
  const [index, setIndex] = useState(0);
  const [id, setId] = useState<string[]>([]);

  useEffect(() => {
    if (index < value.length) {
      reData(index);
      setIndex(index + 1);

      !id.includes(value[index].id) && setId([...id, value[index].id]);
    }
  }, [index]);

  const reData = (idx: number) => {
    const newData = {
      name: key[idx],
      id: value[idx].id,
      value_area: value[idx].value_area,
      value_bar: value[idx].value_bar,
    };
    setData([...data, newData]);
  };

  return <MockDataContext.Provider value={{ data, id }}>{children}</MockDataContext.Provider>;
};

export default DataContext;
