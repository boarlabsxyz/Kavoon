import React from 'react';
import st from './PlacingOrderDetails.module.css';

type Props = {
  text: string;
};

function PlacingOrderDetails({ text }: Props) {
  const sanitizedText = text.replace(/<br\s*\/?>/g, '');
  const details: string[] = sanitizedText.split('\n');

  return (
    <ol className={st.detailsList}>
      {details.map((item, index) => (
        <li key={`detail-${index}`} className={st.detailsListItem}>
          {item
            .split('<b>')
            .map((part, subIndex) => {
              if (subIndex === 0) {
                return <span key={`plain-${index}-${subIndex}`}>{part}</span>;
              }
              const [boldContent, ...rest] = part.split('</b>');
              return (
                <React.Fragment key={`fragment-${index}-${subIndex}`}>
                  <strong key={`bold-${index}-${subIndex}`}>
                    {boldContent}
                  </strong>
                  <span key={`rest-${index}-${subIndex}`}>
                    {rest.join('</b>')}
                  </span>
                </React.Fragment>
              );
            })
            .reduce<React.ReactNode[]>(
              (acc, curr, reduceIndex) => [
                ...acc,
                reduceIndex > 0 && <br key={`br-${index}-${reduceIndex}`} />,
                curr,
              ],
              []
            )}
        </li>
      ))}
    </ol>
  );
}

export default PlacingOrderDetails;
