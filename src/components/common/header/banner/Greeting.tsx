import CustomImage from 'src/components/common/customImage';

import { Language } from 'src/types/language';

import st from 'src/components/common/header/Header.module.css';

type GreetingProps = {
  lang: Language;
};

function Greeting({ lang }: GreetingProps) {
  return (
    <div className={st.greeting}>
      <CustomImage
        src={`/img/greeting/${lang}/greeting.svg`}
        alt="Ukrainian greeting"
        width={118}
        height={30}
      />
      <CustomImage
        src="/icons/flag.svg"
        alt="Ukrainian flag"
        width={24}
        height={30}
      />
    </div>
  );
}

export default Greeting;
