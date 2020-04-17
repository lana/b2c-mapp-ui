export const dateToString = date => {
	return (
		('0' + date.getUTCDate()).slice(-2) +
		'/' +
		('0' + (date.getUTCMonth() + 1)).slice(-2) +
		'/' +
		date.getFullYear()
	)
}

export const strToDate = date => `${date.slice(6)}-${date.slice(3, 5)}-${date.slice(0, 2)}`

// Check if it is valid number
const checkDateValue = (str, max) => {
  if (str.charAt(0) !== '0' || str === '00') {
    let num = parseInt(str);
    if (isNaN(num) || num <= 0) num = 1;
    if (num > max) num = max;
    str = num > parseInt(max.toString().charAt(0)) && num.toString().length === 1 ? '0' + num : num.toString();
  }
  return str;
};

// AutoformatDate append slash to date
export const autoformatDate = input => {
  if (/\D\/$/.test(input)) input = input.substr(0, input.length - 2);
  let values = input.split('/').map(v => {
    return v.replace(/\D/g, '');
  });
  if (values[0]) values[0] = checkDateValue(values[0], 31);
  if (values[1]) values[1] = checkDateValue(values[1], 12);
  let output = values.map((v, i) => {
    return (v.length === 2 && i < 2) || i < values.length - 1 ? v + '/' : v;
  });
  return output.join('').substr(0, 14);
};
