const numberFormat = (val) => {
  const num = Number(val);
  if (Number.isNaN(num)) return "0";

  const formatted = new Intl.NumberFormat("id-ID").format(num);
  return formatted;
};

export { numberFormat };
