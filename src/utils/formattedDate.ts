import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formattedDate = () => {
  const date = new Date();

  const dateFormatText = format(date, "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  const dateFormat = format(date, "MM-dd-yyyy");

  return {
    dateFormatText,
    dateFormat,
  };
};
