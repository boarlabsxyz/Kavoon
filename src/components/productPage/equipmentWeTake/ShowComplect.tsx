'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';

import CustomImage from 'src/components/common/customImage';

const ComplectModal = dynamic(() => import('./ComplectModal'), {
  ssr: false,
});

import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './ShowComplect.module.css';

function ShowComplect() {
  const { lang: language } = useParams<{ lang: Language }>();
  const [isOpen, setIsOpen] = useState(false);
  const text = lang('CLickHere', language);

  return (
    <>
      <button
        className={st.button}
        type="button"
        onClick={() => setIsOpen(true)}
      >
        {text}
        <CustomImage
          src="/img/icons/showAllArrow.svg"
          alt={text}
          width={24}
          height={24}
        />
      </button>
      {isOpen && <ComplectModal onClose={() => setIsOpen(false)} />}
    </>
  );
}

export default ShowComplect;
