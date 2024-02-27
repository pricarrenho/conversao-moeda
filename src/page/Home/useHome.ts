import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { useEffect, useState } from "react";
import { getValueDollar } from "../../services/coin";
import { ValueDollarProps } from "./types";
import * as yup from "yup";

export const useHome = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    typeOfPurchase,
    handleTotalValue,
    valueDollar,
    handleValueDollar,
    inputCoinValue,
    handleInputCoinValue,
  } = useGlobalContext();

  const validationSchema = yup.object().shape({
    coin: yup.string().required("O campo moeda é obrigatório."),
  });

  const validateInputCoinValue = async (value: string) => {
    try {
      await validationSchema.validate({ coin: value }, { abortEarly: false });
      setError("");
    } catch (error) {
      setError((error as yup.ValidationError).message);
    }
  };

  const handleConvert = async () => {
    try {
      await validationSchema.validate(
        { coin: inputCoinValue },
        { abortEarly: false }
      );

      const numberValue = parseFloat(inputCoinValue.replace(/[^0-9.-]+/g, ""));

      if (typeOfPurchase === "money") {
        handleTotalValue(
          valueDollar * numberValue + valueDollar * numberValue * 0.011
        );
      } else {
        handleTotalValue(
          valueDollar * numberValue + valueDollar * numberValue * 0.064
        );
      }

      navigate("/result");
    } catch (error) {
      setError((error as yup.ValidationError).message);
    }
  };

  useEffect(() => {
    getValueDollar().then((response) => {
      response.data.value.map((item: ValueDollarProps) =>
        handleValueDollar(item.cotacaoCompra)
      );
    });
  }, [handleValueDollar]);

  return {
    error,
    inputCoinValue,
    handleInputCoinValue,
    handleConvert,
    validateInputCoinValue,
  };
};
