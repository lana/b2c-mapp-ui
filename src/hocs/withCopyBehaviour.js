export default WrapComp => {
  const copy = ({ value, callback = () => {}, single = false, error = () => {} }) => {
    return e => {
      e.preventDefault();

      if (single) {
        const target = e.target;

        target.innerHTML = 'copiado';
        target.style.color = '#959B9C';

        let textTimeout = window.setTimeout(() => {
          target.innerHTML = 'copiar';
          target.style.color = '#00C2DC';
          clearTimeout(textTimeout);
          return;
        }, 1500);
      }

      if (value !== false && value !== '') {
        const inp = document.createElement('textarea');
        inp.value = value;
        document.querySelector('body').appendChild(inp);
        inp.select();
        document.execCommand('copy');
        inp.parentNode.removeChild(inp);
        callback(value);
      } else {
        error();
      }
    };
  };
  return props => (
    <WrapComp onClick={copy(props)} {...props}>
      {props.children}
    </WrapComp>
  );
};
