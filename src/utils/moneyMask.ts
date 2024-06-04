type MoneyMask = (value: string, value2?: boolean) => string;

export const moneyMask: MoneyMask = (value, prefix) => {
  // Garante que só vai ter números
  const formattedValue = value.replace(/\D/g, "");

  // Divide o valor por 100 para obter o valor em centavos
  const numericValue = (Number(formattedValue) || 0) / 100;

  const result = numericValue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const replacePrefix = prefix ? "$ " : "";

  return result.replace("$", replacePrefix);
};
