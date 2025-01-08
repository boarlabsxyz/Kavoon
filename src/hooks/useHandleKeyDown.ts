import { useCallback } from 'react';

const useHandleKeyDown = (
  toggleDropdown: () => void,
  setIsShowList: (value: boolean) => void,
  isShowList: boolean
) => {
  return useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleDropdown();
      } else if (event.key === 'Escape' && isShowList) {
        setIsShowList(false);
      }
    },
    [toggleDropdown, setIsShowList, isShowList]
  );
};

export default useHandleKeyDown;
