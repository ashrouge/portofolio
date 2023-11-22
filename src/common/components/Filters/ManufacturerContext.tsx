import { createContext, useContext, ReactNode, useState } from 'react';

interface ManufacturerContextProps {
  manufacturer: string;
  setManufacturer: React.Dispatch<React.SetStateAction<string>>;
}

const ManufacturerContext = createContext<ManufacturerContextProps | undefined>(undefined);

interface ManufacturerProviderProps {
  children: ReactNode;
}

export const ManufacturerProvider: React.FC<ManufacturerProviderProps> = ({ children }) => {
  const [manufacturer, setManufacturer] = useState('');

  return (
    <ManufacturerContext.Provider value={{ manufacturer, setManufacturer }}>
      {children}
    </ManufacturerContext.Provider>
  );
};

export const useManufacturerContext = () => {
  const context = useContext(ManufacturerContext);
  if (!context) {
    throw new Error('useManufacturerContext must be used within a ManufacturerProvider');
  }
  return context;
};
