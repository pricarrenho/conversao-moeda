import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formattedHour = () => {
  const date = new Date();

  return format(date, "HH:mm", {
    locale: ptBR,
  });
};
