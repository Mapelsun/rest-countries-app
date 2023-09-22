export const convertToLowerCase = (str) => str.toLowerCase()

export const formatNumberWithCommas = (number) => {
  if (!number || number === 0) {
    return "N/A";
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
