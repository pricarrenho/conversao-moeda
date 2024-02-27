import { formattedDate } from "../../utils/formattedDate";
import { api } from "../api";

export async function getValueDollar() {
  const { dateFormat } = formattedDate();

  return api.get("", {
    params: {
      "@dataCotacao": `'${dateFormat}'`,
      $top: "100",
      $format: "json",
      $select: "cotacaoCompra",
    },
  });
}
