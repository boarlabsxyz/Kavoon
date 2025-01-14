import { useCallback, KeyboardEvent } from 'react';

const KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
} as const;

interface KeyDownHandler {
  (event: KeyboardEvent<HTMLElement>): void;
}
const useHandleKeyDown = (
  toggleDropdown: () => void,
  setIsShowList: (value: boolean) => void,
  isShowList: boolean
): KeyDownHandler => {
  return useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.key === KEYS.ENTER || event.key === KEYS.SPACE) {
        event.preventDefault();
        toggleDropdown();
      } else if (event.key === KEYS.ESCAPE && isShowList) {
        setIsShowList(false);
      }
    },
    [toggleDropdown, setIsShowList, isShowList]
  );
};

export default useHandleKeyDown;
