import { ComponentProps } from "react";

export type InputProps = Omit<ComponentProps<"input">, "onChange"> & {
  name: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};
