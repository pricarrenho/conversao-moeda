import { ButtonHTMLAttributes } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonStyleType =
  | "btn-secondary"
  | "btn-success"
  | "btn-light shadow-sm bg-transparent";

export type ButtonProps = {
  children: string | number;
  icon?: "change" | "arrowLeft";
  styleType: ButtonStyleType;
  as?: React.ElementType;
} & ButtonType;
