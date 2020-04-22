import { useState } from 'preact/hooks';

const useToggle = (initialState) => {
  const [state, setState] = useState(initialState);
  const result = [state, () => setState(!state)];
  return result;
};

export { useToggle };
