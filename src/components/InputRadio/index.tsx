import { useState } from "react";

export function InputRadio() {
  const [valueSelected, setValueSelected] = useState("money");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueSelected(event.target.value);
  };

  return (
    <div className="d-flex flex-column gap-2">
      <label className="fw-medium">Tipo de compra</label>

      <div className="d-flex gap-3">
        <label className="d-flex gap-2 align-items-center">
          <input
            type="radio"
            value="money"
            checked={valueSelected === "money"}
            onChange={handleChange}
            className="input-radio"
          />
          Dinheiro
        </label>

        <label className="d-flex gap-2 align-items-center">
          <input
            type="radio"
            value="card"
            checked={valueSelected === "card"}
            onChange={handleChange}
            className="input-radio"
          />
          Cartão
        </label>
      </div>
    </div>
  );
}
