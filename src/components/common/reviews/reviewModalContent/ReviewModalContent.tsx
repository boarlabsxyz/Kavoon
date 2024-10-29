import { useState, useEffect } from 'react';

import * as Sentry from '@sentry/browser';
import translate from 'translate';

import ShowOriginalBtn from 'src/components/common/reviews/showOriginalBtn';
import RateAndDateBox from 'src/components/common/reviews/reviewCard/rateAndDateBox';
import ReviewsPhotoSlider from 'src/components/common/sliders/reviewsPhotoSlider';

import IReview from 'src/types/review';
import { Language } from 'src/types/language';

import st from './ReviewModalContent.module.css';

type Props = {
  review: IReview;
  language: Language;
};

function ReviewModalContent({ review, language }: Props) {
  const { userName, rating, date, reviewLanguage, comment = '' } = review;

  const areLanguagesTheSame =
    language === reviewLanguage ||
    (reviewLanguage === 'uk' && language === ('ua' as Language));

  const [showOriginalReview, setShowOriginalReview] = useState(false);
  const [translatedUserName, setTranslatedUserName] = useState('');
  const [translatedComment, setTranslatedComment] = useState('');

  useEffect(() => {
    const translateData = async (data: string): Promise<string> => {
      try {
        const result = await translate(data, {
          to: language === ('ua' as Language) ? 'uk' : language,
          from: reviewLanguage,
        });
        return result;
      } catch (error) {
        Sentry.captureException(error);
        return data;
      }
    };

    if (!areLanguagesTheSame) {
      translateData(userName).then((text: string) =>
        setTranslatedUserName(text)
      );
    }

    if (!areLanguagesTheSame && comment) {
      translateData(comment).then((text: string) => setTranslatedComment(text));
    }
  }, [comment, areLanguagesTheSame, language, reviewLanguage, userName]);

  const onBtnClick = () => {
    setShowOriginalReview(!showOriginalReview);
  };

  const getTheRightContent = (text: string, translatedContent: string) =>
    areLanguagesTheSame || showOriginalReview ? text : translatedContent;

  const existPhoto = !!review.images.length;

  return (
    <div className={st.wrapper}>
      {existPhoto && <ReviewsPhotoSlider photos={review.images} />}
      <div className={existPhoto ? st.textContentNarrow : st.textContentWide}>
        <h3 className={st.userName}>
          {getTheRightContent(userName, translatedUserName)}
        </h3>
        <RateAndDateBox rating={rating} date={date} language={language} />
        {comment && (
          <div className={st.commentWrapper}>
            <span className={st.commentText}>
              {getTheRightContent(comment, translatedComment)}
            </span>
          </div>
        )}
        {!areLanguagesTheSame && (
          <ShowOriginalBtn
            showOriginalReview={showOriginalReview}
            onClick={onBtnClick}
            language={language}
          />
        )}
      </div>
    </div>
  );
}
export default ReviewModalContent;
