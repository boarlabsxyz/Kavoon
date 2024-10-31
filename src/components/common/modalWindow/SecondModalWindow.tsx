import st from './SecondModalWindow.module.css';

type Props = {
  children: React.ReactElement;
  onClose: () => void;
};

function ModalWindow({ children, onClose }: Props) {
  return (
    <div data-testid="overlay" className={st.overlay}>
      <div className={st.modal}>
        <div
          data-testid="close-button"
          className={st.closeButton}
          onClick={() => onClose()}
        >
          <div className={st.pseudo} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default ModalWindow;
