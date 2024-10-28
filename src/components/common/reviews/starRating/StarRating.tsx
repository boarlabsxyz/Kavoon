import { useState } from 'react';

import Star from './Star';

import st from './StarRating.module.css';

type Props = {
  receivedRating?: number;
  sendRating?: (star: number) => void;
  cursorStyle?: string;
};

function StarRating({
  receivedRating,
  sendRating = () => {},
  cursorStyle = 'auto',
}: Props) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  const onClickHandler = (star) => {
    if (receivedRating) {
      return;
    }
    setRating(star);
    sendRating(star);
  };

  return (
    <ul className={st.wrapper}>
      {stars.map((star) => (
        <li
          key={star}
          className={`${st.star} ${
            star <= (receivedRating || hover || rating)
              ? st.selected
              : st.unselected
          }`}
          style={{ cursor: cursorStyle }}
          onClick={() => onClickHandler(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(rating)}
        >
          <Star />
        </li>
      ))}
    </ul>
  );
}

export default StarRating;
