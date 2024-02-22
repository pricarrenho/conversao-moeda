import { InputProps } from "./types";

export function Input({
  name,
  type,
  placeholder,
  onChange,
  value,
  ...props
}: InputProps) {
  return (
    <div className="d-flex flex-column">
      <label htmlFor={name} className="fw-medium">
        {placeholder}
      </label>

      <input
        id={name}
        className="border p-2 rounded shadow-sm"
        name={name}
        type={type}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange(Number(event.target.value))
        }
        value={value}
        {...props}
      />
    </div>
  );
}
