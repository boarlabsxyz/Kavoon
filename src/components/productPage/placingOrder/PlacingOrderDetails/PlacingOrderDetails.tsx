import DOMPurify from 'isomorphic-dompurify';

import st from './PlacingOrderDetails.module.css';

type Props = {
  text: string;
};

function PlacingOrderDetails({ text }: Props) {
  const details: string[] = text.split('\n');

  return (
    <ol className={st.detailsList}>
      {details.map((item, index) => {
        const sanitizedContent = DOMPurify.sanitize(
          item.replace(/\n/g, '<br />')
        );
        return (
          <li key={index} className={st.detailsListItem}>
            <span dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
          </li>
        );
      })}
    </ol>
  );
}

export default PlacingOrderDetails;
