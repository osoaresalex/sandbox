import { useRef, useEffect, useCallback, useState } from "react";

type CallBack = () => void;

interface Options {
  root: null | Element;
  rootMargin: string;
  threshold: number;
}

const DEFAULT_OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 0
};

export const useIntersect = (
  callBack: CallBack,
  options: Options = DEFAULT_OPTIONS
) => {
  let observer: any = useRef({});
  const callBackMemo = useCallback(callBack, []);
  const ref: any = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const onIntersection = useCallback(([newEntry]: any) => {
    if (newEntry.isIntersecting) {
      // This is mount
      setIsIntersecting(true);
    } else {
      // This would potentially be unmount
    }
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(onIntersection, options);

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => observer.current.disconnect();
  }, [options, onIntersection]);

  useEffect(() => {
    if (isIntersecting) {
      callBackMemo();
      observer.current.disconnect();
    }
  }, [isIntersecting, callBackMemo]);

  return ref;
};
