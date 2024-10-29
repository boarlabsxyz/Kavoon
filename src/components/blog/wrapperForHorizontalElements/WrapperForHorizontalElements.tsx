import st from './WrapperForHorizontalElements.module.css';

function WrapperForHorizontalElements({ children }) {
  return <div className={st.wrapper}>{children}</div>;
}

export default WrapperForHorizontalElements;
