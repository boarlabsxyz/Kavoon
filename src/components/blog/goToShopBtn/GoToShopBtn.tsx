import Link from 'next/link';

import lang from 'src/i18n/lang';

import st from './GoToShopBtn.module.css';

function GoToShopBtn({ language }) {
  return (
    <Link href="/" className={st.button}>
      <span>{lang('ReturnToShop', language)}</span>
    </Link>
  );
}

export default GoToShopBtn;
