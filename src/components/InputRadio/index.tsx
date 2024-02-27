import { TypeOfPurchase } from "../../context/types";
import { useGlobalContext } from "../../hooks/useGlobalContext";

export function InputRadio() {
  const { handleChosenTypeOfPurchase, typeOfPurchase } = useGlobalContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChosenTypeOfPurchase(event.currentTarget.value as TypeOfPurchase);
  };

  return (
    <div className="d-flex flex-column gap-2">
      <label className="fw-medium">Tipo de compra</label>

      <div className="d-flex gap-3">
        <label className="d-flex gap-2 align-items-center">
          <input
            type="radio"
            value="money"
            checked={typeOfPurchase === "money"}
            onChange={handleChange}
            className="input-radio"
          />
          Dinheiro
        </label>

        <label className="d-flex gap-2 align-items-center">
          <input
            type="radio"
            value="card"
            checked={typeOfPurchase === "card"}
            onChange={handleChange}
            className="input-radio"
          />
          Cartão
        </label>
      </div>
    </div>
  );
}
