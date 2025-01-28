import { FC, CSSProperties } from 'react';

import BeatLoader from 'react-spinners/BeatLoader';
import st from './loading.module.css';

interface IProps {
  loading?: boolean;
  color?: string;
}

const override: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '5px',
  paddingBottom: '5px',
};

const Spinner: FC<IProps> = ({ loading = true, color = '#11a0a9' }) => (
  <div className={st.wrapper}>
    <BeatLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={22}
      margin={8}
      speedMultiplier={0.7}
    />
  </div>
);

export default Spinner;
