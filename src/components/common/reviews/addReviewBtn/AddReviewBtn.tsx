import { ButtonHTMLAttributes } from 'react';

import st from './AddReviewBtn.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

function AddReviewBtn({
  type = 'button',
  onClick = null,
  children,
  ...props
}: Props) {
  return (
    <button
      type={type}
      aria-label="write a review"
      className={st.wrapper}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default AddReviewBtn;
