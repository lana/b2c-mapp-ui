const getHiddenInputElement = (textToCopy: string) => {
  const result = document.createElement('input');
  result.type = 'text';
  result.style.height = '0';
  result.style.opacity = '0';
  result.value = textToCopy;
  return result;
};

const copyTextToClipboard = (textToCopy: string) => {
  if (typeof window === 'undefined') { return; }
  const hiddenInputElement = getHiddenInputElement(textToCopy);
  document.body.appendChild(hiddenInputElement);
  hiddenInputElement.select();
  document.execCommand('copy');
  document.body.removeChild(hiddenInputElement);
};

export { copyTextToClipboard };
