// import { NumericFormat } from "react-number-format";
import { InputProps } from "./types";

export function Input({ name, placeholder, onChange, value }: InputProps) {
  const maskMoneyInput = (input: string) => {
    //Garante que só vai ter números
    let formattedValue = input.replace(/\D/g, "");

    //Adiciona virgula para criar os centavos
    formattedValue = formattedValue.replace(/(\d+)(\d{2})$/, "$1,$2");

    //Adiciona ponto para criar as centenas
    formattedValue = formattedValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

    //Insere o cifrão na frente do valor
    formattedValue = "$" + " " + formattedValue;

    return formattedValue;
  };

  return (
    <div className="d-flex flex-column">
      <label htmlFor={name} className="fw-medium">
        {placeholder}
      </label>

      <input
        id={name}
        className="border p-2 rounded shadow-sm"
        name={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange(maskMoneyInput(event.target.value))
        }
        value={maskMoneyInput(value)}
      />

      {/* <NumericFormat
        className="border p-2 rounded shadow-sm"
        thousandSeparator=","
        prefix="$ "
        placeholder="$ 0"
        decimalScale={2}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.value)
        }
        value={value}
      /> */}
    </div>
  );
}
