import StarRating from 'src/components/common/reviews/starRating';

import { Language } from 'src/types/language';

import st from './RateAndDateBox.module.css';

type Props = {
  rating: number;
  date: number;
  language: Language;
};

function RateAndDateBox({ rating, date, language }: Props) {
  const parsedDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const createdAt = parsedDate.toLocaleDateString(language, options);

  return (
    <div className={st.wrapper}>
      <StarRating receivedRating={rating} />
      <p className={st.createdAt}>{createdAt}</p>
    </div>
  );
}
export default RateAndDateBox;
