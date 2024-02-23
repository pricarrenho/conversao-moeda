import { createContext, useState } from "react";
import {
  GlobalContextType,
  GlobalProviderProps,
  TypeOfPurchase,
} from "./types";

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [typeOfPurchase, setTypeOfPurchase] = useState<TypeOfPurchase>("money");

  const handleChosenTypeOfPurchase = (value: TypeOfPurchase) => {
    setTypeOfPurchase(value);
  };

  return (
    <GlobalContext.Provider
      value={{ typeOfPurchase, handleChosenTypeOfPurchase }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
