const copyToClipboard = (text, callback) => {
    if (typeof window !== 'undefined') {
      const hiddenInput = document.createElement('input');
  
      hiddenInput.type = 'text';
      hiddenInput.style.height = '0px';
      hiddenInput.style.opacity = '0';
      hiddenInput.value = text;
  
      document.body.appendChild(hiddenInput);
      hiddenInput.select();
      document.execCommand('copy');
      document.body.removeChild(hiddenInput);
      callback();
    }  
  };
  
  export default copyToClipboard;
  