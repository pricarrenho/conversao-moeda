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
  const [totalValue, setTotalValue] = useState<number>(0);
  const [valueDollar, setValueDollar] = useState<number>(0);
  const [inputCoinValue, setInputCoinValue] = useState("");

  const handleChosenTypeOfPurchase = (value: TypeOfPurchase) => {
    setTypeOfPurchase(value);
  };

  const handleTotalValue = (value: number) => {
    setTotalValue(value);
  };

  const handleValueDollar = (value: number) => {
    setValueDollar(value);
  };

  const handleInputCoinValue = (value: string) => {
    setInputCoinValue(value);
  };

  return (
    <GlobalContext.Provider
      value={{
        typeOfPurchase,
        handleChosenTypeOfPurchase,
        totalValue,
        handleTotalValue,
        valueDollar,
        handleValueDollar,
        inputCoinValue,
        handleInputCoinValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
