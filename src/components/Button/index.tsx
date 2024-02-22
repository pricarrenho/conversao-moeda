import { FaExchangeAlt } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

import { ButtonProps } from "./types";

export function Button({ children, icon, styleType, ...props }: ButtonProps) {
  const icons = {
    change: <FaExchangeAlt color="#fff" />,
    arrowLeft: <IoIosArrowRoundBack color="#8C9CAD" size={26} />,
  };

  return (
    <div>
      <button
        className={`btn d-flex align-items-center gap-3 fw-medium p-2 ${styleType}`}
        {...props}
      >
        {icon && icons[icon]} {children}
      </button>
    </div>
  );
}
