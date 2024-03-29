import { nonDigitSlashRegexp, nonDigitRegexp } from './regexHelper';

const getFormattedStringFromDate = (date: Date) => {
  const datePart = `0${date.getUTCDate()}`.slice(-2);
  const monthPart = `0${date.getUTCMonth() + 1}`.slice(-2);
  const yearPart = date.getUTCFullYear();
  const result = `${datePart}/${monthPart}/${yearPart}`;
  return result;
};

const getDateFromDateString = (date: string) => `${date.slice(6)}-${date.slice(3, 5)}-${date.slice(0, 2)}`;

const checkDateValue = (value: string, max: number) => {
  if (!((value.charAt(0) !== '0') || (value === '00'))) { return value; }
  let parsedValue = parseInt(value, 10);
  if (Number.isNaN(parsedValue) || (parsedValue <= 0)) { parsedValue = 1; }
  if (parsedValue > max) { parsedValue = max; }
  const result = (parsedValue > Number.parseInt(`${max}`.charAt(0), 10) && (`${parsedValue}`.length === 1)) ? `0${parsedValue}` : `${parsedValue}`;
  return result;
};

const autoformatDate = (input: string) => {
  const sanitizedInput = (nonDigitSlashRegexp.test(input)) ? input.substr(0, input.length - 2) : input;
  const values = sanitizedInput.split('/').map((value) => value.replace(nonDigitRegexp, ''));
  if (values[0]) { values[0] = checkDateValue(values[0], 31); }
  if (values[1]) { values[1] = checkDateValue(values[1], 12); }
  const output = values.map((value, i) => ((((value.length === 2) && (i < 2)) || (i < (values.length - 1))) ? `${value}/` : value));
  const result = output.join('').substr(0, 14);
  return result;
};

const isDateTextInputValid = (input: string) => {
  const day = Number(input.slice(0, 2));
  const month = (Number(input.slice(3, 5)) - 1);
  const year = Number(input.slice(6));
  const date = new Date(Date.UTC(year, month, day));
  const isYearMatching = (date.getUTCFullYear() === year);
  const isMonthMatching = (date.getUTCMonth() === month);
  const isDayMatching = (date.getUTCDate() === day);
  const result = (isYearMatching && isMonthMatching && isDayMatching);
  return result;
};

export {
  getFormattedStringFromDate,
  getDateFromDateString,
  autoformatDate,
  isDateTextInputValid,
};
