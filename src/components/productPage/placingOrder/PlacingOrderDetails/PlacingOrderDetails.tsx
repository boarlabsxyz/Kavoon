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
          {item
            .split('<b>')
            .map((part, index, arr) => {
              if (index === 0) {
                return part;
              }
              const [boldContent, ...rest] = part.split('</b>');
              return (
                <>
                  <strong>{boldContent}</strong>
                  {rest.join('</b>')} {/* Join remaining parts */}
                </>
              );
            })
            .reduce((prev, curr) => (
              <>
                {prev}
                <br key={uuidv4()} />
                {curr}
              </>
            ))}
        </li>
      ))}
    </ol>
  );
}

export default PlacingOrderDetails;
