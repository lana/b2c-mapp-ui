type Jest = typeof jest;

const silenceDeprecationErrorsAndInnerComponentWarnings = (jest: Jest) => {
  console.error = jest.fn(); // eslint-disable-line no-console
  console.warn = jest.fn(); // eslint-disable-line no-console
  console.dir = jest.fn(); // eslint-disable-line no-console
};

const silenceInnerComponentWarnings = (jest: Jest) => {
  console.warn = jest.fn(); // eslint-disable-line no-console
  console.dir = jest.fn(); // eslint-disable-line no-console
};

export {
  silenceDeprecationErrorsAndInnerComponentWarnings,
  silenceInnerComponentWarnings,
};
