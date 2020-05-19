import { allSpacesRegexp } from './regexHelper';

const digitPattern = 'X';

const bankAccountNumberTemplateLookup = {
  MX: 'XXX XXX XXXXXXXXXXX X',
};

const validations = {
  MX: (account) => {
    const accountValue = account.split('');
    const controlDigitIn = Number.parseInt(accountValue.pop(), 10);
    const reduceValue = (result, digit, index) => ((result + (digit * [3, 7, 1][index % 3])) % 10);
    const sum = accountValue.reduce(reduceValue, 0);
    const controlDigitOut = (10 - (sum % 10)) % 10;
    const result = (controlDigitIn === controlDigitOut);
    return result;
  },
};

const validateBankAccountNumber = ({ accountNumber, countryCode: countryCodeToValidate }) => {
  const templateLength = bankAccountNumberTemplateLookup[countryCodeToValidate].replace(allSpacesRegexp, '').length;
  const customValidation = validations[countryCodeToValidate](accountNumber);
  const isMaxLength = (accountNumber.length === templateLength);
  const isValid = isMaxLength && customValidation;
  const result = { isValid, isMaxLength };
  return result;
};

const bankAccountNumberFormatter = ({ accountNumber, template }) => {
  let accountDigitIndex = 0;
  const generateAccountValue = (result, patternCharacter) => {
    if (!accountNumber[accountDigitIndex]) { return result; }
    const nextCharacter = (patternCharacter === digitPattern) ? accountNumber[accountDigitIndex] : patternCharacter;
    if (patternCharacter === digitPattern) { accountDigitIndex++; }
    const newResult = `${result}${nextCharacter}`;
    return newResult;
  };
  const result = template
    .split('')
    .reduce(generateAccountValue, '');
  return result;
};

export {
  bankAccountNumberTemplateLookup,
  bankAccountNumberFormatter,
  validateBankAccountNumber,
};
