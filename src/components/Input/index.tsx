import { NumericFormat } from "react-number-format";
import { InputProps } from "./types";

export function Input({ name, placeholder, onChange, value }: InputProps) {
  return (
    <div className="d-flex flex-column">
      <label htmlFor={name} className="fw-medium">
        {placeholder}
      </label>

      <NumericFormat
        className="border p-2 rounded shadow-sm"
        thousandSeparator=","
        prefix="$ "
        placeholder="$ 0"
        decimalScale={2}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.value)
        }
        value={value}
      />
    </div>
  );
}
