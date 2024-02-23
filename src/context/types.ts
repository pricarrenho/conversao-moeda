import { ReactElement } from "react";

export type GlobalProviderProps = {
  children: ReactElement;
};

export type TypeOfPurchase = "money" | "card";

export type GlobalContextType = {
  typeOfPurchase: TypeOfPurchase;
  handleChosenTypeOfPurchase: (value: TypeOfPurchase) => void;
};
