/* eslint-disable react/prop-types */

import { useToggle } from '../hooks';

const FakeUseToggleComponent = ({ initialState }) => {
  const [state, setState] = useToggle(initialState);
  return (
    <div onClick={setState} data-testid="fake-component">
      {`${state}`}
    </div>
  );
};

export { FakeUseToggleComponent };
