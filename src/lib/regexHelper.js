const allSpacesRegexp = / /g;
const nonDigitSlashRegexp = /\D\/$/;
const nonDigitRegexp = /\D/g;
const validDateRegexp = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/;
const onlyDigitsRegexp = /\d+/;

export {
  allSpacesRegexp,
  nonDigitSlashRegexp,
  nonDigitRegexp,
  validDateRegexp,
  onlyDigitsRegexp,
};
