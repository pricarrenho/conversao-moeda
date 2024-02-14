import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formattedDate = () => {
  const date = new Date();

  return format(date, "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });
};
