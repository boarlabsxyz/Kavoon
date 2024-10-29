import { v4 as uuidv4 } from 'uuid';

import st from './ServiceConditionsDetails.module.css';

type Props = {
  text: string;
};

function ServiceConditionsDetails({ text }: Props) {
  const details: string[] = text.split('\n');

  return (
    <ul className={st.list}>
      {details.map((item) => (
        <li key={uuidv4()} className={st.item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
export default ServiceConditionsDetails;
