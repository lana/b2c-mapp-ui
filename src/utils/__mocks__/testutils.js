import { useToggle } from './../hooks';

export const FakeUseToggleComponent = ({ initialState }) => {
  const [state, setState] = useToggle(initialState);
  return (
    <div onClick={setState} data-testid="fake-component">
      {state.toString()}
    </div>
  );
};