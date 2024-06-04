import { InputProps } from "./types";

export function Input({
  name,
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
        {...props}
        id={name}
        className="border p-2 rounded shadow-sm"
        name={name}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </div>
  );
}
