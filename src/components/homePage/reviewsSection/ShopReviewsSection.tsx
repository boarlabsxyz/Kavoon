import Container from 'src/components/common/container';
import ReviewsSlider from 'src/components/common/sliders/reviewsSlider';

import lang from 'src/i18n/lang';
import getAllReviews from 'src/services/mongodb';

import { Language } from 'src/types/language';

import st from './ShopReviewsSection.module.css';

type Props = {
  language: Language;
  categoryId?: string;
};

async function ShopReviewsSection({ language, categoryId = null }: Props) {
  let reviews: any;

  if (categoryId) {
    reviews = await getAllReviews({ categoryId: categoryId, showOnSite: true });
  } else {
    reviews = await getAllReviews({ showOnSite: true });
  }

  return (
    <section className={st.section}>
      <Container>
        {reviews.length > 0 && (
          <>
            <h2 className={st.title}>
              {lang('Reviews', language)}{' '}
              <span className={st.amount}>({reviews.length})</span>
            </h2>

            <ReviewsSlider reviews={reviews} language={language} />
          </>
        )}
      </Container>
    </section>
  );
}

export default ShopReviewsSection;
