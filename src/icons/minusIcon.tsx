import { FC } from 'react';

import { Icon } from 'src/types/iconProps';

const MinusIcon: FC<Icon> = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.4999 1.08334H7.49998L6.49996 1.08337H1.50001C1.22386 1.08334 1 1.3072 1 1.58335C1 1.8595 1.22386 2.08336 1.50001 2.08336H6.49999H7.50001H12.5C12.7761 2.08336 13 1.8595 13 1.58335C13 1.3072 12.7761 1.08334 12.4999 1.08334Z" />
  </svg>
);

export default MinusIcon;
