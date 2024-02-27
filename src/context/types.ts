import { ReactElement } from "react";

export type GlobalProviderProps = {
  children: ReactElement;
};

export type TypeOfPurchase = "money" | "card";

export type GlobalContextType = {
  typeOfPurchase: TypeOfPurchase;
  handleChosenTypeOfPurchase: (value: TypeOfPurchase) => void;
  totalValue: number;
  handleTotalValue: (value: number) => void;
  valueDollar: number;
  handleValueDollar: (value: number) => void;
  inputCoinValue: string;
  handleInputCoinValue: (value: string) => void;
};
