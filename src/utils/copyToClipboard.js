const getHiddenInputElement = (textToCopy) => {
  const result = document.createElement('input');
  result.type = 'text';
  result.style.height = '0';
  result.style.opacity = '0';
  result.value = textToCopy;
  return result;
};

const copyToClipboard = (textToCopy, callback) => {
  if (typeof window === 'undefined') { return; }
  const hiddenInputElement = getHiddenInputElement(textToCopy);
  document.body.appendChild(hiddenInputElement);
  hiddenInputElement.select();
  document.execCommand('copy');
  document.body.removeChild(hiddenInputElement);
  if (callback) { callback(); }
};

export default copyToClipboard;
