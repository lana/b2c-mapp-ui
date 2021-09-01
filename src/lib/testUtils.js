const silenceDeprecationErrorsAndInnerComponentWarnings = (jest) => {
  console.error = jest.fn(); // eslint-disable-line no-console
  console.warn = jest.fn(); // eslint-disable-line no-console
  console.dir = jest.fn(); // eslint-disable-line no-console
};

const silenceInnerComponentWarnings = (jest) => {
  console.warn = jest.fn(); // eslint-disable-line no-console
  console.dir = jest.fn(); // eslint-disable-line no-console
};

export {
  silenceDeprecationErrorsAndInnerComponentWarnings,
  silenceInnerComponentWarnings,
};
