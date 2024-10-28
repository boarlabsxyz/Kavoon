import { FC } from 'react';

import st from './Title.module.css';

const Title: FC = () => (
  <h1 className={st.title}>
    Kav<span className={st.color}>oo</span>n
  </h1>
);

export default Title;
