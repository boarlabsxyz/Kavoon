import { FC, CSSProperties } from 'react';

import BeatLoader from 'react-spinners/BeatLoader';

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
  <BeatLoader
    color={color}
    loading={loading}
    cssOverride={override}
    size={22}
    margin={8}
    speedMultiplier={0.7}
  />
);

export default Spinner;
