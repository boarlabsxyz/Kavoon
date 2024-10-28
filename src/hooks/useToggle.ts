import { useCallback, useState, useEffect } from 'react';

const useToggle = (
  initialState = false
): [boolean, (nextState?: boolean) => void] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback((nextState?: boolean) => {
    setState((prevState) =>
      typeof nextState === 'boolean' ? nextState : !prevState
    );
  }, []);

  useEffect(() => {
    document.body.style.overflow = state ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [state]);

  return [state, toggle];
};

export default useToggle;
