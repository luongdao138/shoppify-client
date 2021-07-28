import { useEffect, useRef } from 'react';

interface Params {
  eventType: string;
  target: any;
  listener: (e?: any) => void;
}

const useEventListener = ({ eventType, target = window, listener }: Params) => {
  const listenerRef = useRef<(e?: any) => void>(() => {});

  useEffect(() => {
    listenerRef.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!target.addEventListener) return;

    const eventLister = (e: any) => listenerRef.current(e);
    target.addEventListener(eventType, eventLister);

    return () => target.removeEventListener(eventType, eventLister);
  }, [eventType, target]);
};

export default useEventListener;
