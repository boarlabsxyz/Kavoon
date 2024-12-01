import Spinner from 'src/components/common/spinner';
import st from './loading.module.css';

function Loader() {
  return (
    <div className={st.wrapper}>
      <Spinner />
    </div>
  );
}

export default Loader;
