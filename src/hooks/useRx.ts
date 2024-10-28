import { useState, useEffect } from 'react';
import { Observable } from 'rxjs';

function useRx<T>(signal: Observable<T>): T {
  let initial: T | undefined;

  signal
    .subscribe((value) => {
      initial = value;
    })
    .unsubscribe();

  const [state, setState] = useState(initial);

  useEffect(() => {
    const subscription = signal.subscribe(setState);
    return () => {
      subscription.unsubscribe();
    };
  }, [signal]);

  return state;
}

export default useRx;
