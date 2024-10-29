import { useParams } from 'next/navigation';

import { Language } from 'src/types/language';
import { getProductById } from 'src/helpers/getProducts';
import lang from 'src/i18n/lang';

import st from './InfoBeforeSelecting.module.css';

function InfoBeforeSelecting() {
  const { lang: language, productId } = useParams<{
    lang: Language;
    productId: string;
  }>();

  const product = getProductById(productId);
  const shortDescription: string = product.description.short;

  // const regExp = /(увагу!|attention!|uwagę!)/;
  const regExp =
    /(увагу!|attention!|uwagę!|Дисклеймер!|Disclaimer!|Zastrzeżenie!|Важливо:|Important:|Ważne:)/;
  let text: string[];
  if (shortDescription) {
    text = lang(shortDescription, language).split('\n');
  } else {
    text = lang('InfoBeforeSelecting', language).split('\n');
  }

  return (
    <div>
      {text.map((sentence) => (
        <p key={sentence} className={st.info}>
          {regExp.test(sentence) ? <strong>{sentence}</strong> : sentence}
        </p>
      ))}
    </div>
  );
}

export default InfoBeforeSelecting;
