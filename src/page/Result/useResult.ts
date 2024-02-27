import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../hooks/useGlobalContext";

export const useResult = () => {
  const navigate = useNavigate();
  const { typeOfPurchase, totalValue, valueDollar, handleInputCoinValue } =
    useGlobalContext();

  const handleBackToStart = () => {
    handleInputCoinValue("");
    navigate("/");
  };

  const libraryTypeOfPurchase = {
    money: {
      name: "dinheiro",
      taxa: "1.10%",
    },
    card: {
      name: "cartão",
      taxa: "6,4%",
    },
  };

  const currentTypeOfPurchase = libraryTypeOfPurchase[typeOfPurchase];

  return {
    handleBackToStart,
    typeOfPurchase,
    totalValue,
    valueDollar,
    name: currentTypeOfPurchase.name,
    taxa: currentTypeOfPurchase.taxa,
  };
};
