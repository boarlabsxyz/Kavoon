import { v4 as uuidv4 } from 'uuid';

import st from './PlacingOrderDetails.module.css';

type Props = {
  text: string;
};

function PlacingOrderDetails({ text }: Props) {
  const details: string[] = text.split('\n');

  return (
    <ol className={st.detailsList}>
      {details.map((item) => (
        <li key={uuidv4()} className={st.detailsListItem}>
          <span
            dangerouslySetInnerHTML={{ __html: item.replace(/\n/g, '<br />') }}
          />
        </li>
      ))}
    </ol>
  );
}

export default PlacingOrderDetails;
