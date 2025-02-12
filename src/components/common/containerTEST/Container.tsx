import { FC, ReactElement } from 'react';

import styles from './Container.module.css';

interface IProps {
  children: ReactElement | ReactElement[];
}

const Container: FC<IProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
