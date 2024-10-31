import Container from 'src/components/common/container';
import CartPageStatus from 'src/components/cartPage/cartPageStatus';

import { Language } from 'src/types/language';

import st from './StatusSection.module.css';

type Props = {
  language: Language;
};

function StatusSection({ language }: Props) {
  return (
    <section className={st.section}>
      <Container>
        <CartPageStatus language={language} />
      </Container>
    </section>
  );
}

export default StatusSection;
