const addComma = (num: number | string) => {
  if (!num) return 0;
  if (parseFloat(num.toString()) <= 999) return num;
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export default addComma;
