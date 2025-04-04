const amountFormatter = ({
  amount,
  currency = "PHP",
}: {
  amount: number;
  currency?: string;
}): string => {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const formatter = new Intl.NumberFormat("en-US", options);
  return formatter.format(amount);
};

export default amountFormatter;
