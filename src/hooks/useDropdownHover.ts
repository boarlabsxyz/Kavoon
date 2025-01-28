import { useCallback } from 'react';

const useDropdownHover = (setIsShowList: (value: boolean) => void) => {
  const handleMouseEnter = useCallback(
    () => setIsShowList(true),
    [setIsShowList]
  );
  const handleMouseLeave = useCallback(
    () => setIsShowList(false),
    [setIsShowList]
  );

  return { handleMouseEnter, handleMouseLeave };
};

export default useDropdownHover;
