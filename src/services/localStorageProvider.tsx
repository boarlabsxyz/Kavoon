'use client';

import CartLogic from 'src/data/logic/cartLogic';
import { useEffect } from 'react';

function LocalStorageProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const dispose = CartLogic.init();

    return () => {
      dispose();
    };
  }, []);
  return <>{children}</>;
}

export default LocalStorageProvider;
